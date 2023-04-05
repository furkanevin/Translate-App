import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// dilleri çekme
export const getLanguages = createAsyncThunk(
  'translate/getLanguage',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://text-translator2.p.rapidapi.com/getLanguages',
      headers: {
        'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
    };

    const langResponse = await axios.request(options);

    return langResponse.data.data.languages;
  }
);

// çeviri yapma
export const getAnswer = createAsyncThunk(
  'translate/getAnswer',
  async (props) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append('source_language', props.sourceLang.value);
    encodedParams.append('target_language', props.targetLang.value);
    encodedParams.append('text', props.prompt);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: encodedParams,
    };

    // istek atılıyor
    const response = await axios.request(options);

    return response.data;
  }
);

const initialState = {
  chat: '',
  languages: [],
  isLoading: false,
};

export const chatSlice = createSlice({
  name: 'Chat',
  initialState,
  // thunk'ta reducer yerine extra kullanılır
  extraReducers: {
    // bekleme durumunda çalışır
    [getAnswer.pending]: (state) => {
      state.isLoading = true;
    },
    // eğer veri gelirse çalışır
    [getAnswer.fulfilled]: (state, action) => {
      state.chat = action.payload.data.translatedText;
      state.isLoading = false;
    },
    // eğer veri gelirken hata olursa çalışır
    [getAnswer.rejected]: (state) => {
      state.isLoading = false;
    },
    // dilleri belirlemeisLoading
    [getLanguages.fulfilled]: (state, action) => {
      state.languages = action.payload.map((lang) => ({
        value: lang.code,
        label: lang.name,
      }));
    },
  },
});

export default chatSlice.reducer;
