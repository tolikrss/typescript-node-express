import * as React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../reducers/root.reducer';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../actions';
import { getSimpleData } from '../../selectors';

export interface IDispatchProps {
    exampleAction?: () => void;
}

interface IOwnProps {
    title?: string;
}

interface IComponentState {
    data1?: any;
}

type Props = IDispatchProps & IOwnProps;

class HomeContainer extends React.Component<Props, IComponentState> {
    public render() {
        return (
            <div className="home">
                <span>Home</span>
                <p> Data: {this.props.title}</p>
                <button onClick={this.props.exampleAction}>testAction</button>
            </div>
        );
    }
}

const mapStateToProps = ( store: IStoreState, props: IOwnProps ): IOwnProps => ({
    title: getSimpleData( store ).data
});

const mapDispatchToProps = ( dispatch: Dispatch<actions.MainAction> ): IDispatchProps => bindActionCreators( {
    exampleAction: actions.simpleAction,
}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( HomeContainer )