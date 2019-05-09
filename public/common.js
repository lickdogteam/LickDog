export default{
    /**
     *ajax的封装（post）
     * @param funcUrl  请求的方法地址
     * @param argsData 入参
     * @param successFunc 成功的回调函数
     * @param errorFunc 失败的回调函数
     */
    // http://112.124.70.173:5002
    post:function (funcUrl,argsData,successFunc) {
        let UA=navigator.userAgent;
        let TOKEN="dreamtouch";
        // const baseUrl="http://112.124.70.173:5102";//测试地址
        const baseUrl="http://127.0.0.1:5102";//正式地址
        window.axios.post(baseUrl+funcUrl, {
            "args":argsData,
            "token":TOKEN,
            "deviceinfo":UA
        })
            .then(function (res) {
                successFunc(res);
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    if(error.request.status==429){
                        alert('请求太多了啊');
                    }
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    },
}
