import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import '../style/Home1.scss';
import axios from 'axios';

export default class Orders extends Component {
	constructor(props) {
	    super(props);
	     	this.getFilms = this.getFilms.bind(this);
		    this.state = {
		      films: []
		    }
	  }
	getFilms() {
    axios.get("/v4/api/film/now-playing?__t=1519610967079&page=1&count=5")
    .then((res)=>{
      console.log(res);
      this.setState({
        films: res.data.data.films
      })
    })
  }
	render() {
		return (
			<div>
			<header>
				<a className="nav-toggle" title="菜单"></a>
				<h1 className="nav-logo"> 
				   <NavLink exact activeClassName="active" to="/">
				   </NavLink>
				</h1>
			</header>
			
			<main>
				<section>
					<Carousel
			          autoplay={true}
			          infinite
			          selectedIndex={1}
			          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
			          afterChange={index => console.log('slide to', index)}
			        >
			          {this.state.data.map(val => (
			            <a
			              key={val}
			              href="http://www.alipay.com"
			              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
			            >
			              <img
			                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
			                alt=""
			                style={{ width: '100%', verticalAlign: 'top' }}
			                onLoad={() => {
			                  // fire window resize event to change height
			                  window.dispatchEvent(new Event('resize'));
			                  this.setState({ imgHeight: 'auto' });
			                }}
			              />
			            </a>
			          ))}
			        </Carousel>
				</section>
			</main>
		</div>
		)
	}
}