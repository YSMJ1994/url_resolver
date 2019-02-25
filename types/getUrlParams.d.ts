export interface GetUrlParams {
    (url: string): { [key: string]: string }
}

declare const getUrlParams: GetUrlParams

export default getUrlParams