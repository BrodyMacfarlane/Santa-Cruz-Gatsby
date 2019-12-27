import React from 'react'
import NavMenu from './NavMenu'
import '../styles/NavBar.css'

const navLinks = [{name: "bikes", path: "/bikes"}, {name: "wheels", path: "/wheels"}, {name: "paydirt", path: "/paydirt"}, {name: "gear", path: "/gear"}, {name: "teams", path: "/teams"}, {name: "news", path: "/news"}, {name: "demo", path: "/demo"}]

export default ({ children }) => {
  const [ menuOpen, setMenuOpen ] = React.useState(false)

  const toggleMenuOpen = () => {
    setMenuOpen(() => !menuOpen)
  }

  return (
    <React.Fragment>
      <header id="header">
        <NavMenu menuOpen={menuOpen} />
        <nav id="navbar">
          <div id="nav-left-content">
            <a href="/" title="Home" rel="home">
              <svg id="nav-logo" viewBox="0 0 147.79 47.4">
                <title>Santa Cruz Bicycles</title>
                <path d="M113,4.66,103.11,21.6H94.47L104.4,4.66H95L85.05,21.6H74.69L73.31,8.2,65.46,21.6H56.83L69.48,0H80l1.37,13.23L89.07,0h34.08l-2.73,4.66ZM56.7,0h-8L24,21.6H56.7ZM48.19,16.94H38L48.45,7.77ZM140.79,0h-8L108.13,21.6h32.65Zm-8.51,16.94h-10.2l10.46-9.17ZM7.69,8.47h0C6.19,11,7,13.1,9.57,13.13H19.82l-2.23,3.82H2.73L0,21.6H18.84c2.57,0,5.88-2.08,7.38-4.66h0l2.23-3.82h0c1.51-2.57.64-4.66-1.93-4.66H16.32l2.23-3.82H33.42L36.15,0H17.31c-2.57,0-5.88,2.08-7.38,4.66h0ZM82.35,42.73c-1.5,2.55-.65,4.63,1.88,4.65h15.93c2.57,0,5.88-2.08,7.38-4.66h0l7.2-12.29h14.6L109.54,47.38h24.64l2.73-4.66h-11l18.5-16.94H108.82L98.9,42.73H91l9.92-16.94H92.27Zm-43.06,0,7.2-12.29H58.79l2.73-4.66H45.23c-2.57,0-5.88,2.08-7.38,4.66h0l-7.2,12.29h0v0h0c-1.5,2.56-.65,4.63,1.88,4.66H48.86l2.74-4.67Zm25.9-16.94L52.53,47.38h8.63l4.17-7.12h1.73l3,7.12h9.1l-3.59-7.12h0c2.57,0,5.88-2.08,7.38-4.66h0l3-5.16h0c1.51-2.57.64-4.66-1.93-4.66H65.18Zm9.1,9.82H68.06l3-5.16h6.22Zm70-35.26h-.93v2h-.54v-2h-.93V0h2.41Zm.43-.34h.79l.62,1.39c.08.19.13.33.13.33h0s0-.13.12-.33L147,0h.79V2.32h-.54V.44h0a4.23,4.23,0,0,1-.17.45l-.63,1.43H146L145.4.89a4.26,4.26,0,0,1-.17-.45h0V2.32h-.5Z"></path>
              </svg>
            </a>
          </div>
          <div id="nav-center-content">
            <ul id="nav-links">
              {
                navLinks.map(link => (
                  <a key={link.name} href={link.path} className="nav-link">
                    <li className="nav-link-container">
                      {link.name}
                    </li>
                  </a>
                ))
              }
            </ul>
          </div>
          <div id="nav-right-content">
            <div id="nav-tools">
              <svg id="user-account" viewBox="0 0 20 20">
                <title>User Account</title>
                <path d="M683.83,377.5a3.43,3.43,0,1,0,3.43,3.43A3.43,3.43,0,0,0,683.83,377.5Zm0,5.19a1.76,1.76,0,1,1,1.76-1.76A1.76,1.76,0,0,1,683.83,382.69Zm0-8.52a10,10,0,1,0,10,10A10,10,0,0,0,683.83,374.17Zm5.83,15.94a8.31,8.31,0,0,1-11.67,0v-.57a4.73,4.73,0,0,1,1.92-3.7,6.55,6.55,0,0,0,7.82,0,4.73,4.73,0,0,1,1.92,3.7Zm-1.54-6-.55-.34-.47.46a4.84,4.84,0,0,1-6.55,0l-.47-.46-.55.34a6.68,6.68,0,0,0-3,4.07,8.33,8.33,0,1,1,14.64,0A6.68,6.68,0,0,0,688.13,384.08Z" transform="translate(-673.83 -374.17)"></path>
              </svg>

              <svg id="cart-empty" viewBox="0 0 25.17 18.65">
                <title>Shopping Cart Empty</title>
                <path d="M677.67,403.42a2.21,2.21,0,1,0,2.21,2.21A2.21,2.21,0,0,0,677.67,403.42Zm9.63,0a2.21,2.21,0,1,0,2.21,2.21A2.21,2.21,0,0,0,687.29,403.42Z" transform="translate(-668.13 -389.19)"></path><path d="M691.25,401.44H673.62l-2.29-10.25h-2.2a1,1,0,0,1,0-2h3.8l2.29,10.25h14.36l1.73-9.43a1,1,0,1,1,2,.36Z" transform="translate(-668.13 -389.19)"></path>
              </svg>

              <svg id="search" viewBox="0 0 486 503.39">
                <title>Search</title>
                <path d="M491.61,462.81,371.8,338.21a202.59,202.59,0,0,0,47.68-130.66c0-112.07-91.18-203.24-203.24-203.24S13,95.48,13,207.55s91.18,203.24,203.24,203.24A201.07,201.07,0,0,0,332.68,374L453.4,499.56a26.51,26.51,0,1,0,38.21-36.75ZM216.24,57.33c82.83,0,150.22,67.39,150.22,150.22S299.08,357.77,216.24,357.77,66,290.38,66,207.55,133.41,57.33,216.24,57.33Z" transform="translate(-13 -4.31)"></path>
              </svg>
            </div>
            <div id="hamburger" onClick={toggleMenuOpen} onKeyDown={toggleMenuOpen}>
              <svg viewBox="0 0 10 10" className={`hamburger ${menuOpen && "hamburger-open"}`}>
                <path d="M8,3 L2,3" className="p1"/>
                <path d="M2,5 L8,5" className="p2"/>
                <path d="M8,7 L2,7" className="p3"/>
              </svg>
            </div>
          </div>
        </nav>
      </header>
      { children }
    </React.Fragment>
  )
}