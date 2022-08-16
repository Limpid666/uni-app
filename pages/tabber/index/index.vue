<template>
	<view>
		<block v-for="(item,index) in templates" :key="index">
			<!-- 搜索组件 -->
			<search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></search-bar>
			<!-- 轮播图 -->
			<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000"
				:duration="1000" circular="true">
				<swiper-item class="flex justify-center" v-for="(subItem,subIndex) in item.data" :key="subIndex">
					<image :src="subItem.src" mode="" style="width: 715rpx;height: 300rpx;" class="rounded shadow">
					</image>
				</swiper-item>
			</swiper>
			<!-- 图标渲染 -->
			<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
			<!-- 优惠券 -->
			<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
			<template v-else-if="item.type == 'promotion'">
				<!-- 拼团 -->
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2">
					<text class="font-md font-weight-bold">{{item.listType=='ground'?'秒杀':'拼团'}}</text>
				</view>
				<!-- 拼团渲染 -->
				<scroll-view scroll-x="true" class="scroll-row">
					<pellet-list v-for="(item,index) in groupList" :key="index" :item="item"></pellet-list>
				</scroll-view>
			</template>
			<template v-else-if="item.type=='list'">
				<!-- 最新列表 -->
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2 justify-between">
					<text class="font-md font-weight-bold">{{ item.title }}</text>
					<text class="font-sm text-light-muted" v-if="item.showMore">查看全部</text>
				</view>
				<!-- 最新列表渲染 -->
				<view>
					<pellet-list type="one" v-for="(item,index) in item.data" :key="index" :item="item">
					</pellet-list>
				</view>
			</template>
			<template v-else-if="item.type=='imageAd'">
				<!-- 图片渲染 -->
				<view class="divider"></view>
				<image :src="item.data" mode="" style="width: 750rpx; height: 330rpx;margin-top: 20rpx;"></image>
			</template>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList: [{
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/efa10a1e149fa44d0a51.png",
					"id": 538,
					"price": "10.00",
					"t_price": "20.00",
					"title": "VueCli 实战商城后台管理系统",
					"try": "<p>VueCli 实战商城后台管理系统</p>",
					"type": "media"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				templates: []
			}
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				uni.request({
					url: 'http://demonuxtapi.dishait.cn/mobile/index',
					method: "GET",
					header: {
						appid: 'bd9d01ecc75dbbaaefce'
					},
					success: (res) => {
						console.log(res);
						if (res.statusCode !== 200 || res.data.msg == 'fail') {
							uni.showToast({
								title: res.data.data || '请求失败',
								icon: "none"
							})
							return
						}
						this.templates = res.data.data
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {
						// 停止下拉刷新
						uni.stopPullDownRefresh()
					}
				})
			}
		}
	}
</script>

<style>
</style>
