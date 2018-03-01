import React, {Component} from 'react';
import {


  NavLink
} from 'react-router-dom';
import '../style/Home1.scss';
import axios from 'axios';
import {Carousel} from 'antd-mobile';

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
				<a href="" className="nav-toggle" title="菜单">1</a>
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
	          {this.state.banner.map((item,index) => { 
	          	return(
	            <a key={index}>
	              <img
	                src={item.src}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top' }}
	              />
	            </a>
	           )
	          })}
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
				
				<div className="section-floor">
				
				</div>
			</main>
		</div>
		)
	}
}