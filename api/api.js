import api from '@/api/request.js';
export default {
	// 首页
	getIndexData() {
		return api.get("/mobile/index")
	},
	// 获取可用拼团列表
	getGroup() {
		return api.get("/mobile/group?page=1&usable=1")
	},
	// 获取可用秒杀列表
	getFlashsale(params = {}) {
		return api.get("/mobile/flashsale", params)
	},
	// 获取可用优惠券列表
	getCoupon() {
		return api.get("/mobile/coupon")
	}
}
