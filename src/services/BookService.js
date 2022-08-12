import axios from "axios";
import {config} from "./token";

class BookService{
    constructor(){
        this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/books`;
    }

    async getAllBooks(){
        return await axios.get(this.baseUrl).then(resp => resp.data);
    }

    async getOneBook(id){
        config.url = `${this.baseUrl}/${id}`;
        config.method="get";
        return await axios(config).then(resp => resp.data);
    }

    async postOneBook(payload){
        config.url=this.baseUrl;
        config.data=payload;
        config.method="post";
        return await axios(config).then(resp => resp.data);
    }

    async putOneBook(id,payload){
        config.url = `${this.baseUrl}/${id}`;
        config.data=payload;
        config.method="put";
        return await axios(config).then(resp => resp.data);
    }

    async deleteOneBook(id){
        config.url = `${this.baseUrl}/${id}`;
        config.method="delete"
        await axios(config).then(resp => resp);
    }
}

export default BookService;