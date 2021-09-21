import axios from 'axios'
import { MessageBox, Message } from "element-ui";
import store from '@/store'
import { getToken} from "./auth";

const service = axios.create({
    // url = base url + request url
    baseURL: process.env.VUE_APP_BASE_API,
    // send cookies when cross-domain requests
    withCredentials: true,
    // request timeout
    timeout: 5000

})