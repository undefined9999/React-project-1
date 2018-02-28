import React, { Component } from 'react'; // 固定写法，引入必要的组件
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './style/App.scss';
import Home from './components/Home';



class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width:'100%',height:'100%'}}>
 
          <Route exact path="/" component={Home} />
					<Route path="/list" component={Home} />
					<Route path="/cart" component={Home} />
					
        </div>
      </Router>
    )
  }
}

export default App;