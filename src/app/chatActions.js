export function fetchDataError(bool) {
  return {
    type: 'ITEMS_HAVE_ERROR',
    hasError: bool,
  };
}

export function fetchDataLoading(bool) {
  return {
    type: 'ITEMS_ARE_LOADING',
    isLoading: bool,
  };
}

export function fetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
}

// export function fetchData(url) {
//   return (dispatch) => {
//     dispatch(itemsAreLoading(true));

//     axios
//       .get(url)
//       .then((response) => {
//         if (response.status !== 200) {
//           throw Error(response.statusText);
//         }

//         dispatch(itemsAreLoading(false));

//         return response;
//       })
//       .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
//       .catch(() => dispatch(itemsHaveError(true)));
//   };
// }
