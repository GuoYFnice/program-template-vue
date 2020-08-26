import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from "axios";
import config from '../config/index'

const service = axios.create({
    baseURL: config ? config.baseURL : '192.168.0.1', // api的base_url
    timeout: 10000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 这里可以自定义一些config 配置

        return config
    },
    (error:any) => {
        //  这里处理一些请求出错的情况
        // 可以统一弹出错误
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const res = response.data
        // 这里处理一些response 正常返回时的逻辑
        // 可以判断token，查看是否登陆过期
        return res
    },
    (error: any) => {
        // 这里处理一些response 出错时的逻辑
        // 捕获错误信息然后进行错误提示
        return Promise.reject(error)
    }
)
/**
 * ? 定义几种请求类型。
 * @param { String } url 接口地址；
 * @param { Object || null } param 传递参数；
 * @param { Object } headers 请求头。
 */
export default {
    get(url: string, param: object, headers: object) {
      return service.get(url, {
        params: param,
        headers
      });
    },
    post(url: string, param: object, headers: object) {
      return service.post(url, param, {
        headers
      });
    },
    put(url: string, param: object, headers: object) {
      return service.put(url, param, {
        headers
      });
    },
    delete(url: string, headers: object) {
      return service.delete(url, {
        headers: Object.assign(
          {
            "Content-Type": "multipart/form-data"
          },
          headers
        )
      });
    },
    postExcel(url: string, headers: object) {
      return service.post(url, {
        headers,
        responseType: "blob"
      });
    }
  };