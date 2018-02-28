var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');

class App extends React.Component {
	render() {
		return (
			<div>	
				<h1>Pika, Pika!!</h1>
				<div>Będzie szybciej?</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);