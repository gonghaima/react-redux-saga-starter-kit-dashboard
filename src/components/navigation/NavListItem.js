import React from "react";
import { NavAnchor, NavDiv, NavLi, NavLiText } from "../../modules/styled/Nav";

const NavListItem = ({
  displayText,
  queryValue,
  LinkIcon,
  navigate,
  currentSelected
}) => {
  return (
    <NavLi
      className={
        currentSelected === queryValue ? "nav-item selected" : "nav-item"
      }
      onClick={navigate(queryValue)}
    >
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
