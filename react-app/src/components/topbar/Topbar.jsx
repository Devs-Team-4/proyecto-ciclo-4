 import React from 'react'
 import { Link } from 'react-router-dom'
 import './topbar.css'
 

 export default function  Topbar() {

    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }

     return (
         <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className="link">
                        <span className="logo">Web Developers</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div onClick={menuToggle}>
                        <img src="https://images.pexels.com/photos/6964471/pexels-photo-6964471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        className="topAvatar" 
                        />
                    </div>
                    <div className="action">
                        <div className="menu">
                            <h3>Tuba Buyukustun<br/><span>Administrador del Sistema</span></h3>
                            <hr className="separador" />
                            <ul>
                                <li className="">
                                    <i class="fas fa-user-circle"></i>
                                    Mi Perfil
                                </li>
                                <li className="">
                                    <i class="fas fa-user-edit"></i>
                                    Editar Perfil
                                </li>
                                <li className="">
                                    <i class="fas fa-cogs"></i>
                                    Configuraciones
                                </li>
                                <li className="">
                                    <i class="fas fa-info-circle"></i>
                                    Ayuda
                                </li>
                                <li className="">
                                    <i class="fas fa-sign-out-alt"></i>
                                    Salir
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>
     )
 }
 