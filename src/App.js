import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//component
// import Header from "./components/Header";

//pages
import Home2 from "./pages/Home2";
import DetailMovie from "./pages/DetailMovie";
// import UserPage from "./pages/UserPage";
//3.import provider yg tlah dibuat contextnya
// import UserContextProvider from "./contexts/UserContext";

//4.wrap dari provider ke komponen apa saja yg mau dilirkan datanya dari provider
function App() {
	return (
		<Router>
			{/* <Header /> */}
			<Switch>
				<Route exact path="/">
					<Home2 />
				</Route>
				<Route path="/:title">
					<DetailMovie />
				</Route>
				{/* <Route exact path="/user-page-context">
					<UserContextProvider>
						<UserPage />
					</UserContextProvider>
				</Route> */}
			</Switch>
		</Router>
	);
}

export default App;
