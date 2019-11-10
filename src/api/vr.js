export default function vr (url,data={},type){
	console.log(333)
	return new Promise((resolve,reject)=>{
		let promise
		if(type=="GET"){
			console.log('get')
			let str=''
			Object.keys(data).forEach((item) => {
			  str+=item+'='+data[item]+'&'
			})
			if(str!==''){
			  str=str.substring(0,lastIndexOf('&'))
			  url=url+'?'+str
			}
			promise=this.$http.get(url)
		}else{
			console.log('post')
            promise=this.$http.post(url,data,{emulateJSON: true})
		}
        promise.then(data=>{
        	console.log(111)
        },err=>{
        	console.log(222)
        })

	})
}
