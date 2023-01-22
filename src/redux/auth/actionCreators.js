import axios from "axios";
import actions from "./actions";
import settings from "../../settings";
export const signUp = (type, data) => {
  return async (dispatch) => {
    const res = await axios.post(`${settings.domain}/${type}/signUp`, data);
    console.log(res)
    dispatch({
      type: actions.SET_SIGNUP_CREDENTIALS,
      payload: null || res?.data?.result,
    });
  };
};
export const login = (type,data) => {
  return async (dispatch) => {
    let res// = await axios.post(`${settings.domain}/${type}/login`, data);
    res = {
      data: {
        email: "darkslatest@gmail.com",
        roles: ["teacher"],
        id: "63cac2bc2c56906b8c80df88"
    }
    }
    console.log(res)
    dispatch({
      type: actions.SET_LOGIN_CREDENTIALS,
      payload: res?.data || null,
    });
  };
};