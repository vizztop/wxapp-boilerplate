import Toast from '@vant/weapp/toast/toast';

const utils = {
    /**
     * loading
     */
    loading: {
        show: () => {
            Toast.loading({
                mask: true,
                duration: 0,
                message: '加载中...',
            });
        },
        hide: () => {
            Toast.clear();
        }
    },

    /**
     * 消息提示
     */
    message: {
        toast: (msg) => {
            Toast({
                message: msg,
                position: 'bottom'
            })
        },
        success: (msg) => {
            Toast.success(msg);
        },
        fail: (msg) => {
            Toast.fail(msg);
        }
    },
}




export default utils;
