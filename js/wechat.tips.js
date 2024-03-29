Vue.component('wechat-tips-view', {
    data: function () {
        return {
            img: '',
        }
    },
    created: function () {
        if (isiOS() == true) {
            this.img = './images/wx-ios-tips.png';
        }else {
            this.img = './images/wx-android-tips.png';
        }
    },
    template: `
    <div class="wx-tip" onclick="hideWeChat()">
        <el-image class="wx-tip-img" :src="img" fit="contain"></el-image>
    </div>
    `
});

/**
 * 设备判断
 */
function isiOS() {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return isiOS
}

function hideWeChat() {
    $(".wx-tip").hide();
}
