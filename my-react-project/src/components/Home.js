import React, {Component} from 'react';
import '../style/Home.scss';
import Home1 from './Home1';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div id="app">
				< Home1 />
				
				<footer>
					<ul>
					 <li>
						<NavLink exact activeClassName="active" to="/">
							<img src={require('../img/shouye.png')} alt="" />
							<span>首页</span>
				   	</NavLink>
				   </li>
				   
				   <li>
						<NavLink exact activeClassName="active" to="/list">
							<img src={require('../img/fenlei.png')} alt="" />
							<span>分类</span>
				   	</NavLink>
				   </li>
				   
				   <li>
						<NavLink exact activeClassName="active" to="/cart">
							<img src={require('../img/gouwuche.png')} alt="" />
							<span>购物车</span>
				   	</NavLink>
				   </li>
				   
				   <li>
						<NavLink exact activeClassName="active" to="/login">
							<img src={require('../img/wode.png')} alt="" />
							<span>我的</span>
				   	</NavLink>
				   </li>
					</ul>
				</footer>
			</div>
		)
	}
}