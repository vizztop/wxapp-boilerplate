/**
 * 首页
 */
const app = getApp();

Page({
    data: {

    },
    onLoad() {

        // loading
        app.utils.loading.show();
        setTimeout(() => {
            app.utils.loading.hide();
        }, 1000)

        // 接口调用
        app.api.testApi.test().then(() => { })

    },

    handleClick() {
        // 表单校验
        let form = {
            tel: '1383435346'
        }
        let rules = {
            tel: [
                { required: true, message: '年龄不能为空' },
                { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码' },
            ]
        }

        app.validator(rules, form).then(() => {

            // 校验成功
            console.log('校验成功')
        })
    }
})
