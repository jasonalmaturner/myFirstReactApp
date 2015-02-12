var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>Hello World!</div>
			)
	}
});

React.render(<HelloWorld />, document.getElementById('app'));

var HelloUser = React.createClass({
	getInitialState: function() {
		return {
			username: '@jasonalmaturner'
		}
	},
	handleChange: function(e){
		this.setState({
			username: e.target.value
		});
	},
	render: function(){
		return (
			<div>
				Hello {this.state.username} <br />
				Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
			</div>
			)
	}
})