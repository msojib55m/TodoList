import axios,{ Axios } from "axios";

class Api{
    client:Axios;
    constructor()
    {
        this.client = axios.create({
          baseURL: "https://jsonplaceholder.typicode.com",
          timeout:5000,
        })
        this.client.interceptors.request.use(this.requst);
        this.client.interceptors.response.use(this.response);
    }

  get(url: string, params: object = {}, options: object = {}) {
        return this.client.get(url, {
            params: params,
            ...options

        });
    }

    post(url: string, params: object | FormData = {}, options: object = {}) {
        return this.client.post(url, params, {
            ...options
        });
    }

    put(url: string, params: object | FormData = {}, options: object = {}) {
        return this.client.put(url, params, {
            ...options
        });
    }

    delete(url: string, params: object = {}, options: object = {}) {
        return this.client.delete(url, {
            params: params,
            ...options
        });
    }


    requst(config:any)
    {
       console.log("Request Interceptor:",config)
       if(window.navigator.onLine === false)
       {
          alert("No interner connection");
          return Promise.reject(new Error("No internet connection"))
       }
        return config;
    }
       response(response: any) {
        console.log("Response Interceptor:", response);
        return response;
    }
}
export default new Api();

