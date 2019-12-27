import React from 'react'

const navMenuItems = [{name: "bikes", path: "/bikes"}, {name: "wheels", path: "/wheels"}, {name: "paydirt", path: "/paydirt"}, {name: "gear", path: "/gear"}, {name: "teams", path: "/teams"}, {name: "news", path: "/news"}, {name: "demo", path: "/demo"}]

export default ({ menuOpen }) => (
  <div className={`nav-menu-container ${menuOpen ? "nav-menu-open" : "nav-menu-closed"}`}>
    <ul id="nav-menu">
      {
        navMenuItems.map(menuItem => {
          return (
            <a key={menuItem.name} className="menu-link" href={menuItem.path}>
              <li className="menu-item">{menuItem.name}</li>
            </a>
          )
        })
      }
    </ul>
  </div>
)