const session={
	set:function(key,value){
		sessionStorage.setItem(key, JSON.stringify(value))
	},
	get:function(key){
		return JSON.parse(sessionStorage.getItem(key)) 
	},
	remove:function(key){
		sessionStorage.removeItem(key)
	}
}
export default session