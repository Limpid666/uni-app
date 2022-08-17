<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view style="display: inline-flex;margin-right: 40rpx;" v-for="(item,index) in couponList" :key="index"
				class="text-white">
				<view class="flex flex-column align-center justify-center p-3 py-2"
					style="background-color: #d39e00;border-right: 4rpx dashed;">
					<text>￥{{item.price}}</text>
					<text class="font-sm">适用课程：{{item.value.title}}</text>
				</view>
				<view class="flex align-center justify-center p-3 font-sm"
					style="width: 120rpx;background-color: #fec107;" hover-class="bg-hover-warnin">
					领取
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "coupon-list",
		data() {
			return {
				couponList: []
			};
		},
		created() {
			this.$api.getCoupon().then(res => {
				console.log(res);
				this.couponList = res
			})
		}

	}
</script>

<style>

</style>
