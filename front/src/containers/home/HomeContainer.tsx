import * as React from 'react';

import { connect } from 'react-redux';
import { IStoreState } from '../../reducers/root.reducer';
import { getSimpleData } from '../../selectors';
import { MainAction } from '../../actions';

import * as actions from '../../actions';
import * as api from '../../services/requests/films-request';

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
        <p>
          <button onClick={this.props.fetchAllFilms}>Fetch All Films</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ( store: IStoreState, props: IOwnComponentProps ): IStoreStateProps => ({
  title: getSimpleData( store ).data
});

const mapDispatchToProps = ( dispatch: MainAction ): IDispatchProps => ({
  exampleAction: () => dispatch( actions.simpleAction() ),
  fetchAllFilms: () => dispatch( actions.asyncThunkAction() ),
});

export default connect<IStoreStateProps, IDispatchProps, IOwnComponentProps>(
  mapStateToProps,
  mapDispatchToProps
)( HomeContainer );

/**
 * Types
 */
export interface IDispatchProps {
  exampleAction?: () => void;
  fetchAllFilms?: () => void;
}

interface IStoreStateProps {
  title?: string;
}

interface IOwnComponentProps {
  titleOwn?: string;
}

interface IComponentState {
  data1?: any;
}

type Props = IDispatchProps & IOwnComponentProps & IStoreStateProps;