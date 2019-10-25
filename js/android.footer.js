Vue.component('android-install-footer', {
    props: ['install','googleplayinstall'],
    data: function () {
        return {
            loading: false,
        }
    },
    methods: {
        handleDownload() {
            if (isWeChat() == false) {
                var originInstallTitle = this.install;
                this.install = '正在安装...';
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.install = originInstallTitle;
                }, 3000);
            }
            this.$emit('android-click');
        },
        handleGoogleplayDownload() {
            if (isWeChat() == false) {
                var originInstallTitle = this.googleplayinstall;
                this.googleplayinstall = '正在安装...';
                this.gloading = true;
                setTimeout(() => {
                    this.gloading = false;
                    this.googleplayinstall = originInstallTitle;
                }, 3000);
            }
            this.$emit('google-click');
        }
    },
    template: `
    <div style="position: fixed; background-color: white; bottom: 0; height: 79px; width: 100%; max-width: 500px; z-index: 999; box-shadow:0px 2px 4px 0px rgba(48,117,238,1);">
        <div style="display: flex;width: 100%; height: 130px;">
            <div style="position: flex; width: 50%;">
                <div style="display: flex;">
                    <el-row type="flex" style="margin-top: 19px; margin-bottom: 19px; margin-left:auto; margin-right:auto;" justify="center" align="middle">
                        <el-button type="primary" style="width: 100%; font-size: 14px; background-color: #3075EE; border-width: 0px" :loading="loading" @click="handleDownload"><i class="icon iconfont icon-el-icon-android""></i>&nbsp&nbsp{{ install }}</el-button>
                    </el-row>
                </div>
            </div>
            <div style="position: flex; width: 50%;">
                <div style="display: flex;">
                    <el-row type="flex" style="margin-top: 19px; margin-bottom: 19px; margin-left:auto; margin-right:auto;" justify="center" align="middle">
                        <el-button type="primary" style="width: 100%; font-size: 14px; background-color: rgb(51, 51, 51); border-width: 0px" :gloading="loading" @click="handleGoogleplayDownload"><i class="icon iconfont icon-google-play""></i>&nbsp&nbsp{{ googleplayinstall }}</el-button>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
    `
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