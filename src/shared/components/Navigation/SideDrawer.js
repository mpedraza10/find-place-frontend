// React imports
import React from "react";
import { createPortal } from "react-dom"; // Used to render the component in another place outside the root div

// Styles
import "./SideDrawer.css";

const SideDrawer = (props) => {
	const content = <aside className="side-drawer">{props.children}</aside>;
	return createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
