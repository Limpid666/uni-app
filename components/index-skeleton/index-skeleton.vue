<template>
	<view class="">
		<!-- 搜索和轮播图 -->
		<view class="p-2">
			<skeleton width="710rpx" height="70rpx" oClass="mb-2 rounded"></skeleton>
			<skeleton width="710rpx" height="300rpx" oClass="rounded"></skeleton>
		</view>
		<!-- 图标渲染 -->
		<view class="flex flex-wrap py-2">
			<view class="flex flex-column align-center justify-center" style="width: 25%;" v-for="i in 8" :key="i">
				<skeleton width="75rpx" height="75rpx" circle oClass="mb-2 rounded"></skeleton>
				<skeleton width="75rpx" height="30rpx" oClass="mb-2 rounded"></skeleton>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="flex flex-wrap py-2">
			<view class="flex align-center justify-center" style="width: 50%;" v-for="i in 2" :key="i">
				<skeleton width="354rpx" height="130rpx" oClass="mb-2 rounded"></skeleton>
			</view>
		</view>
		<!-- 拼团 -->
		<view class="p-2">
			<skeleton width="70rpx" height="35rpx" oClass="rounded"></skeleton>
		</view>
		<view class="flex py-2">
			<view class="p-2 flex align-center justify-center" v-for="i in 2" :key="i">
				<view class="">
					<skeleton width="340rpx" height="190rpx" oClass="rounded"></skeleton>
					<view class="mt-2">
						<skeleton width="340rpx" height="40rpx" oClass="rounded mb-2"></skeleton>
						<skeleton width="120rpx" height="28rpx" oClass="rounded mb-2"></skeleton>
						<skeleton width="170rpx" height="45rpx" oClass="rounded"></skeleton>
					</view>
				</view>
			</view>
		</view>
		<!-- 最新列表 -->
		<view class="p-2">
			<skeleton width="140rpx" height="35rpx" oClass="rounded"></skeleton>
		</view>
		<view class="flex p-2">
			<skeleton width="300rpx" height="170rpx" oClass="rounded"></skeleton>
			<view class="ml-2">
				<skeleton width="365rpx" height="40rpx" oClass="rounded mb-2"></skeleton>
				<skeleton width="120rpx" height="28rpx" oClass="rounded mb-4"></skeleton>
				<skeleton width="170rpx" height="45rpx" oClass="rounded"></skeleton>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "index-skeleton",
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
