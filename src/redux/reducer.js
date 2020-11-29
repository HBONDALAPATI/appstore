import data from './models/data'
const intialState={
	data:data,
	album:"",
	song:"",
	artist:"",
	start:0,
	pp:10,
	total:data.resultCount
}

const reducer=function(state=intialState,action){
	switch(action.type)
	{
		case "changeInput":
			return {
				...state,
				[action.inputName]:action.inputVal
			}
		case "setScroll":
			return {
				...state,
				pp:state.pp<state.total?state.pp+1:10
			}
			
		default:
			return state;
	}
}
export default reducer;