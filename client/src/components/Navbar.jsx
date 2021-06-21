import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
		return (
			<div>
			<div className="header__nav">
				<div className="header__navLeft">
					<h4>
						<Link to="/">Court System</Link>
					</h4>
				</div>
				<div className="header__navRight">
					<h6 className={'border__view'}>
						<Link to="/">
							View Case
						</Link>
					</h6>
					<h6 className={'border__add'}>
						<Link to="/add+case" >
							Add Case
						</Link>
					</h6>
					<h6 className={'border__signUp'}>
						<Link to="/signIn">
							Sign In
						</Link>
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
