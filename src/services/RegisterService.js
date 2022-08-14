import axios from "axios";
import {config} from "./token";


class RegisterService{
    constructor(){
        this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/users`;
    }

  async postOneRegister(payload){
    config.url=this.baseUrl;
    config.data=payload;
    config.method="post";
    return await axios(config).then(resp => resp.data);
}
}
export default RegisterService;