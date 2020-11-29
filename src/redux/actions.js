export function abc(ob)
{
	return dispatch=>dispatch({type:"a",payload:ob})
}
export function setScroll(e)
{
	// console.log(e)
	return dispatch=>dispatch({type:"setScroll"})
}

export function changeInput(inputName,inputVal)
{
	return dispatch=>dispatch({type:"changeInput",inputName,inputVal})
}
