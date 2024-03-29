import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { MenuData } from "./MenuData";
import { MenuDataNotLogged } from "./MenuDataNotLogged";
import { MenuDataBoss } from "./MenuDataBoss";
import { MenuDataLeader } from "./MenuDataLeader";
 
const Nav = styled.div`
    background: #B67160;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 0px;
`;
 
const NavIcon = styled(NavLink)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
 
const SidebarNav = styled.nav`
    background: #B67160;
    width: 160px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;
 
const SidebarWrap = styled.div`
    width: 100%;
`;
 
const HamMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    let items;
    //checks if the logged in user got some special ID. If so it will show some more options on their page.
    if (localStorage.getItem("loggedIn") === "true") {items = MenuData.map((item, index) => {
        return (
            <SubMenu
                item={item}
                key={index}
            />
        );
    })}
    if (localStorage.getItem("bossFunctions") === "true") {items = MenuDataBoss.map((item, index) => {
        return (
            <SubMenu
                item={item}
                key={index}
            />
        );
    })}
    if(localStorage.getItem("projectleaderFunctions") === "true") {items = MenuDataLeader.map((item, index) => {
        return (
            <SubMenu
                item={item}
                key={index}
            />
        );
    })}

    if (localStorage.getItem("loggedIn") === null) {items = MenuDataNotLogged.map((item, index) => {
        return (
            <SubMenu
                item={item}
                key={index}
            />
        );
    })}
    return (
        <>
            <IconContext.Provider value={{ color: "black" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                        />
                    </NavIcon>
                    <h1
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "green",
                        }}
                    >
                    </h1>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {items}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};
 
export default HamMenu;