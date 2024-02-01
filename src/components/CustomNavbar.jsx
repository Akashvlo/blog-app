
import { useEffect, useState } from "react";
import { NavLink as ReactLink, useNavigate  } from "react-router-dom";
import {Navbar,NavbarBrand,NavbarToggler,Alert,isOpen, Button,Collapse,Nav,NavLink,NavItem,NavbarItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from "reactstrap";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";

const CustomNavbar= () =>{
    

    let navigate=useNavigate()
   
    const[isOpen,setIsOpen]=useState(false)

    const[login,setLogin]=useState(false)
    const[user,setUser]=useState(undefined)


    useEffect(()=>{

      setLogin(isLoggedIn())
      setUser(getCurrentUserDetail())

    },[login])

    const logout=()=>{
      doLogout(()=>{
        //logged out
        setLogin(false)
        navigate("/")
      })
    }


    return    (
        <div>
      <Navbar color = "dark" dark expand = "md" fixed="">
        <NavbarBrand tag={ReactLink} to="/">AkashBlog</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink tag={ReactLink} to="/servies">
                Services
            
              </NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/services">Contact us</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar >
          {
            login &&(
             <>           
             
             <NavItem>
              <NavLink tag={ReactLink} to="/private/profileinfo">
                Profile Info
              </NavLink>

            </NavItem>
            <NavItem>
              <NavLink>
                {user.email}
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={logout}>
              logout
            </NavLink>

          </NavItem>
            </>

            )
          }
         {
          !login && (
            <>
            <NavItem>
            <NavLink tag={ReactLink} to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={ReactLink} to="/signup">
            Signup
          </NavLink>
        </NavItem>
        </>
          )
         }
          
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>

    );
};
export default CustomNavbar