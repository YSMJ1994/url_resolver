interface GetUrlParams {
	(url: string, revertNumber?: boolean): { [key: string]: string | number | boolean };
}
declare const getUrlParams: GetUrlParams;
export default getUrlParams;
