import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
const styles={
	search:{display:"flex",padding:"10px",justifyContent:"center"},
	input:{padding:"10px",margin:"10px",border:"2px solid black"}
}
let Search=function(props){
	let {album,song,artist}=props
	return <div>
		<h1 align="center">Music store find and search</h1>
		<div style={styles.search}>
				<input 
				onChange={e=>props.changeInput("album",e.target.value)}
				value={album} 
				style={styles.input} 
				placeholder="Search by Album"/>
				<input 
				onChange={e=>props.changeInput("artist",e.target.value)}
				value={artist} 
				style={styles.input} 
				placeholder="Search by Artist"/>
				<input 
				onChange={e=>props.changeInput("song",e.target.value)}
				value={song} 
				style={styles.input} 
				placeholder="Search by Song"/>
			</div>
	</div>
}
const mapStateProps=state=>state
export default connect(mapStateProps,actions)(Search);