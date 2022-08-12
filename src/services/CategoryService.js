import axios from "axios";
import {config} from "./token";

class CategoryService {
  constructor() {
    this.baseUrl=`${process.env.REACT_APP_BASE_ENDPOINT}/categories`;
  }

 
 async getAllCategories() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }

  async getOneCategory(id){
    config.url = `${this.baseUrl}/${id}`;
    config.method="get"
    return await axios(config).then((resp) => resp.data);
  }

  async deleteOneCategory(id) {
    config.url = `${this.baseUrl}/${id}`;
    config.method="delete"
    return await axios(config)
    .then((resp) => resp)
    .catch(err => err.response.status);
  }

  async postOneCategory(category) {
    config.url=this.baseUrl;
    config.data=category;
    config.method="post";
    return await axios(config).then((resp) => resp.data);
  }

  async putOneCategory(id,category){
    config.url = `${this.baseUrl}/${id}`;
    config.method="put";
    config.data=category;
    //console.log(url)
    return await axios(config).then(resp => resp.data);
  }

  
}

export default CategoryService;
