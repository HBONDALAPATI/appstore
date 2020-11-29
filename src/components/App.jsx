import React from 'react';
import Search from './pages/Search';
import Table from './pages/Table';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

let App=function(props){
	React.useEffect(function(){
		 window.addEventListener('scroll', props.setScroll);
	})
	return <div>
		<Search />
		<Table />
	</div>
}
const mapStateToProps=state=>state
export default connect(mapStateToProps,actions)(App);