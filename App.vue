<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/free.css");
	/* 主要的背景颜色 */
	@import url("./common/common.css");
	/* 动画效果 */
	@import url("./common/animate.min.css");
	/* 引入图标库 */
	@import url("./common/iconfont.css");
</style>
