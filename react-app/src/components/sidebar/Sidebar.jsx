import React from 'react'
import './sidebar.css' 

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <i class="fas fa-home"></i>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-users"></i>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-book-open"></i>
                            Proyects
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-book-medical"></i>
                            Articles
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-cloud"></i>
                            Pages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Tools</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <i class="fas fa-home"></i>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-users"></i>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-book-open"></i>
                            Proyects
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-book-medical"></i>
                            Articles
                        </li>
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
