// Any action related to our products goes here :)
import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST }); // This will call in the recuder and set loading to true, products will still be empty...

    const { data } = await axios.get('/api/products'); // Api http request

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data }); // this will set the data to the paiload
  } catch (error) {
    dispatch({
      tpye: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      // Here, we are adding the message shown on postsman when there is an error :)
    });
  }
};
