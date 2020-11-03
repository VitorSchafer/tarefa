import React from 'react'
import Menu from '../Menu/index'
import '../Header/header.css'
import Barra from '../Barra'
import Primeiro from '../../Primeiro'
import Segunda from '../../Segunda'
import Mais from '../../Mais'
import Opcoes from '../Opcoes'

function Header(){
    return (
        <div className="container">
            <Menu />
            <Barra />
            <Primeiro />
            <Segunda />
            <Mais />
            <Opcoes />
        </div>
    );
}
export default Header;