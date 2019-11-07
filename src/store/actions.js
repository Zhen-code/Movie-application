import {REQ_NOWMOVIES,REQ_COMINGMOVIES, REQ_TOP250,REQ_MORETITLE,CLEAR} from './mutations-types'
// 导入url常量参数
import {url, comingurl, topurl, apikey, start, count} from '../utils/constant'
// 导入jsonp接口
import {getData} from '../api'
export default{
	// 获取正在上映的列表
	async getNowMovies({commit}){
		const showNow=await getData(url,{apikey,start,count})
		if(showNow!=null){
		commit(REQ_NOWMOVIES,{showNow})
		}
        console.log(showNow)
		
	},
	async getComingMovies({commit}){
		const comingMovies=await getData(comingurl,{apikey,start,count})
		if(comingMovies!=null){
			commit(REQ_COMINGMOVIES,{comingMovies})
		}
	},
	async getTop250({commit}){
        const topMovies=await getData(topurl,{apikey,start,count})
        if(topMovies!=null){
        	commit(REQ_TOP250,{topMovies})
        }
	},
	getNowTitle({commit},title){
        commit(REQ_MORETITLE,{title})
	},
	getClearTitle({commit}){
		console.log('oooo')
		commit(CLEAR)
	}
}