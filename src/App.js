import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DefaultGrid from "./components/DefaultGrid";
import ThemedGrid from "./components/ThemedGrid";
import ColumnFunctions from "./components/ColumnFunctions";
import NavBar from "./components/common/NavBar";
const HomeComponent = () => {
	return (
	<Router>
	<NavBar />
        
			<Switch>
			<Route path="/columnfunctions">
				<ColumnFunctions />
			</Route>
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













