import http from './request.js';
import utils from './util';
import log from './log'

let {
    platform
} = wx.getSystemInfoSync();

// 当前环境  开发版本: develop 体验版本: trial 正式版本: release
let env = 'develop';

// 配置baseURL
const serverAddress = {
    // 正式版本服务器地址
    release: 'https://api.vizz.top',
    // 体验版本环境服务器地址
    trial: 'https://api.vizz.top',
    // 开发版本环境服务器地址
    develop: 'https://api.vizz.top'
};

const request = http({
    baseURL: serverAddress[env],
    timeout: 60 * 1000,
    header: {
        'Content-Type': 'application/json'
    },
})

// 请求拦截
request.interceptors.request.use(async (config, ...args) => {

    let token = wx.getStorageSync('token');
    config.header.Authorization = `Bearer ${token}`;
    return config;
})

// 响应拦截
request.interceptors.response.use((response, ...args) => {

    let {
        code,
        message
    } = response.data;

    if (code === 200) {

        return response;
    }

    if (message) wx.showToast({
        title: message,
        icon: 'none'
    });
    return Promise.reject(message);
})

// 错误监听
request.onerror = async (...args) => {

    wx.showToast({
        title: args[3],
        icon: 'none',
        duration: 3000
    })
    console.log('[请求失败]', `当前请求URL-------${args[1]}`);
    log.error('[请求失败]', `当前请求URL-------${args[1]}`)
}

export default request;
