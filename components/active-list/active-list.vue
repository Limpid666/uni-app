<template>
	<view>
		<!-- 拼团 -->
		<view class="divider"></view>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">{{ type =='group'?'秒杀':'拼团'}}</text>
		</view>
		<!-- 拼团渲染 -->
		<scroll-view scroll-x="true" class="scroll-row">
			<pellet-list v-for="(item,index) in list" :key="index" :item="item"></pellet-list>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "active-list",
		props: {
			type: {
				type: String,
				default: 'group'
			},
		},
		data() {
			return {
				list: []
			};
		},
		created() {
			let key = this.type == 'group' ? 'getGroup' : 'getFlashsale'
			this.$api[key]({
				page: 1,
				usable: 1
			}).then((res) => {
				console.log(res.rows);
				this.list = res.rows
			})
		}
	}
</script>

<style>

</style>
