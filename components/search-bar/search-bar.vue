<template>
	<view class="p-2">
		<view class="flex align-center justify-center py-2 rounded" style="background-color: #f5f3f3;color: #928e8a;">
			<uni-icons type="search" size="20" style="color: #928e8a;"></uni-icons>
			<text class="ml-2">{{placeholder}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: '请输入搜索内容'
			}
		}
	}
</script>

<style>
</style>
