

module.exports = {
	devServer: {
		proxy: {
			"/jeewms_war_exploded": {
				target: "http://192.168.123.153:8090/jeewms_war_exploded", // 需要跨域的目标url
				changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
				ws: true, // proxy websockets
				pathRewrite: { //重写路径
					'^/jeewms_war_exploded': '' //代理路径
				}
			},
		}
	}
}