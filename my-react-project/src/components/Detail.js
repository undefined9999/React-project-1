import React, {Component} from 'react';
import {

	Link,
  NavLink
} from 'react-router-dom';
import '../style/detail.scss';
import axios from'axios';
import {Carousel} from 'antd-mobile';

export default class Detail extends Component {
	constructor(props){
		super(props);
		this.state={
			detail:[]
		}
	}
	componentDidMount(){
//		console.log(this.props.match.params.detailId)
	axios.get(`/product/spus?ids=${this.props.match.params.detailId}`)
		.then((res)=>{
//			console.log(res);
			this.setState({
				detail:res.data.data.list
			})
//			console.log(this.state.detail)
		})
	}
	render() {
		return (
			<div style={{ width: '100%', height:'100%',
			display:'flex',flex:'1',flexDirection: 'column'
			}}>
			{
				this.state.detail.map((item,index)=>{
//					console.log(item)
					return(
						<header key={item.id}>
							<Link to="" className="nav-detail" title="菜单">&lt; 返回</Link>
							<h1 className="nav-title"> 
							   {item.name}
							</h1>
						</header>	
					)
				})			
			}
			<div className="detail-nav">
				<ul >
	      			<li>商品</li>
	      			<li>详情</li>
	      			<li>参数</li>
	      			<li>推荐</li>
      			</ul>
      		</div>
      		
      		<main>
      		{
      			this.state.detail.map((item,index)=>{
      				console.log(item)
      				return(
      				<div key={item.id}>	
      				  <div className="detail1" >
      				
      				  {
      				  	item.sku_info.slice(0,1).map((ite,ind)=>{
//    				  		console.log(ite)
      				  		return(
      				  		<img src={ite.ali_image} alt="" width = '100%' key={ite.sku_id}/>
      								)
      				  	})
      						}
      					
      				  </div>
      				  
      				 <div className="shop-message floor7">
		      		    <h3>商品信息</h3>
		      		    <h4>{item.name}</h4>
		      		    <p>{item.shop_info.highlights}</p>
		      		    <div className="shop-price">
		      		    <span>￥{item.price} </span> 
			      		    <i> 
			      		    分期付款低至每月￥{(item.price/11).toFixed(2)}
			      		    </i>
		      		    </div>
				      </div>
				    
				    <div className="versions">
		      			<h6>已选版本</h6>
		      			<p>
			      			<span>
			      			{item.shop_info.spec_v2[0].spec_name} :
			      			</span> 
			      			<i> 
			      			{item.sku_info[0].spec_json[0].show_name}
			      			</i>
		      			</p>
		      					      			
		      			<p>
			      			<span>数量 : </span> 
			      			<i> 1</i>
		      			</p>
		      		</div>
				    
				    <div className="shop-message floor7 shop-detail">
				      		    <h3>商品详情</h3>
				      		    <img src={item.shop_info.tpl_content.base.images.ali_mobile.url[0]} alt="" width = '100%' />
				    </div>
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    
				    </div>
      				)
      			})
      		}
      		</main>
      		
      		<footer>
      			<i></i>
      			<button onClick={this.addCarts}>加入购物车</button>
      		    <button>现在购买</button>
      		</footer>
			
			</div>
		)
	}
}