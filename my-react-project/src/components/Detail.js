import React, {Component} from 'react';

export default class Detail extends Component {
	render() {
		return (
			<div>
				<h1>详情页</h1>
				<p>{this.props.match.params.fid}</p>
			</div>
		)
	}
}