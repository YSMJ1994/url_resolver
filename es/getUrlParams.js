/**
 * 获取url中参数列表
 * @param {url} url
 * @param {revertNumber} 是否将可转换为数字的值转换为数字
 * @returns params object
 */
function getUrlParams(url, revertNumber) {
	const params = {};
	if (!url || typeof url !== 'string') {
		return params;
	}
	// 解码 decode
	url = decodeURI(url);
	// 解析 resolve
	return url
		.slice(url.indexOf('?'))
		.match(/[&?][^&?]+/g)
		.map(str => str.replace(/^[&?]/, ''))
		.reduce((pre, cur) => {
			let [key, value] = cur.split('=');
			if (value && revertNumber && /^[1-9]\d*$/.test(value)) {
				// 数字字符转换为数字
				value = Number(value);
			}
			pre[key] = value || true;
			return pre;
		}, params);
}

export default getUrlParams;
