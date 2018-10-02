import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {simpleAction} from '../../actions/simpleAction';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class App extends React.Component {
	simpleAction = (event) => {
		this.props.simpleAction();
	};

	render() {
		const {match, location, history} = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>

				<button onClick={this.simpleAction}>Test redux action</button>
				<pre> {JSON.stringify(this.props)}</pre>
				<br/>

				<div>You are now at {location.pathname}</div>
				<div onClick={() => this.props.history.push('/404')}>test router history</div>

				<Link to="/">
					<button>home</button>
				</Link>
				<Link to="/info">
					<button>info</button>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(App);
