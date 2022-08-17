<template>
	<view class="animate__animated animate__fadeInDown animate__faster"
		style="width: 750rpx;height: 345rpx;background-color: #5ccc84;  border-bottom-right-radius: 100rpx;border-bottom-left-radius: 100rpx">
		<!-- 头像图片部分 -->
		<view class="flex py-5" @tap="goDetail">
			<view class="bg-white mx-4 rounded-circle flex justify-center align-center"
				style="width: 125rpx; height: 125rpx;">
				<image src="../../../static/logo.png" mode="" style="width: 122rpx; height: 122rpx;"
					class="rounded-circle">
				</image>
			</view>
			<view class="text-white">
				<view class="font-lg my-1">立即登录</view>
				<text style="margin-top: 22rpx;">登录解锁更多功能</text>
			</view>
		</view>
		<!-- 图标渲染区域 -->
		<view class="flex align-center justify-center shadow mx-3  bg-white rounded"
			style="width: 690rpx;height: 145rpx;">
			<view class=" flex flex-column flex-1" v-for="(item,index) in iconList" :key="index">
				<uni-icons :type="item.type" size="28" color="#fec107"></uni-icons>
				<text class="text-center my-1 font-sm text-muted">{{item.text}}</text>
			</view>
		</view>
		<!-- 常见区域 -->
		<view class="flex justify-between px-5 align-center" v-for="(item,index) in list" :key="index">
			<view class="flex align-center py-3">
				<uni-icons :type="item.type" size="25" color="#6ba7f0"></uni-icons>
				<text class="mx-2" style="font-size: 28rpx;">{{item.text}}</text>
			</view>
			<uni-icons type="right" size="26" color="#ccc"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [{
					type: 'settings-filled',
					text: '订单'
				}, {
					type: 'chat',
					text: '消息'
				}, {
					type: 'star',
					text: '收藏'
				}, {
					type: 'calendar',
					text: '在学'
				}],
				list: [{
					type: 'cart',
					text: '我的优惠券'
				}, {
					type: 'help',
					text: '常见问题'
				}, {
					type: 'gear',
					text: '设置'
				}]
			}
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/login/index'
				})
			}
		},
		onNavigationBarButtonTap(e) {
			console.log("success")
		},
	}
</script>

<style>
</style>
