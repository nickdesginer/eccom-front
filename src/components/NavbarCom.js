import './Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../utils/localstorage'
import { setInitialState } from '../redux/actions/userAction'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarCom = ({ click }) => {
  const cart = useSelector(state => state.cart)
  const history = useHistory()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  // console.log({user})

  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const _handleLogout = () => {
    // console.log('click')
    dispatch(setInitialState())
    logout()
    history.push('/')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand>E-COMMERCE</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <p className='count'>{ getCartCount() }</p>
              <Nav.Link>
                <Link to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="30" width="30" version="1.1" id="Layer_1" viewBox="0 0 508 508" space="preserve">
                    <path style={ { fill: "#F4AEA8" } } d="M414,25.2c0-8.8-8-14.4-16.4-14.4H192c-8.8,0-18,5.6-18,14.4v17.6h152.4c8.8,0,15.6,5.2,15.6,14v54  h72V25.2z" />
                    <path style={ { fill: "#54B265" } } d="M482,72.8c0-8.8-8.8-14-17.2-14H414v52h68V72.8z" />
                    <path style={ { fill: "#73BADD" } } d="M326.4,42.8h-166c-8.8,0-14.4,5.2-14.4,14v54h196v-54C342,48,335.2,42.8,326.4,42.8z" />
                    <path style={ { fill: "#7D8B95" } } d="M64,72.8l17.2,38h3.2h20.8L84.8,65.6c-7.2-16-19.2-26.8-42.4-26.8H6v20h35.6C56.8,58.8,60,64,64,72.8  z" />
                    <path style={ { fill: "#EFDC81" } } d="M196.8,346.8h10.4h21.6h247.6c8.8,0,17.6-8.4,17.6-17.2V134.8H90l84.8,196.4  C178,339.2,188,346.8,196.8,346.8z" />
                    <g>
                      <path style={ { fill: "#F4EFEF" } } d="M392,309.6c5.6,0,10-4.4,10-9.6V165.6c0-5.6-4.4-10-10-10s-10,4.4-10,10V300   C382,305.2,386.4,309.6,392,309.6z" />
                      <path style={ { fill: "#F4EFEF" } } d="M448,309.6c5.6,0,10-4.4,10-9.6V165.6c0-5.6-4.4-10-10-10c-5.6,0-10,4.4-10,10V300   C438,305.2,442.4,309.6,448,309.6z" />
                      <path style={ { fill: "#F4EFEF" } } d="M336,309.6c5.6,0,10-4.4,10-9.6V165.6c0-5.6-4.4-10-10-10s-10,4.4-10,10V300   C326,305.2,330.4,309.6,336,309.6z" />
                      <path style={ { fill: "#F4EFEF" } } d="M276,309.6c5.6,0,10-4.4,10-9.6V165.6c0-5.6-4.4-10-10-10s-10,4.4-10,10V300   C266,305.2,270.4,309.6,276,309.6z" />
                      <path style={ { fill: "#F4EFEF" } } d="M224,309.6c5.6,0,10-4.4,10-9.6V165.6c0-5.6-4.4-10-10-10s-10,4.4-10,10V300   C214,305.2,218.4,309.6,224,309.6z" />
                      <path style={ { fill: "#F4EFEF" } } d="M178,165.2c0-5.6-2.4-10-8-10s-8,4.4-8,10v43.6c0,5.6,2.4,9.6,8,9.6s8-4.4,8-9.6V165.2z" />
                    </g>
                    <g>
                      <path style={ { fill: "#7D8B95" } } d="M172,408.8c-24,0-43.2,19.2-43.2,43.2s19.2,43.2,43.2,43.2s43.2-19.2,43.2-43.2S196,408.8,172,408.8   z" />
                      <path style={ { fill: "#7D8B95" } } d="M460.8,495.2c24,0,43.2-19.2,43.2-43.2s-19.2-43.2-43.2-43.2S417.6,428,417.6,452   C417.6,476,436.8,495.2,460.8,495.2z" />
                    </g>
                    <path style={ { fill: "#2D414E" } } d="M81.2,110.8L81.2,110.8c-4.8,0-7.2,4.8-7.2,9.2v4c0,4.4,2.8,6.8,7.2,6.8H90h402.4c4.4,0,6-2.4,6-6.8  v-4c0-4.4-1.6-9.2-6-9.2H105.6H84.8H81.2L81.2,110.8z" />
                    <path d="M274,313.6c-7.6,0-14-6-14-14V165.2c0-7.6,6.4-14,14-14s14,6,14,14v134.4C288,307.6,281.6,313.6,274,313.6z M274,159.6  c-3.2,0-6,2.8-6,6V300c0,3.2,2.8,6,6,6s6-2.8,6-6V165.6C280,162.4,277.2,159.6,274,159.6z" />
                    <path d="M222,313.6c-7.6,0-14-6-14-14V165.2c0-7.6,6.4-14,14-14s14,6,14,14v134.4C236,307.6,229.6,313.6,222,313.6z M222,159.6  c-3.2,0-6,2.8-6,6V300c0,3.2,2.8,6,6,6s6-2.8,6-6V165.6C228,162.4,225.2,159.6,222,159.6z" />
                    <path d="M170,225.6c-7.6,0-14-6-14-14v-46.4c0-7.6,6.4-14,14-14s14,6,14,14v46.4C184,219.6,177.6,225.6,170,225.6z M170,159.6  c-3.2,0-6,2.8-6,6V212c0,3.2,2.8,6,6,6s6-2.8,6-6v-46.4C176,162.4,173.2,159.6,170,159.6z" />
                    <path d="M334,313.6c-7.6,0-14-6-14-14V165.2c0-7.6,6.4-14,14-14s14,6,14,14v134.4C348,307.6,341.6,313.6,334,313.6z M334,159.6  c-3.2,0-6,2.8-6,6V300c0,3.2,2.8,6,6,6s6-2.8,6-6V165.6C340,162.4,337.2,159.6,334,159.6z" />
                    <path d="M390,313.6c-7.6,0-14-6-14-14V165.2c0-7.6,6.4-14,14-14s14,6,14,14v134.4C404,307.6,397.6,313.6,390,313.6z M390,159.6  c-3.2,0-6,2.8-6,6V300c0,3.2,2.8,6,6,6s6-2.8,6-6V165.6C396,162.4,393.2,159.6,390,159.6z" />
                    <path d="M446,313.6c-7.6,0-14-6-14-14V165.2c0-7.6,6.4-14,14-14s14,6,14,14v134.4C460,307.6,453.6,313.6,446,313.6z M446,159.6  c-3.2,0-6,2.8-6,6V300c0,3.2,2.8,6,6,6s6-2.8,6-6V165.6C452,162.4,449.2,159.6,446,159.6z" />
                    <path d="M85.2,114c-1.6,0-2.8-0.8-3.6-2.4l-17.2-38c-3.2-6.8-4.4-9.2-18.8-9.2H4c-2.4,0-4-1.6-4-4v-20c0-2.4,1.6-4,4-4h42.4  c23.6,0,37.6,8.4,46,26.8l20.4,42.8c0.8,2,0,4.4-2,5.2c-2,0.8-4.4,0-5.2-2L85.2,66.4c-6.8-15.6-18.4-22-38.8-22H8v12h37.6  c16.4,0,20.8,3.6,26,13.6l17.2,38c0.8,2,0,4.4-2,5.2C86.4,114,86,114,85.2,114z" />
                    <path d="M480.4,348.8H200.8c-11.2,0-23.2-12-26.8-20.4L91.6,137.2c-0.8-2,0-4.4,2-5.2c2-0.8,4.4,0,5.2,2l82.4,191.2  c2.8,6.8,12.8,15.6,19.6,15.6h279.6c4.4,0,7.6-10,7.6-19.2V134.8c0-2.4,1.6-4,4-4s4,1.6,4,4v186.8  C496,331.2,492.8,348.8,480.4,348.8z" />
                    <path d="M172,499.2c-26,0-47.2-21.2-47.2-47.2s21.2-47.2,47.2-47.2s47.2,21.2,47.2,47.2C219.2,478,198,499.2,172,499.2z M172,412.8  c-21.6,0-39.2,17.6-39.2,39.2s17.6,39.2,39.2,39.2s39.2-17.6,39.2-39.2S193.6,412.8,172,412.8z" />
                    <path d="M172,479.6c-15.2,0-27.6-12.4-27.6-27.6s12.4-27.6,27.6-27.6c2.4,0,4,1.6,4,4s-1.6,4-4,4c-10.8,0-19.6,8.8-19.6,19.6  c0,10.8,8.8,19.6,19.6,19.6s19.6-8.8,19.6-19.6c0-2.4,1.6-4,4-4s4,1.6,4,4C199.6,467.2,187.2,479.6,172,479.6z" />
                    <path d="M460.8,499.2c-26,0-47.2-21.2-47.2-47.2s21.2-47.2,47.2-47.2S508,426,508,452C508,478,486.8,499.2,460.8,499.2z   M460.8,412.8c-21.6,0-39.2,17.6-39.2,39.2s17.6,39.2,39.2,39.2S500,473.6,500,452S482.4,412.8,460.8,412.8z" />
                    <path d="M460.8,479.6c-15.2,0-27.6-12.4-27.6-27.6s12.4-27.6,27.6-27.6c2.4,0,4,1.6,4,4s-1.6,4-4,4c-10.8,0-19.6,8.8-19.6,19.6  c0,10.8,8.8,19.6,19.6,19.6c10.8,0,19.6-8.8,19.6-19.6c0-2.4,1.6-4,4-4s4,1.6,4,4C488,467.2,476,479.6,460.8,479.6z" />
                    <path d="M418,468.8H214c-2.4,0-4-1.6-4-4s1.6-4,4-4h204c2.4,0,4,1.6,4,4S420.4,468.8,418,468.8z" />
                    <path d="M418,448.8H218c-2.4,0-4-1.6-4-4s1.6-4,4-4h200c2.4,0,4,1.6,4,4S420.4,448.8,418,448.8z" />
                    <path d="M198.8,420.4c-0.4,0-1.2,0-1.6-0.4c-2-0.8-2.8-3.2-2-5.2l30.8-71.2c0.8-2,3.2-2.8,5.2-2s2.8,3.2,2,5.2L202.4,418  C201.6,419.2,200.4,420.4,198.8,420.4z" />
                    <path d="M180.8,412c-0.4,0-1.2,0-1.6-0.4c-2-0.8-2.8-3.2-2-5.2l27.2-63.2c0.8-2,3.2-2.8,5.2-2s2.8,3.2,2,5.2l-27.2,63.2  C183.6,411.2,182.4,412,180.8,412z" />
                    <path d="M492,136.8H80c-6.4,0-12-5.2-12-12v-4c0-6.4,5.2-12,12-12h412c6.4,0,12,5.2,12,12v4C504,131.6,498.8,136.8,492,136.8z   M80,116.8c-2,0-4,1.6-4,4v4c0,2,1.6,4,4,4h412c2,0,4-1.6,4-4v-4c0-2-1.6-4-4-4H80z" />
                    <path d="M412,110.8c-2.4,0-4-1.6-4-4V21.2c0-1.6-0.4-2.8-0.8-3.2c-1.2-1.2-5.2-1.2-8.8-1.2H191.2c-5.2,0-12,0-14.4,2.4  c-0.4,0.4-0.8,0.8-0.8,2v17.6c0,2.4-1.6,4-4,4s-4-1.6-4-4V21.2c0-3.2,1.2-6,3.2-8c4.4-4.4,12.8-4.4,20-4.4h207.2  c6,0,11.2,0,14.8,3.6c2,2,3.2,5.2,3.2,8.8v85.6C416,109.2,414.4,110.8,412,110.8z" />
                    <path d="M480,110.8c-2.4,0-4-1.6-4-4v-38c0-1.6-0.4-2.4-0.8-2.8c-1.2-1.2-5.2-1.2-8.4-0.8h-2H418c-2.4,0-4-1.6-4-4s1.6-4,4-4h48.8  c5.6,0,10.8,0,14.4,3.2c2,2,3.2,4.8,3.2,8.4v38C484,109.2,482.4,110.8,480,110.8z" />
                    <path d="M340,110.8c-2.4,0-4-1.6-4-4v-54c0-2.4-0.4-3.2-0.8-3.2c-0.8-0.8-4.4-0.8-7.2-0.8h-53.2H158.4c-4,0-8.4,0-10,1.2  c-0.4,0.4-0.8,1.2-0.8,2.8v54c0,2.4-1.6,4-4,4s-4-1.6-4-4v-54c0-3.6,1.2-6.4,3.2-8.4c3.6-3.6,9.6-3.6,15.6-3.6h1.6h167.6  c5.2,0,10,0,12.8,3.2c2.8,2.8,2.8,6.4,2.8,8.8v54C344,109.2,342.4,110.8,340,110.8z" />
                  </svg>
                </Link>
              </Nav.Link>
              { !user.userInfo.isLogin ? (

                <Nav.Link>
                  <Link to="/signin" className='text-decoration-none black'>
                    Login
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link onClick={ _handleLogout }>Logout</Nav.Link>
              ) }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarCom
