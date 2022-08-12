import axios from "axios";
import {config} from "./token";

class AuthorService {
  constructor() {
    config.url=`${process.env.REACT_APP_BASE_ENDPOINT}/authors`;
  }

  async getAllAuthors() {
    config.method="get";
    return await axios(config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getOneAuthor(id) {
    config.url= `${config.url}/${id}`;
    config.method="get";
    return await axios(config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async postOneAuthor(payload) {
    config.method="post";
    config.data=payload;
    return await axios(config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async putOneAuthor(id, author) {
    config.method="put"
    config.data=author;
    return await axios(id, config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneAuthor(id) {
    config.method="delete";
    return await axios(id,config)
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }
}

export default AuthorService;
