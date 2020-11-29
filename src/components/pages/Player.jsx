import React from 'react';
const styles={
	item:{justifyContent:"center",background:"#333",textAlign:"center",borderRadius:"100px",width:"40%",margin:"5px",padding:"20px",boxShadow:"0 10px 10px black",position:"relative",color:"white",textAlign:"center"},
	img:{borderRadius:"100px"},
	flex1:{display:"flex"},
	left:{alignItems:"center",width:"55%",padding:"20px",background:"rgba(0,0,0,0.6)",borderRadius:"40%"},
	link:{background:"rgba(0,0,0,0.6)",borderRadius:"40%",color:"white",padding:"10px",backgroundColor:"tomato"},
	sep:{padding:"10px"}
}
let Player =function(props){
	let x=props.item
	return 	<div style={styles.item}>
			<div><img style={styles.img} src={x.artworkUrl100} alt={x.artistName}/></div>
			<marquee className="collectionName">{x.collectionName}</marquee>
			<div  style={styles.flex1}>
				<div style={styles.left}>
					<div>{x.artistName}</div>
					<div>{x.trackCensoredName}</div>
					<div style={styles.sep}>
						<a style={styles.link} href={x.artistViewUrl}> <i className="fa fa-user"></i> </a>
						<a style={styles.link} href={x.trackViewUrl}> <i className="fa fa-music"></i> </a>
					</div>
					<div>{x.primaryGenreName}</div>
					<div>total songs {x.trackCount}</div>
					<div>total tracks {x.trackNumber}</div>
				</div>
				<div style={{width:"45%",padding:"2.5%"}}>
					<div className="price">{x.currency} {x.collectionPrice}</div>
					<div className="price">{x.currency} {x.trackPrice}</div>
					<div className="date">{x.currency} {x.releaseDate.toString().slice(0,10)}</div>
					<div>{x.country}</div>
				</div>
			</div>
			
		</div>
}
export default Player;