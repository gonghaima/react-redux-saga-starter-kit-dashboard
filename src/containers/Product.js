import React, { Component } from "react";

import { connect } from "react-redux";
import { getUsers, setSelection } from "../actions";
import SearchBar from "../components/SearchBar";
import { Content, ContentWrapper } from "../modules/styled/Layout";
import { filterUsers } from "../actions";
import ContentList from "../components/content/ContentList";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.dispatch(filterUsers(event.target.value));
  }
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    const filteredData =
      (this.props.users && this.props.users.filteredData) || [];
    const userCount = (filteredData && filteredData.length) || 0;

    return (
      <ContentWrapper>
        <Content>
          <SearchBar handleChange={this.handleChange} />
          {filteredData.map((user, i) => (
            <ContentList key={user.id} user={user} last={userCount === i + 1} />
          ))}
        </Content>
      </ContentWrapper>
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

export default connect(mapStateToProps)(Product);
