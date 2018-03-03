import React, {Component} from 'react';
import { Link,NavLink} from 'react-router-dom';
import '../style/Home1.scss';
import axios from 'axios';
import {Carousel} from 'antd-mobile';

export default class Orders extends Component {
	constructor(props) {
	    super(props);

	    this.state={
	    	plus:[],
	    	imgHeight: 176,
     		slideIndex: 0,
			banner:[],
			shortcut:[],
			layout:[],
			floors:[],
			floor0:[],
			floor3:[
			"https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_972/format,webp",
			"https://resource.smartisan.com/resource/e883f15eed51a49e1fbc9d8ddd82460b.png?x-oss-process=image/resize,w_972/format,webp"
			],
			floor4:[],
		    floor5id:[],
		    floor5id1:[],
		    floor6:[],
		    floor7:[],
		    floor8id:[],
		    floor8id1:[],
		    floor9:[],
		    floor10:[],
		    floor11:[]
			}
  	}
	getaxios(id){
      axios.get(`/product/skus?ids=${id}`)
      .then((res)=>{
        //console.log(res)
        if(id.length === 4){
          this.setState({
            floor5id1:res.data.data.list
           })
        }else if(id.length === 18){
          this.setState({
            floor8id1:res.data.data.list
           })
        }
      })
    }
	componentDidMount(){
		axios.get("/marketing/mobile/index_9d2b56c1bf495e7e6caf9d50e7444462.json")
		.then((res)=>{
//			console.log(res.data);
		 	this.setState({
		         banner: res.data.banner.dataList,
		         shortcut:res.data.shortcut.dataList,
		         floors:res.data.floors,
		         layout:res.data.floors[1].dataList,
		         floor4:res.data.floors[3].dataList,
	       	     floor5id : res.data.floors[4].dataList.recommend,
	          	 floor6 : res.data.floors[5].dataList,
	           	 floor8id :  res.data.floors[7].dataList,
	           	 floor9:res.data.floors[8].dataList,
           
	       })
//		 console.log(this.state.floors.slice(9,10));
		 	axios.get(`/product/skus?ids=${res.data.floors[9].dataList.toString()}`)
			.then((res)=>{
				//console.log(res.data.data.list)
				this.setState({
					floor10:res.data.data.list
				})
			})
			axios.get(`/product/skus?ids=${res.data.floors[10].dataList.toString()}`)
			.then((res)=>{
				//console.log(res.data.data.list)
				this.setState({
					floor11:res.data.data.list
				})
			})
			axios.get(`/product/skus?ids=${res.data.floors[0].dataList}`)
			.then((res)=>{
//				console.log(res.data.data.list)
				this.setState({
					floor0:res.data.data.list
				})
//				console.log(this.state.floor0)
			})
		 	var arr = this.state.floors[6].dataList
//		 	console.log(arr)
			var len = arr.length
			var arrs = [];
			for(var i=0;i<len;i++){
				axios.get(`/product/spus?ids=${arr[i].substr(0,7)}`)
				.then((res)=>{
//						console.log(res.data.data.list[0])
					arrs.push(res.data.data.list[0])
					this.setState({
						floor7:arrs						
					})
//						console.log(this.state.floor7)
				})
			}
		 
			 this.getaxios(this.state.floor5id)
			 this.getaxios(this.state.floor8id)
		})
		 
			axios.get("/product/skus?ids=100033802")
	        .then((res)=>{
	          // console.log(res.data.data.list[0].shop_info)
            	this.setState({
	            	plus : res.data.data.list
	          })
	//        console.log(this.state.plus)
	        });   
	}
	render() {
		return (
			<div style={{ width: '100%', height:'100%',display:'flex',flex:'1',flexDirection: 'column'}}>
				<header>
					<Link to="" className="nav-toggle" title="菜单">.</Link>
					<h1 className="nav-logo"> 
					   <NavLink exact activeClassName="active" to="/">
					   </NavLink>
					</h1>
				</header>
			
				<main>
					<section>
		        		<div className="banner">
							<Carousel
					          autoplay={true}
					          infinite={true}
					          selectedIndex={1}         
					        >
					          {
					          	this.state.banner.map((item,index) => {
					//	          console.log(item)	
						          	return(
							            <a href={item.linkUrl} key={index}>
							              <img src={item.src} alt="" style={{ width: '100%', verticalAlign: 'top' }}
							              />
							            </a>
						           	)
						          })
					          }
				        	</Carousel>
			
			        	</div>
			
			       	    <div className="short-cut">
				       	    {
				       	    	this.state.shortcut.map((item,index)=>{
				       	    		
				       	    		return(
				       	    			<a href={item.linkUrl} key={item.linkUrl}>
				       	    				<img  src={item.src} alt="" />
				       	    				<p>{item.labelTitle}</p>
				       	    			</a>
				       	    		)
				       	    	})
				       	    }
			       	    </div>
					</section>
				
					<div className="floor7 section-floor">
				        {
				       	this.state.floors.slice(0,1).map((item,index)=>{
				        		return(
				        			 <h3 key={index}>{item.floorName}</h3>
				        		)
				        	})
				        }
         
		          		<div className="fl0main">
							<ul>
		                      {
		                        this.state.floor0.map((item,index)=>{
		                            return(
			                            <li key={index}>
			                                <Link to={`/detail/${item.spu_id}`} >
			                                  <img src={item.shop_info.ali_image} alt="" width = '100%'/>
			                                </Link>
			                                <div className="zi">
			          							<h4>{item.shop_info.sku_mobile_title}</h4>
		                      					<p>{item.shop_info.sku_mobile_sub_title}</p>
			                    				<span>￥{item.price}</span>
			                  				</div>         
			                            </li>
		                            )
		                        })
		                      }
	                    	</ul>
						</div>
					</div>
				
					<div className="floor-container">
		       	   		<ul className="box-products-items">
			       	    	{
			       	    		this.state.layout.map((item,index)=>{
			       	    			return (
			       	    				<li key={index}><img src={item.src} alt="" /></li>
		       	    				)
			       	    		})
			       	    	}
	       	    		</ul>
	     			</div>
	       
	      			<div className="floor3">
			            {
				       	this.state.floors.slice(2,3).map((item,index)=>{
				        		return(
				        			 <h3 key={index}>{item.floorName}</h3>
				        		)
				        	})
			        	}
			            <Carousel
				          autoplay={true}
				          infinite
				          selectedIndex={1}
				        >
					        {
					          	this.state.floor3.map(val => (
					            	<Link to="" key={val} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
					              	<img src={val} alt="" style={{ width: '100%', verticalAlign: 'top' }} onLoad={() => {
					                  window.dispatchEvent(new Event('resize'));
					                  this.setState({ imgHeight: 'auto' });
					              	}}/>
						              	<div className="zi">
							                <h4>坚果 Pro2</h4>
							                <p>漂亮的不像实力派</p>
							                <span>￥
						                  1799,00</span>
						             	</div>
					           		 </Link>					            
					         	 ))					          
					        }              
        				</Carousel>       
        			</div>
            
			        <div className="floor4">
		               {
		                 this.state.floor4.map((item, index)=>{
		                   return(
		                     <img src={item.src} alt="" key={index}/>
		                   )
		                 })
		               }
			        </div>
        
			        <div className="floor5">
			            {
				       		this.state.floors.slice(4,5).map((item,index)=>{
				        		return(
				        			 <h3 key={index}>{item.floorName}</h3>       			 
				        		)
				        	})
			        	}
			            {
			                this.state.plus.map((ite,index)=>{
			//                	console.log(ite)
			                    return(
				                    <Link to={`/detail/${ite.spu_id}`} key={ite.id}>
				                    	<img src={ite.shop_info.ali_image} alt=""/>
					                    <div className="zi">
					                      <h4>{ite.shop_info.title}</h4>
					                      <p>{ite.shop_info.sub_title}</p>
					                      <span>￥{ite.price}</span>
					                   	</div>
				                   	</Link>
			                      
			                    )
			                  
			                })
			            }
			            <div className="fl5list">
			                {
			                    this.state.floor5id1.map((item,index)=>{
				                    return(
				                        <Link to={`/detail/${item.spu_id}`} className="fl5small" key={item.id}>
				                          <img src={item.shop_info.ali_image} alt=""/>
				                          <span>{item.name}</span>
				                        </Link>
				                    )
			                    })			
			                }
			            </div>
			        </div>
        
			        <div className="floor6">
			        	<div className="floor6l">
			        		{
					             this.state.floor6.slice(0,3).map((item, index)=>{
					               return(
						               	 <Link to={item.linkUrl} key={index}>					   
						                 	<img src={item.src} alt="" />
						                 </Link>
					               )
					             })
			            	}
			        	</div>
			        	<div className="floor6r">
			        		{
				             this.state.floor6.slice(3,4).map((item, index)=>{
				              	 return(
					               	 <Link to={item.linkUrl} key={index}>				   
					                 	<img src={item.src} alt="" />
					                 </Link>
				              	 )
				             })
				            }
			        	</div>
			        </div>
        
			        <div className="floor7">
				      	{
					       	this.state.floors.slice(6,7).map((item,index)=>{
					        		return(
					        			 <h3 key={index}>{item.floorName}</h3>
					        		)
				        	})
				        }
	                  	<div className="fl7main">
		                    <ul>
		                      	{
			                        this.state.floor7.map((item,index)=>{
			                            return(
			                              <li key={index}>
			                                <Link to={`/detail/${item.spu_id}`} >
			                                  <img src={item.sku_info[0].ali_image} alt=""/>
			                                </Link>
			                                <div className="zi">
							                      <h4>{item.sku_info[0].title}</h4>
							                      <p>{item.sku_info[0].sub_title}</p>
							                      <span>￥{item.price}</span>
						                   	</div>         
			                              </li>
			                            )
			                        })
		                      	}
		                    </ul>
             	 		</div>
		        	</div>
        
			        <div className="floor7">
			          	{
				       		this.state.floors.slice(7,8).map((item,index)=>{
				        		return(
				        			 <h3 key={index}>{item.floorName}</h3>
				        		)
				        	})
				        }			
			          	<div className="fl8main">
				          	<ul>
			                      {
									this.state.floor8id1.slice(1,6).reverse().map((item,index)=>{
			                            return(
			                              	<li key={index}>
				                                <Link to={`/detail/${item.spu_id}`} >
				                                  <img src={item.shop_info.ali_image} alt=""/>
				                                </Link>
				                                <div className="zi">
								                      <h4>{item.shop_info.sku_mobile_sub_title}</h4>
								                      <p>{item.shop_info.sku_mobile_title}</p>
								                      <span>￥{item.price}</span>
							                   	</div>         
			                              	</li>
			                            )
			                        })
			                      }
			            	</ul>
			          	</div>
			        </div>
        
			        <div className="floor4">
		               	{
		                 	this.state.floor9.map((item, index)=>{
		                   		return(
		                     		<img src={item.src} alt="" key={index}/>
		                   		)	
		                 	})
		               	}	
			        </div>
        
			        <div className="floor7">
			        	{
			       			this.state.floors.slice(9,10).map((item,index)=>{
				        		return(
				        			 <h3 key={index}>{item.floorName}</h3>
				        		)
			        		})
			        	}			         
			          	<div className="fl7main">
				          	<ul>
		                      	{
			                        this.state.floor10.map((item,index)=>{
			                            return(
			                              <li key={index}>
			                                <Link to={`/detail/${item.spu_id}`} >
			                                  	<img src={item.shop_info.ali_image} alt="" width = '100%'/>
			                                </Link>
			                                <div className="zi">
						           				<h4>{item.shop_info.sku_mobile_title}</h4>
						                      	<p>{item.shop_info.sku_mobile_sub_title}</p>
					                      		<span>￥{item.price}</span>
						                   	</div>         
			                              </li>
			                            )
			                        })
		                      	}
		                    </ul>
			          	</div>
			      	</div>
			        
			        <div className="floor7">
				        {
				       		this.state.floors.slice(10,11).map((item,index)=>{
				        		return(
				        			 <h3 key={index}>{item.floorName}</h3>
				        		)
				        	})
				        }			         
			          	<div className="fl7main">
				          	<ul>
			                      {
			                        this.state.floor11.map((item,index)=>{
			                            return(
			                              <li key={index}>
			                                <Link to={`/detail/${item.spu_id}`} >
			                                  <img src={item.shop_info.ali_image} alt="" width = '100%'/>
			                                </Link>
			                                <div className="zi">
							         			  <h4>{item.shop_info.sku_mobile_title}</h4>
							                      <p>{item.shop_info.sku_mobile_sub_title}</p>
							                      <span>￥{item.price}</span>
						                   	</div>         
			                              </li>
			                            )
			                        })
			                      }
		                    </ul>
			          	</div>
			      	</div>
			</main>
		</div>
		)
	}
}