import request from "../utils/request.config.js";

const testApi = {

    /**
     * 测试请求
     * @param params
     * @returns {AxiosPromise}
     */
    test: (params) => {
        return request.get('/test', params)
    }
};


export default testApi