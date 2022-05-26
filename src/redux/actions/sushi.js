import axios from "axios";
import config from './../../config.js'

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
      `https://${config.hostUrl}/sushi?${
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
