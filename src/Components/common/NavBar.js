import React from "react";
import {
  Link
} from "react-router-dom";

import { navBar } from '../../shared';

const NavBar = ()=>{
	return (
	<nav  className="topnav">
	{navBar.map(item=>{
		return (<Link to={item.path} key={item.label}>
			{item.label}
		</Link>)
	})
	}
	</nav>
	)
};

export default NavBar;
