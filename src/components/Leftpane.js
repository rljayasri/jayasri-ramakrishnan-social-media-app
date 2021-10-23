import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LeftpaneWidgets from "./LeftpaneWidgets";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../Leftpane.css";

function Leftpane() {
  return (
    <div className="Leftpane">
      <AutoAwesomeIcon className="Leftpane__star" />

      <LeftpaneWidgets active Icon={HomeIcon} text="Home" />
      <LeftpaneWidgets Icon={SearchIcon} text="Explore" />
      <LeftpaneWidgets Icon={NotificationsIcon} text="Notifications" />
      <LeftpaneWidgets Icon={FavoriteIcon} text="Favorites" />
    </div>
  );
}

export default Leftpane;
