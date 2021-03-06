import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Calendar from './components/Calendar';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import Myprofile from "./pages/Myprofile";
import { Button } from 'reactstrap';
import './App.css';
import { UserProvider } from "./utils/UserContext";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import EventForm from './components/EventForm';




class App extends React.Component {
	render() {
	  return (
		<div className="App">
		  <header>
			<div id="logo">
			  <span className="icon">date_range</span>
			  <span>
				react<b>calendar</b>
			  </span>
			</div>
		  </header>
		  <main>
			<Calendar />
		  </main>
		</div>
	  );
	}
  }
  
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<Nav className="App-header" />
				<Container>
					<Switch>
						<Route path="/public" component={PublicRoute} />
						<Route path="/login" component={Login} />
						<Route exact path="/profile" component={Profile} />
						
						<Route path="/register" component={Register} />
						<Route exact path="/protected" component={ProtectedRoute} />
						<Route exact path="/addevent" component={EventForm}/>
						<Route path="/editevent/:id" component={EditEvent}/>
						{/* <Route match="profile" component={Myprofile} /> */}

						

						{/* <Route component={NoMatch} /> */}
					</Switch>
				</Container>
			</div>
		</Router>
	</UserProvider>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<div className="alert alert-danger text-center" role="alert">
								This page is private to authenticated users.
					</div>
							<div className="row">
								<div className="col-sm"></div>
								<div className="col-sm">
									<h3>Please Register or Login</h3>
								</div>
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)










export default AuthExample;


