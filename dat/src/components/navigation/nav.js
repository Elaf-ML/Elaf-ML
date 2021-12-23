import React from "react";
import '../navigation/navstyle.css'
import Exit from '../header/img/exit4.svg'
function NavPage() {
  return <>
<div className="Header_Navigation">
<img className="Exit" src={Exit}></img>
<span className="Text_logo">DAT</span>
</div>
  
  </>;
}

export default NavPage;
