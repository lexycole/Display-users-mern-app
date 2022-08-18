import React from "react";
import "./App.css";
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {indigo, pink} from '@material-ui/core/colors'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'; // v1.x


const theme = createTheme({
	palette: {
	  primary: {
	  light: '#757de8',
	  main: '#3f51b5',
	  dark: '#002984',
	  contrastText: '#fff',
	},
	secondary: {
	  light: '#ff79b0',
	  main: '#ff4081',
	  dark: '#c60055',
	  contrastText: '#000',
	},
	  openTitle: indigo['400'],
	  protectedTitle: pink['400'],
	  type: 'light'
	}
  })

  
const App = () => {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<MainRouter/>
			</MuiThemeProvider>
	  </BrowserRouter>
		// <AuthState>
		// 	<ContactState>
		// 		<AlertState>
		// 			<Router>
		// 				<Fragment>
		// 					<Navbar />
		// 					<div className="container">
		// 						<Alerts />
		// 						<Routes>
		// 							<Route path="/" element={<PrivateRoute />}>
		// 								<Route path="/" element={<Home />}></Route>
		// 							</Route>
		// 							<Route path="/about" element={<About />}></Route>
		// 							<Route path="/register" element={<Register />}></Route>
		// 							<Route path="/login" element={<Login />}></Route>
		// 						</Routes>
		// 					</div>
		// 				</Fragment>
		// 			</Router>
		// 		</AlertState>
		// 	</ContactState>
		// </AuthState>
	);
};

export default App;
