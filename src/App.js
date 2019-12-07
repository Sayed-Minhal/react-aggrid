import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DefaultGrid from "./components/DefaultGrid"
import ThemedGrid from "./components/ThemedGrid"
const HomeComponent = () => {
	return (
	<Router>
	<nav  className="topnav">
	
	<Link to="/" >
		Default Grid
	</Link>
	
	<Link to="/themed" >
		Themed Grid
	</Link>
	
	</nav>
        
			<Switch>
			<Route path="/themed">
				<ThemedGrid />
			</Route>
			<Route path="/">
				<DefaultGrid />
			</Route>
			
			</Switch>
		</Router>

    );
}

export default HomeComponent;













