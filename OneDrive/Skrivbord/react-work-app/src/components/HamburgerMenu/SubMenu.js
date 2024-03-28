import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
	display: flex;
	color: #000000;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;

	&:hover {
		background: #E9AEA1;
		border-left: 4px solid;
		cursor: pointer;
		color: #FFFFFF;
	}
	
	&.active {
		color: #FFFFFF;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;


const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<SidebarLink
				to={item.path}
				onClick={item.subNav && showSubnav}
			>
				<div>
					{item.icon}
					<SidebarLabel>
						{item.title}
					</SidebarLabel>
				</div>
			</SidebarLink>
		</>
	);
};

export default SubMenu;