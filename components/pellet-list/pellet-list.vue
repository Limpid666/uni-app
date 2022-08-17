<template>
	<view class="scroll-row-item course" :class="'course-' +this.type">
		<view class="position-relative">
			<image :src="item.cover" mode=""></image>
			<view class="text-white font-sm">{{item.type | fliterGroupType}}</view>
		</view>
		<view class="flex flex-column flex-shrink">
			<text class="text-ellipsis font-md titele my-1">{{item.title}}</text>
			<view class="text-ellipsis font-sm text-light-muted my-1 titele" v-html="item.try" v-if="item.try"
				style="width: 240rpx;"></view>
			<view class="flex flex-1 align-end align-center">
				<text class="font-md text-danger">￥{{item.price}}</text>
				<text class="font-sm text-light-muted p-1 text-through">￥{{item.t_price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		courseType
	} from "@/enum/option.js"
	export default {
		name: "pellet-list",
		props: {
			item: Object,
			type: {
				type: String,
				default: "two"
			}
		},
		filters: {
			fliterGroupType(type) {
				return courseType[type]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.course {}

	.course-two {
		width: 340rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
	}

	.course-two>view:lastt-child>text:first-child {
		margin-top: 10rpx;
	}

	.course-two image,
	.course-two>view:first-child {
		width: 340rpx;
		height: 180rpx;
	}

	.course>view:first-child>view {
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
		background-color: rgba(0, 0, 0, .4);
		padding: 0 10rpx;
	}

	.course-one {
		display: flex !important;
		padding: 20rpx;
	}

	.course-one>view:first-child {
		margin-right: 20rpx;
	}

	.course-one image,
	.course-one>view:first-child {
		width: 300rpx;
		height: 170rpx;
		flex-shrink: 1;
	}

	.text-ellipsis {
		width: 345rpx;
	}
</style>
