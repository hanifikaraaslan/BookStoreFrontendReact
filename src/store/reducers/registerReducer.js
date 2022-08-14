import { REGISTER } from "../actions/registerAction";
import { registerItems } from "../initialValues/registerItems";

function registerReducer(state={}, { type, payload }) {
  
    switch (type) {
      case REGISTER:
        console.log("reducer")
        return {
          ...state,
          registerItems:{
            payload,
          }
        };
  
      default:
        return { ...state };
    }
  }
  
  export default registerReducer;