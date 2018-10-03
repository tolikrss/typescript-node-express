import Home from '../containers/home/HomeContainer';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface IPathParams {
    param: string;
}

type Props = RouteComponentProps<IPathParams>;

class HomeView extends React.Component<Props> {
    public render() {
        return (
            <Home/>
        );
    }
}

export default withRouter( HomeView );