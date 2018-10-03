import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { InfoContainer } from '../containers/info/InfoContainer';

interface IPathParams {
    param: string;
}

type Props = RouteComponentProps<IPathParams>;

class InfoView extends React.Component<Props> {
    public render() {
        return (
            <InfoContainer/>
        );
    }
}

export default withRouter( InfoView );