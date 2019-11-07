import jsonp from 'easy-jsonp'
import ajax from './ajax'
var BASE= '/api'
export function getData(url,param={}){
	return new Promise((resolve, reject) => {
		console.log('-------')
		jsonp({
			url:url,
			callback: 'callback',
			timeout:10000,
			params:param,
		}).then(response=>{
			resolve(response)
		}).catch(err=>{
			reject(err)
		})
	});
}
// 从后台获取影片数据
export const reqMovies=()=>ajax(BASE+'/req/moves')