import React from "react"
import {NavLink} from "react-router-dom"

export const Navbar: React.FC = () => {
	return (
		<ul>
			<li><NavLink to="/">Main</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	)
}

