import React from 'react';
import Nav from './Nav'
import { Split } from '../../styles/layout'




const Layout = ({children}) => {
    return ( 
        
        <Split fraction="1/5">
           <aside style={{position: 'sticky', top: 0, background: '#888888', height: '100vh'}}>
        <Nav />
     </aside>
        <div style={{background: '#f5f5f5'}}>{children}</div>
        </Split>
        
     );
}
 
export default Layout;