import RegisterService from "../../services/RegisterService";

export const REGISTER = "REGISTER";

const registerService = new RegisterService();

export function register(body) {
  return function (dispatch) {
    registerService
      .postOneRegister(body)
      .then((resp) => resp)
      .then((resp) => dispatch({ type: REGISTER, payload: resp }));
  };
}