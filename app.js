import api from './api/index';
import utils from './utils/util';
import log from './utils/log';
import { validator } from './utils/validator'

App({

    /**
     * 初始化完成
     */
    onLaunch() {

    },

    onError(err) {
        console.log('[全局异常捕获]:', err)
    },

    // 全局数据 （非持久化）
    globalData: {},

    // api接口
    api,
    // 工具
    utils,
    // 实时日志上报
    log,
    // 校验插件
    validator
})
