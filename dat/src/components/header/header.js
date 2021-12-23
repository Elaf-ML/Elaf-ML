import React, { useState, useEffect } from 'react';

import '../header/style.css'
import SVGS from '../header/img/menu.svg'
import { useNavigate} from 'react-router-dom'
import NavPage from '../navigation/nav';


function Header(){
    const navigate = useNavigate();

return(
<form onSubmit={e=>{
e.preventDefault();
}}>
<div className="MAIN">
<div className="header_banner">
<img onClick={()=>{navigate('/NavigationMenu')}} className="menuIcon" src={SVGS}/>
<span className="Text_logo">DAT</span>
<span className="Join">Join</span>
</div>
</div>
</form>
)}



export default Header;