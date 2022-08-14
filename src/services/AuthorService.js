import axios from "axios";
import {config} from "./token";

class AuthorService {
  constructor() {
    this.baseUrl=`${process.env.REACT_APP_BASE_ENDPOINT}/authors`;
  }

  async getAllAuthors() {
    return await axios
      .get(this.baseUrl)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getOneAuthor(id) {
    return await axios.get(`${this.baseUrl}/${id}`)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async postOneAuthor(payload) {
    config.method="post";
    config.data=payload;
    config.url=this.baseUrl;
    return await axios(config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async putOneAuthor(id, author) {
    config.method="put"
    config.data=author;
    config.url=this.baseUrl;
    return await axios(id, config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneAuthor(id) {
    config.method="delete";
    config.url=`${this.baseUrl}/${id}`
    return await axios(config)
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }
}

export default AuthorService;
