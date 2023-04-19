// React imports
import React from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom"; // Used to render the component in another place outside the root div

// Styles
import "./SideDrawer.css";

const SideDrawer = (props) => {
	const content = (
		<CSSTransition
			in={props.show}
			timeout={200}
			classNames="slide-in-left"
			mountOnEnter
			unmountOnExit
		>
			<aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
		</CSSTransition>
	);
	return createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
