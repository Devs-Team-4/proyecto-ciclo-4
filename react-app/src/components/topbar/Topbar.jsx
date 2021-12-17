 import React from 'react'
 import './topbar.css'
 

 export default function  Topbar() {
     return (
         <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Developers_MisionTic</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <i class="far fa-bell"></i> 
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <i class="fas fa-globe"></i>
                    </div>
                    <div className="topbarIconContainer">
                        <i class="fas fa-cog"></i>
                    </div>
                    <img src="https://images.pexels.com/photos/6964471/pexels-photo-6964471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="topAvatar" />
                </div>
            </div>
         </div>
     )
 }
 