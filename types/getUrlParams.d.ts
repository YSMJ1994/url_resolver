export default interface getUrlParams {
    (url: string): {[key: string]: string}
}