import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cal'>Calculator</Link></li>
        </ul>
    );
}

export default Nav;