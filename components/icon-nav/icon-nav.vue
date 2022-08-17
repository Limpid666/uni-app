<template>
	<view class="flex flex-wrap py-3">
		<view class="flex flex-column align-center justify-center py-1" style="width: 25%;" v-for="(item,index) in list"
			:key="index" hover-class="bg-light">
			<image :src="item.src" mode="" style="width: 70rpx; height: 70rpx;" class="rounded-circle"></image>
			<text class="font-sm text-muted mt-1">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "icon-nav",
		props: {
			list: Array
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
