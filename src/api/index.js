import jsonp from 'easy-jsonp'


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