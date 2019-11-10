const storage={
	set:function(key,value){
       localStorage.setItem(key,JSON.stringify(value))       
	},
	get:function(key){
	   return JSON.parse(localStorage.getItem(key))
	},
	remove:function(key){
		localStorage.removeItem(key)
	}
}
export default storage