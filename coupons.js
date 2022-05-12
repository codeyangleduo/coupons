coupons()

function coupons() {

    var myDate = new Date()
    var hours = myDate.getHours()
    console.log(hours)
    if (hours == 0) {
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
        httpRequest.open('GET', 'http://jieyou.pro:9023/jp/crowdFoundingUser/grantFiveYuanCoupon?mobile=18807065942&userId=1075120', true); //第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
        httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var res = JSON.parse(httpRequest.responseText); // 返回数据转换成json数据

                var data = res.data.msg // 获取返回结果
                console.log('小宝' + data)

                // 定义发送推送的url
                var urlBase = 'https://sctapi.ftqq.com/SCT146464T9GEUSrAYZmMZPGpTDPBYI4tu.send?title='

                // 判断结果
                if (data == "成功") {
                    var url = urlBase + 'taoSuccess'
                    clearInterval(i)
                } else if (data == "当日已领取优惠券") {
                    var url = urlBase + 'taoReceived'
                    clearInterval(i)
                } else if (data == "来晚了，券已领完") {
                    var url = urlBase + 'taoLate'
                    clearInterval(i)
                }
                var http = new XMLHttpRequest(); //第一步：建立所需的对象
                http.open('POST', url, true); //第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
                http.send(); //第三步：发送请求  将请求参数写在URL中

                console.log('推送发送成功！')


            }
        };
    } else {
        console.log('未到时间！')
    }

}
var i = setInterval(function() {
    coupons()
}, 10000);


coupons_temp()

function coupons_temp() {

    var myDate = new Date()
    var hours = myDate.getHours()
    if (hours == 0) {

        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
        httpRequest.open('GET', 'http://jieyou.pro:9023/jp/crowdFoundingUser/grantFiveYuanCoupon?mobile=15216292605', true); //第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
        httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var res = JSON.parse(httpRequest.responseText); // 返回数据转换成json数据

                var data = res.data.msg // 获取返回结果
                console.log('大宝' + data)

                // 定义发送推送的url
                var urlBase = 'https://sctapi.ftqq.com/SCT146464T9GEUSrAYZmMZPGpTDPBYI4tu.send?title='

                // 判断结果
                if (data == "成功") {
                    var url = urlBase + 'juanSuccess'
                    clearInterval(j)
                } else if (data == "当日已领取优惠券") {
                    var url = urlBase + 'juanReceived'
                    clearInterval(j)
                } else if (data == "来晚了，券已领完") {
                    var url = urlBase + 'juanLate'
                    clearInterval(j)
                }
                var http = new XMLHttpRequest(); //第一步：建立所需的对象
                http.open('POST', url, true); //第二步：打开连接  将请求参数写在url中  ps:"http://localhost:8080/rest/xxx"
                http.send(); //第三步：发送请求  将请求参数写在URL中

                console.log('推送发送成功！')


            }
        };
    } else {
        console.log('未到时间！')
    }
}
var j = setInterval(function() {
    coupons_temp()
}, 10000);
