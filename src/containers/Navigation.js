import React, { Component } from "react";
import { connect } from "react-redux";
import { filterUsers } from "../actions";
import {
  NavigationWrapper,
  NavUl,
  StickyContainer
} from "../modules/styled/Nav";
import NavListItem from "../components/navigation/NavListItem";
import config from "../config";

const { userMapping } = config;
const Navs = Object.keys(userMapping).map(key => userMapping[key]);

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.filterUser = this.filterUser.bind(this);
  }

  filterUser = path => () => {
    this.props.dispatch(filterUsers(path));
  };
  render() {
    const current = this.props.users.selected.queryValue;
    return (
      <NavigationWrapper>
        <StickyContainer>
          <NavUl>
            {Navs.map((item, i) => (
              <NavListItem
                key={i}
                navigate={this.filterUser}
                currentSelected={current}
                {...item}
              />
            ))}
          </NavUl>
        </StickyContainer>
      </NavigationWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
    selection: state.selection,
    users: state.users
  };
}

export default connect(mapStateToProps)(Navigation);
