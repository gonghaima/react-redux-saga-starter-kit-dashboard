import React, { Component } from "react";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import {
  FaBars,
  FaSortAmountDown,
  FaEllipsisV,
  FaGripHorizontal
} from "react-icons/fa";
import {
  SubHeader,
  SubHeaderLeft,
  SubHeaderRight,
  SettingOptions
} from "../modules/styled/Home";

export class TitleHeader extends Component {
  render() {
    const {
      users: { selected }
    } = this.props;
    return (
      <SubHeader>
        <SubHeaderLeft>Users</SubHeaderLeft>
        <SubHeaderRight>
          <div>{selected.displayText}</div>
          <SettingOptions>
            <IconContext.Provider value={{ style: { marginRight: "4%" } }}>
              <FaGripHorizontal />
              <FaSortAmountDown />
              <FaBars />
              <FaEllipsisV />
            </IconContext.Provider>
          </SettingOptions>
        </SubHeaderRight>
      </SubHeader>
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

export default connect(mapStateToProps)(TitleHeader);
