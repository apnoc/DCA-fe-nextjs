import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header__Section} >  
    <section className=" p-5">
    <section className="container ">         
          <div  className={styles.box}>
                <div>
                  <img  width="100rem" border-radius="50rem" src="/assets/index1.jpg" alt="logo1" /> 
                </div>
                <div  className={styles.selected}>
                  <h2> DRUGS CONTROL ADMINISTRATION</h2>
                  <h5>Government Of Andhra Pradesh</h5>
                </div>
                <div>
                  <img  width="160rem" height="80rem" src="/assets/index2.jpg" alt="logo2" /> 
                </div>
          </div> 
          </section>                    
        </section>
                              
        <Navbar className={styles.navbar}  expand="md" >
        <div className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav " className={styles.navbarnav} >
              <Nav className="nav-item mr-auto px-4 py-3  ">
                <Nav.Link  className={styles.navlink} href="/home">Home</Nav.Link>            
                <Nav.Link  className={styles.navlink} href="/aboutUs">About Us</Nav.Link>
                <Nav.Link  className={styles.navlink} href="/services">Services </Nav.Link>            
                <Nav.Link  className={styles.navlink} href="/rtiAct">RTI ACT</Nav.Link>
                <Nav.Link  className={styles.navlink} href="/onlineSalesLicensingSystem">Online Sales Licensing System</Nav.Link>             
                <Nav.Link  className={styles.navlink} href="/procedureForLicenses">Procedure For Licenses</Nav.Link>
                <Nav.Link  className={styles.navlink} href="/contactUs">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>          
</div>
  )
}

export default Header