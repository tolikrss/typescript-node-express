import * as React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../reducers/root.reducer';
import { Dispatch } from 'redux';
import * as actions from '../../actions';
import { getSimpleData } from '../../selectors';
import * as api from '../../services/requests/films-request';

export interface IDispatchProps {
    exampleAction?: () => void;
    fetchAllFilms?: () => void;
}

interface IOwnProps {
    title?: string;
}

interface IComponentState {
    data1?: any;
}

type Props = IDispatchProps & IOwnProps;

class HomeContainer extends React.Component<Props, IComponentState> {

    public async componentDidMount() {
        await api.getAllFilms();
    }

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

const mapDispatchToProps = ( dispatch: Dispatch<actions.MainAction> ): IDispatchProps => ({
    exampleAction: () => dispatch( actions.simpleAction() ),
    // fetchAllFilms: () => dispatch( actions.asyncThunkAction() ),
});

export default connect( mapStateToProps, mapDispatchToProps )( HomeContainer )