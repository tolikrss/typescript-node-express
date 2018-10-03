import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Link } from 'react-router-dom';

interface IComponentState {
    data1?: any;
}

type Props = {};


class App extends React.Component<Props, IComponentState> {

    public state: IComponentState = {};

    constructor( props: Props ) {
        super( props );

    }

    public render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header"><img src={logo} className="App-logo" alt="logo"/></header>
                </div>

                <React.Fragment>
                    <Link to="/">
                        <button>home</button>
                    </Link>
                    <Link to="/info">
                        <button>info</button>
                    </Link>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default App;
