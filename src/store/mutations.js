import Vue from 'vue'

import {
	REQ_NOWMOVIES,
	REQ_COMINGMOVIES,
	REQ_TOP250
} from './mutations-types'

export default{
	[REQ_NOWMOVIES](state,{showNow}){
		state.nowMovies=showNow.subjects
		state.nowTitle=showNow.title
	},
	[REQ_COMINGMOVIES](state,{comingMovies}){
		state.commingMovies=comingMovies.subjects
	    state.commingTitle=comingMovies.title
	},
	[REQ_TOP250](state,{topMovies}){
		state.topMovies=topMovies.subjects
        state.topTitle=topMovies.title
	}
}