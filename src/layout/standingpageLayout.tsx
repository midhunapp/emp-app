import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import styles from './standingpageLayout.module.css';

function StandingpageLayout() {
    return (
        <div className={styles.root}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default StandingpageLayout;
