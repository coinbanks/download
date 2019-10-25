new Vue({
    el: '#app',
    data: function () {
        return {
            logo: './images/logo-app.png',
            headerTitle: 'CoinBanks 钱包',
            headerSubtitle: '安全存储 自由流通',
            iosDownload: 'iOS 下载',
            installTitle: '安装教程',
            downloadURL: 'itms-services://?action=download-manifest&url=https://www.coinbanks.com/download/ios.plist',
            tableAllData: [
                {
                    title: 'STEP 1:第一次打开CoinBanks会弹出如下框；',
                    img: './images/ios-wallet-tips-1-1.png',
                },
                {
                    title: 'STEP 2:在手机的[设置]→[通用]→[设备管理]中，找到CoinBanks的证书；',
                    img: './images/ios-wallet-tips-1-2.png',
                },
                {
                    title: 'STEP 3:点击信任这个证书就可以开始使用CoinBanks了。',
                    img: './images/ios-wallet-tips-1-3.png',
                }
            ],
        }
    }
});