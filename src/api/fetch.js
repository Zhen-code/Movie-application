import  fetchJsonp  from  'fetch-jsonp'

export default function fetchurl(url,data={}){
	return new Promise((resolve,reject)=>{
          let str=''
          Object.keys(data).forEach((param) => {
            str+=param+'='+data[param]+'&'
          })
          if(str!==''){
          	str=str.substring(0,lastIndexOf('&'))
          	url=url+'?'+str
          }
          fetchJsonp(url).then(response=>{
          	console.log(response);
          }).then(data=>{
          	resolve(data)
          }).catch(err=>{
          	console.log(err)
          })
	})
}