var React = require('react');

class Popular extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		}

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(newLanguage) {
		this.setState(() => ({selectedLanguage: newLanguage}));
	}

	render() {
		var langs = ['All', 'JavaScript', 'PHP', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<ul className="languages">
				{langs.map( lang => { 
						return 
							<li 
								style={lang === this.state.selectedLanguage ? {color: 'red'} : null}
								key={lang}
								onClick={this.updateLanguage.bind(null, lang)}
							>
								{lang}
							</li>
					
					})}
			</ul>
		)
	}
}

module.exports = Popular;