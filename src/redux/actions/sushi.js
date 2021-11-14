import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchSushi = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });

  axios
    .get(
      `https://api.frolov.store/sushi?${
        category !== null ? `group=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setSushi(data));
    });
};

export const setSushi = (items) => ({
  type: "SET_SUSHI",
  payload: items,
});
