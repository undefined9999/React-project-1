import React, {Component} from 'react';
import '../style/Home1.scss';
import axios from 'axios';


export default class Orders extends Component {
	constructor(props) {
	    super(props);

		    this.state={
					banner:[],
					shortcut:[],
					layout:[],
					hotsell:[],
					purification:[]
				}
	  }
	componentDidMount(){
		axios.get("/marketing/mobile/index_9d2b56c1bf495e7e6caf9d50e7444462.json")
		.then((res)=>{
			console.log(res.data);
		 this.setState({
	         banner: res.data.banner.dataList,
	         shortcut:res.data.shortcut.dataList,
	         layout:res.data.floors[1].dataList,
	         hotsell:res.data.floors[3].dataList,
	         purification:res.data.floors[4].dataList.recommend
	       })
		})
		
	}
	render() {
		return (
			<div style={{ width: '100%', height:'100%'}}>
				<header>
					<h1 className="nav-title">购物车</h1>
				</header>
			</div>
		)
	}
}