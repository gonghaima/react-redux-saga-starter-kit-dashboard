import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, Screen } from "../modules/styled/Home";
import Product from "../containers/Product";
import Header from "../containers/Header";
import Navigation from "../containers/Navigation";

function mapStateToProps(state) {
  return {
    display: state.display
  };
}
export class Home extends Component {
  render() {
    return (
      <Screen key="Screen" data-testid="ScreenWrapper">
        <Header />
        <HomeWrapper className={this.props.display.showMenu ? 'bigger-wrapper' : 'smaller-wrapper'}>
          <Navigation />
          <Product />
        </HomeWrapper>
      </Screen>
    )
  }
}

export default connect(mapStateToProps)(Home);
