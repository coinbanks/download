Vue.component('ios-store-install-footer', {
    props: ['title', 'black'],
    data: function () {
        return {
            loading: false,
        }
    },
    methods: {
        handleDownload() {
            if (isWeChat() == false) {
                this.title = '正在安装...';
                this.loading = true;
            }
            this.$emit('store-click');
        }
    },
    template: `
    <div style="position: fixed; background-color: white; bottom: 0; height: 80px; width: 100%; max-width: 500px; z-index: 999; box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);">
        <el-row type="flex" style="margin-top: 19px; margin-bottom: 19px;" justify="center" align="middle">
            <template v-if="black">
                <el-button type="primary" style="width: calc(100% - 40px); height: 48px; font-size: 14px; background-color: #333; border-width: 0px" :loading="loading" @click="handleDownload"><i class="icon iconfont icon-el-icon-apple""></i>&nbsp&nbsp{{ title }}</el-button>
            </template>
            <template v-else>
                <el-button type="primary" style="width: calc(100% - 40px); height: 48px; font-size: 14px; background-color: #3075EE; border-width: 0px" :loading="loading" @click="handleDownload"><i class="icon iconfont icon-el-icon-apple""></i>&nbsp&nbsp{{ title }}</el-button>
            </template>
        </el-row>
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