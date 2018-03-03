import React, {Component} from 'react';

import '../style/list1.scss';
import axios from 'axios';


export default class Orders extends Component {
	constructor(props) {
	    super(props);

		    this.state={
						main:[],
						mains:[],
						main1:[]
				}
	  }
	componentDidMount(){
		var contents = [];
		var contents1= [];
		axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json")
		.then((res)=>{
//			console.log(res.data)		
			res.data.forEach((item,index)=>{
				var content = [];
				item.layout.dataList.forEach((item,index)=>{
					content.push(item.sku)
				})
				axios.get(`/product/skus?ids=${content.toString()}`)
				.then((res)=>{
//					console.log(res)
					contents.push(res.data.data.list)	
					contents1.push(contents.slice(0,1))
					this.setState({
						mains:contents,
						main1:contents1
					})

					console.log(this.state.main1)

				})			
			})
			
			this.setState({
				main:res.data,
			})
//			console.log(this.state.main.slice(0,1))
		})
	}
	render() {
		return (
			<div style={{height:'100%',flex:'1',display:'flex',flexDirection:'column'}}>
			
			<div className='header'>
				<a href="" title="菜单">1</a>
				<h1 className="nav-title"> 
						分类
				</h1>
			</div>
			
			<div className="aside">
		     {
      			this.state.main.map((item,index)=>{
      				return(
      					<div key={item.name} className="floor7">
	      					<div className="title-wrapper">
						         <h3>{item.name}</h3>
					        </div>
					        <div className="proimg">
					        	<img src={item.image.src} alt="" width = '100%' />
					        </div>
				        </div>
      				)
      			})
      		}               	   				
			</div>
			
		</div>
		)
	}
}