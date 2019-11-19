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
import { updateMenuDisplay } from "../actions";
import Top from "../components/top/index";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    // const visible = prevScrollpos > (currentScrollPos - 10);
    const visible = prevScrollpos > currentScrollPos;

    setTimeout(() => {
      this.setState({
        prevScrollpos: currentScrollPos,
        visible
      }, () => {
        this.props.dispatch(updateMenuDisplay(visible))
      });
    }, 500);
  };
  render() {
    const {
      users: { selected }
    } = this.props;
    const vis = this.state.visible;
    return (
      <Top>
        <SubHeader className={vis ? "active" : "hidden"}>
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
      </Top>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
    selection: state.selection,
    users: state.users,
    display: state.display
  };
}

export default connect(mapStateToProps)(Header);
