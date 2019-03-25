import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  ContentListWithBorder,
  ContentListIcon,
  ContentListItemWithoutBorder,
  Search
} from "../modules/styled/Layout";

export default ({ handleChange }) => (
  <ContentListWithBorder>
    <ContentListIcon>
      <FaSearch />
    </ContentListIcon>
    <ContentListItemWithoutBorder>
      <Search onChange={handleChange} placeholder="Search" />
    </ContentListItemWithoutBorder>
  </ContentListWithBorder>
);
