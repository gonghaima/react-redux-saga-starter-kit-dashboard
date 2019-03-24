import React from "react";
import { NavAnchor, NavDiv, NavLi, NavLiText } from "../../modules/styled/Nav";

const NavListItem = ({ displayText, queryValue, LinkIcon, navigate }) => {
  return (
    <NavLi className="nav-item" onClick={navigate(queryValue)}>
      <NavAnchor className="nav-link active" href="#">
        <NavDiv>
          <LinkIcon size={18} />
        </NavDiv>
        <NavDiv>
          <NavLiText>{displayText}</NavLiText>
        </NavDiv>
      </NavAnchor>
    </NavLi>
  );
};

export default NavListItem;
