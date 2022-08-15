<template>
	<view>
		<!-- 搜索组件 -->
		<search-bar></search-bar>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
				<image :src="item.src" mode="" style="width: 715rpx;height: 300rpx;" class="rounded shadow">
				</image>
			</swiper-item>
		</swiper>
		<!-- 图标渲染 -->
		<icon-nav :list="iconNav"></icon-nav>
		<!-- 优惠券 -->
		<coupon-list></coupon-list>
		<!-- 拼团 -->
		<view class="divider"></view>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">拼团</text>
		</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<view class="scroll-row-item">

			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [{
					src: '../../../static/demo/banner/banner1.png'
				}, {
					src: '../../../static/demo/banner/banner2.png'
				}],
				iconNav: [{
					name: '活动',
					src: '../../../static/demo/icon/hd.png'
				}, {
					name: '考试',
					src: '../../../static/demo/icon/test.png'
				}, {
					name: '秒杀',
					src: '../../../static/demo/icon/ms.png'
				}, {
					name: '拼团',
					src: '../../../static/demo/icon/pt.png'
				}, {
					name: '直播',
					src: '../../../static/demo/icon/course.png'
				}, {
					name: '考栏',
					src: '../../../static/demo/icon/column.png'
				}, {
					name: '电子书',
					src: '../../../static/demo/icon/book.png'
				}, {
					name: '社区',
					src: '../../../static/demo/icon/ask.png'
				}]
			}
		}
	}
</script>

<style>
</style>
