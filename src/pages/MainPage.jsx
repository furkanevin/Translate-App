import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer, getLanguages } from '../app/chatState';
import Select from 'react-select';

const MainPage = () => {
  const chatState = useSelector((state) => state.chatState);
  const dispatch = useDispatch();
  // stateler
  const [prompt, setPrompt] = useState('');
  const [sourceLang, setSourceLang] = useState({
    value: 'tr',
    label: 'Turkish',
  });
  const [targetLang, setTargetLang] = useState({
    value: 'en',
    label: 'English',
  });

  // dilleri alma
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  // çevirmek için istek atma
  const handleSubmit = () => {
    dispatch(getAnswer(prompt));
  };

  console.log(sourceLang);

  return (
    <>
      <h1>Hayal Edendler</h1>
      <div className="translator">
        <div className="left">
          <Select
            options={chatState.languages}
            value={sourceLang}
            onChange={setSourceLang}
          />
        </div>
        <div className="right"></div>
      </div>
      <input type="text" onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={() => handleSubmit()}>Çevir</button>
    </>
  );
};

export default MainPage;

//
