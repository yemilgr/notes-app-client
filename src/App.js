import React from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

function App(props) {
	return (
		<div className='App container'>
			<Navbar bg='light' collapseOnSelect>
				<Navbar.Brand>
					<Link to='/'>Scratch</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Nav>
						<LinkContainer to='/signup'>
							<Nav.Link>Signup</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/login'>
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Routes />
		</div>
	);
}

export default App;
