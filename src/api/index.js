import jsonp from 'easy-jsonp'
import ajax from './ajax'
import vr from './ajax'
import fetchurl from './ajax'
var BASE= '/api'
// jsonp使用
export function getData(url,param={}){
	return new Promise((resolve, reject) => {
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
// 使用axiox从后台获取影片数据提供search用
export const reqMovies=()=>ajax(BASE+'/req/moves')
// 使用vue-resource添加订单
export const reqAddOrder=(orderid,filmname,filmid,num,price)=>vr(BASE+'/users/add/order',{orderid,filmname,filmid,num,price},"POST")
export const reqReduceOrder=(orderid,filmid)=>vr(BASE+'/users/reduce/order',{orderid,filmid},"POST")
export const reqlogin=(username,password)=>vr(BASE+'/users/login',{username,password},"POST")
//使用fetch-jsonp获取get请求
export const reqOrder=(orderid)=>fetchurl(BASE+'/users/req/order',{orderid})