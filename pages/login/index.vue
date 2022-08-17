<template>
	<view class="">
		<!-- 颜色渐变 -->
		<view class="login-bg pt-2" @click="back">
			<uni-icons type="back" size="25" class="m-2" color="#fff"></uni-icons>
		</view>
		<!-- 登录页面 -->
		<view class="login-container p-5">
			<view class="flex flex-column">
				<view class="login-font m-2">登 录</view>
				<view class="m-3">
					<uni-forms ref="form" :modelValue="formData">
						<uni-forms-item label="姓名">
							<uni-easyinput v-model="formData.age" placeholder="请输入用户名" />
						</uni-forms-item>
					</uni-forms>
					<button @click="submit" class="login-button">登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 表单数据
				formData: {
					name: ''
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style>
	.login-bg {
		background: linear-gradient(120deg, #84fab0, #8fd4f5);
		width: 100%;
		height: 230rpx;
		box-sizing: border-box;
	}

	.login-container {
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;
		position: absolute;
		top: 200rpx;
		border-top-right-radius: 40rpx;
		border-top-left-radius: 40rpx;
	}

	.login-font {
		font-size: 50rpx;
	}

	.login-button {
		background-color: #5ccc84;
		color: #fff;
	}
</style>
