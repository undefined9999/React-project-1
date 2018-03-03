import React, {Component} from 'react';
import {


  NavLink
} from 'react-router-dom';
import '../style/Home1.scss';
import axios from 'axios';


export default class Orders extends Component {
	constructor(props) {
	    super(props);
			this.getaxios = this.getaxios.bind(this);
		    this.state={
					conent:[],
					floors:[],
					floor7:[],
					floor7s:[]
				}
	  }
	getaxios(id){
      axios.get(`/product/skus?ids=${id}`)
      .then((res)=>{
        console.log(res)
         this.setState({
	         floor7s:res.data.data.list
	       })
         console.log(this.state.floor6s)
      })     
    }
	componentDidMount(){
		axios.get("/marketing/mobile/index_9d2b56c1bf495e7e6caf9d50e7444462.json")
		.then((res)=>{
//			console.log(res.data);
		 this.setState({
	         conent:res.data.floors
	       })
//		 console.log(this.state.conent)
		 this.state.conent.forEach((item,index)=>{
//		 	console.log(item.dataList);
		 	if(item.dataList.length === 8 && item.floorName === "坚果 Pro 2 及配件"){
		 		var arr = [];
		 		arr.push(item)
		 		this.setState({
		 			floor7 : arr
		 		})
		 		console.log(this.state.floor6)
		 		this.getaxios(item.dataList)
		 	}else if(item.dataList.length === 18){
		 		this.setState({
		 			floor8: item.dataList
		 		})

		 	}		 	
		 })
		})
	}
	render() {
		return (
			<div style={{ width: '100%', height:'100%'}}>
			<header>
				<a href="" className="nav-toggle" title="菜单">1</a>
				<h1 className="nav-logo"> 
				   <NavLink exact activeClassName="active" to="/">
				   </NavLink>
				</h1>
			</header>
			
			<main>				           
           {
           	this.state.floor7.map((item,index)=>{
           		return(
           			<div className="floor7" key={index}>
           			<h3>{item.floorName}</h3>          			
           			<div className="fl7main">
                    <ul>
                    {
                    	this.state.floor7s.map((ite,inde)=>{
                				console.log(ite)
                				
                    		return(
                    			<li key={inde}>
                                <a href={`https://www.smartisan.com/item/${item.id}`} >
                                  <img src={ite.shop_info.ali_image} alt=""/>
                                </a>
                                <div className="zi">
                      <h4>{ite.shop_info.sku_mobile_title}</h4>
                      <p>{ite.shop_info.sku_mobile_sub_title}</p>
                      <span>￥{ite.price}</span>
                   </div>         
                              </li>
                    		)                   		
                    	})                              
                    }
                       </ul>
                  </div>
               </div>                     
           		)
           	})
          }    
          
          {
           	this.state.floor7.map((item,index)=>{
           		return(
           			<div className="floor7" key={index}>
           			<h3>{item.floorName}</h3>          			
           			<div className="fl7main">
                    <ul>
                    {
                    	this.state.floor7s.map((ite,inde)=>{
                				console.log(ite)
                				
                    		return(
                    			<li key={inde}>
                                <a href={`https://www.smartisan.com/item/${item.id}`} >
                                  <img src={ite.shop_info.ali_image} alt=""/>
                                </a>
                                <div className="zi">
                      <h4>{ite.shop_info.sku_mobile_title}</h4>
                      <p>{ite.shop_info.sku_mobile_sub_title}</p>
                      <span>￥{ite.price}</span>
                   </div>         
                              </li>
                    		)                   		
                    	})                              
                    }
                       </ul>
                  </div>
               </div>                     
           		)
           	})
          } 
                  
        
			</main>
		</div>
		)
	}
}