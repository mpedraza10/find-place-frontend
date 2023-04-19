// React imports
import React from "react";
import { createPortal } from "react-dom"; // Used to render the component in another place outside the root div

// Styles
import "./Backdrop.css";

const Backdrop = (props) => {    
    const backdrop = <div className="backdrop" onClick={props.onClick}></div>
	return createPortal(backdrop, document.getElementById("backdrop-hook"));
};

export default Backdrop;