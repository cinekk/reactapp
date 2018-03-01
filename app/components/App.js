var React = require('react');

var Popular = require('./Popular');

class App extends React.Component {
	render() {
		return (
			<div className="container">	
				<h1>Pika, Pika!!</h1>
				<div>Będzie szybciej?</div>
				<Popular />
			</div>
		);
	}
}

module.exports = App;