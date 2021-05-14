import React, { useState } from 'react';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import Sidebar from './sidebar';
import Wrapper from './wrapper';

const MainLayout = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const [initState, setInitState] = useState(false);
    

    function handleClick() {
        setSidebar(!sidebar);
        setInitState(true);
    }

    return (
        <div className='w-full h-screen'>
            <div onClick={handleClick} className={sidebar ? 'absolute top-0 left-0 w-full h-screen bg-gray-800 opacity-50 z-50 transition duration-300 ease-out' : ''}>
            </div>
            <> 
                { initState ? <Sidebar slideIn={sidebar ? true : false} close={handleClick} /> : null}
            </>
            <Header />
            <Menu toogleSidebar={handleClick} />
            <Wrapper>
                {props.children}
            </Wrapper>
            <Footer />
        </div>
    )
}

export default MainLayout;