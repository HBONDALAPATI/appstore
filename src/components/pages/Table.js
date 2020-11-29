import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import Player from './Player' ;
let Table=function(props){
	let {data,start,pp,artist,album,song}=props
	let a=data.results.filter(x=>x.artistName.includes(artist)).filter(x=>x.collectionName.includes(album)).filter(x=>x.collectionViewUrl.includes(song)).slice(start,start+pp) 
		return <div > <div style={{display:"flex",flexFlow:"wrap",fontFamily:"Arial"}}>
			{a.length!==0?a.map(item=>
				<Player key={item.trackId} item={item}/>
			):<h1>no records found matching to your query </h1>}
		</div>		
	</div>
}
const mapStateProps=state=>state
export default connect(mapStateProps,actions)(Table);