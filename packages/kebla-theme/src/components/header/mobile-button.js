import { connect } from "frontity";

import Link from '@frontity/components/link';

const MobileButton = ({state, actions}) => {
        const req = state.source.get(state.router.link);
        const lang = req.option.lang;
        const menu = req.option.menu;
        return(
                <div className="for-mobile">
                         {menu.main.length > 0 &&
                                <>
                                        {menu.main.map((item, index) => {
                                                let hiring = false;
                                                if(item.classes.length > 0){
                                                        item.classes.map((cls,idx) => {
                                                                if(cls == 'btn-menu'){
                                                                        hiring = true;
                                                                }
                                                        });
                                                }
                                                return (
                                                        hiring ? <Link key={index}  className="button"  link={item.slug}  onClick={(e) =>{ state.theme.isMobileMenuOpen ? actions.theme.toggleMobileMenu() : '' }}>{item.title}</Link> : ''
                                                )
                                        })}
                                </>
                        }
                        <div className="mobile-trigger"><a href="#" className="menu-mobile" onClick={(e) =>{e.preventDefault(); actions.theme.toggleMobileMenu(); }}><span className="menu-bar"><b></b></span></a></div>
                </div>
        )
}

export default connect(MobileButton);