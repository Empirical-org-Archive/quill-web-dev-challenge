import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AppHeader from './AppHeader';
import StageOneForm from './StageOneForm';

class App extends Component {
  render() {
    const { store, initial } = this.props;
    let render;
    if ( initial.stageOne ) {
      render =
        <StageOneForm
          store={ store }/>
    } else {
      render =
        <p>Stage Two</p>
    }
    return (
      <div className="App">
        <AppHeader />
        { render }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initial: state.initial
  }
};

export default connect(
  mapStateToProps
)(App);
