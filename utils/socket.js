/**
 * WebSocket类
 * 
 * @date: 2020/06/01
 * @author: Li Yujie liyujie@vizz.top
 */

/*
    使用方法:
    const ws = new WebSocket('ws://121.40.165.18:800');

    // 接收消息
    wx.onSocketMessage((msg) => {
        console.log(msg)
    })
 */

class WebSocket {

    constructor(url) {
        this.url = url;
        this.init();
    }

    /**
     * 初始化
     */
    init() {

        // 监听连接成功
        this.onSocketOpen();
        // 监听连接是否关闭
        this.onSocketClose();
        //监听连接错误
        this.onSocketError();
        //连接
        this.connectSocket();
    }

    /**
     * 连接
     */
    connectSocket() {

        wx.connectSocket({
            url: this.url,
        })
    }

    /**
     * 监听连接成功
     */
    onSocketOpen() {

        const promise = new Promise((resolve, reject) => {

            wx.onSocketOpen(() => {
                console.log('[WebSocket]: 已连接');
                resolve();
            })
        })

        return promise;
    }

    /**
     * 监听连接关闭
     */
    onSocketClose() {

        wx.onSocketClose(() => {
            console.log('[WebSocket]: 已断开');
        })
    }

    /**
     * 连接错误
     */
    onSocketError() {

        wx.onSocketError(error => {
            console.error('[socket error]:', error);
            // 重连(没有网络的情况下不重连)
            this.connectSocket();
        })
    }

    /**
     * 接收数据
     */
    onSocketMessage(callback) {

        wx.onSocketMessage(message => {
            console.log('[socket message]:', message);
            // 数据处理。方便界面中处理数据
            callback(message);
        })
    }


    /**
     * 发送指令
     */
    sendSocketMessage(msg) {

        wx.sendSocketMessage({
            data: msg,
            success(res) {
                console.log('[send message success]:', res);
            },
            fail(err) {
                console.log('[send message error]', err);
            }
        })
    }

    /**
     * 关闭连接
     */
    closeSocket() {

        wx.closeSocket();
    }

}

export default WebSocket;
