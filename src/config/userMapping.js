import {
  FaUserCircle,
  FaStar,
  FaShieldAlt,
  FaUserFriends,
  FaArchive
} from "react-icons/fa";

export default {
  all: { queryValue: "all", displayText: "All", LinkIcon: FaUserCircle },
  favorites: {
    queryValue: "favorites",
    displayText: "Favorites",
    LinkIcon: FaStar
  },
  administrator: {
    queryValue: "administrator",
    displayText: "Administrator",
    LinkIcon: FaShieldAlt
  },
  nonAdmin: {
    queryValue: "nonAdmins",
    displayText: "None-Admins",
    LinkIcon: FaUserFriends
  },
  archived: {
    queryValue: "archived",
    displayText: "Archived",
    LinkIcon: FaArchive
  }
};
