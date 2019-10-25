new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: 'CoinBanks',
            headerTitle: '区块链金融应用入口',
            headerSubtitle: '安全存储 自由流通',
            androidInstallTitle: '安装 Android 版',
            betaTitle: '安装内测版',
            storeTitle: 'App Store',
            logo: './images/logo.png',
            androidDownloadURL: 'https://www.coinbanks.com/download/coinbanks-v2.3.2_(233)_20191010.apk',
            googleplayDownloadURL: 'https://',
            tipsData: [{
                icon: './images/icon-security.png',
                title: '更安全',
                subtitle: '多重加密',
            }, {
                icon: './images/icon-candy.png',
                title: '更多收益',
                subtitle: '活期定期灵活方便',
            }, {
                icon: './images/icon-various.png',
                title: '更多样',
                subtitle: '支持多区块链资产',
            }]
        }
    },
    methods: {
        ios_appstore() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location = "#"
            }
        },
        ios_beta() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location = "itms-services://?action=download-manifest&url=https://www.coinbanks.com/download/ios.plist"
            }
        },
        android() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location.href = this.androidDownloadURL;
                downloadEvent("coinbanks_android_install_click");
            }
        },
        googledownload() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location.href = this.googleplayDownloadURL;
                downloadEvent("coinbanks_google_install_click");
            }
        }
    }
});

/**
 * 判断是否是微信
 */
function isWeChat() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    }
    if (ua.match(/MicroMessenger/i) == 'wxwork') {
        return true;
    }
    return false;
};

/**
 * 
 * @param {上报参数} params
 */
function sendEvent(params) {
    _czc.push(params);
}

/**
 * 下载按钮点击事件
 * 
 * @param {String} event
 */
function downloadEvent(event) {
    var channelID = getQueryResult("channelID");
    channelID = channelID.length > 0 ? channelID : "";
    //sendEvent(["_trackEvent", "下载", event, channelID]);
}

/**
 * 根据 key 查询参数值
 * @param {String} key
 */
function getQueryResult(key) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == key) { return pair[1]; }
    }
    return (false);
}