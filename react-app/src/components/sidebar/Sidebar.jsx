import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css' 

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <i class="fas fa-home"></i>
                                Home
                            </li>
                        </Link> 
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <i class="fas fa-users"></i>
                                Users
                            </li>
                        </Link>
                        <Link to="/proyects" className="link">
                            <li className="sidebarListItem">
                                <i class="fas fa-book-open"></i>
                                Proyects
                            </li>
                        </Link>
                        <Link to="/roles" className="link">
                            <li className="sidebarListItem">
                                <i class="fas fa-book-medical"></i>
                                Roles
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <i class="fas fa-cloud"></i>
                            Pages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
