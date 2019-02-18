/**
 * 获取url中参数列表
 * @param {url} url
 * @returns params object
 */
function getUrlParams(url) {
    if (!url || typeof url !== "string") {
        return {}
    }
    // 解码 decode
    url = decodeURI(url)
    // 解析 resolve
    return url
        .slice(url.indexOf("?") + 1)
        .match(/[(\w)=(\d)-_(\s)]+(&|\b)/g)
        .map(str => str.replace(/&$/, ""))
        .reduce((pre, cur) => {
            const splits = cur.split("=")
            pre[splits[0]] = splits[1] || true
            return pre
        }, {})
}

module.exports = getUrlParams
