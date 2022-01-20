import {useState, useEffect} from 'react';
import { connect } from "frontity";

import Logo from './logo';
import MobileButton from './mobile-button';
import Mainmenu from './mainmenu';

const Header = ({state}) => {
        const req = state.source.get(state.router.link);
        const [scroll, setScroll] = useState(false);
        useEffect(() => {
                window.addEventListener("scroll", () => {
                        setScroll(window.scrollY > 1);
                });
                return () => {  setScroll(false) };
        }, [req]);

        return(
                <header id="top" className={scroll ? "is-sticky" : ""}>
                        <div className="wrapper clearfix">
                                <Logo />
                                <MobileButton />
                                <Mainmenu />
                        </div>
                </header>
        )
}

export default connect(Header);