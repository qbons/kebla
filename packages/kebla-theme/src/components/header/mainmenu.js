import { connect } from "frontity";

import Link from '@frontity/components/link';
import Toggle from "./toggle";

const Mainmenu = ({state, actions, libraries}) => {
        const req = state.source.get(state.router.link);
        const lang = req.option.lang;
        const menu = req.option.menu;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="mainmenu">
                        {menu.main.length > 0 &&
                                <ul>
                                        {menu.main.map((item, index) => {
                                                let classes = req[item.marker] ? 'current-menu-item ' : '';
                                                if(item.classes.length > 0){
                                                        item.classes.map((cls,idx) => {
                                                                classes +=  cls + ' ';
                                                        });
                                                }
                                                return (
                                                        <li key={index} className={classes}>
                                                                <Link link={item.slug}  onClick={(e) =>{ actions.theme.toggleMobileMenu(); }}><Html2React html={item.title} /></Link>
                                                                {item.child.length > 0 &&
                                                                        <>
                                                                                <Toggle/>
                                                                                <ul>
                                                                                        {item.child.map((itemChild, indexChild) => {
                                                                                                let classChild = '';
                                                                                                let isAnchor = false;
                                                                                                if(itemChild.classes.length > 0){
                                                                                                        itemChild.classes.map((childCls,childIdx) => {
                                                                                                                classChild +=  childCls + ' ';
                                                                                                                if(childCls == 'scroll'){
                                                                                                                        isAnchor = true;
                                                                                                                }
                                                                                                        });
                                                                                                }
                                                                                                return(
                                                                                                        <li key={indexChild} className={classChild}>
                                                                                                                {!isAnchor 
                                                                                                                        ? <Link link={itemChild.slug}  onClick={(e) =>{ actions.theme.toggleMobileMenu(); }}><Html2React html={itemChild.title} /></Link>
                                                                                                                        : <a href={itemChild.slug}  onClick={(e) =>{ actions.theme.toggleMobileMenu(); }}><Html2React html={itemChild.title} /></a>
                                                                                                                }
                                                                                                        </li>
                                                                                                )
                                                                                        })}
                                                                                </ul>
                                                                        </>
                                                                }
                                                        </li>
                                                )
                                        })}
                                        <li className="lang menu-item-has-children">
                                                <a href="#" className="cvr-bg" onClick={((e) => e.preventDefault())}></a>
                                                <Toggle/>
                                                <ul>
                                                        {lang == 'en' 
                                                                ? 
                                                                <>
                                                                        <li><span>EN</span></li>        
                                                                        <li><Link link={req.option.alt} onClick={(e) => {actions.theme.resetHiring()}}>ID</Link></li>
                                                                </>
                                                                : 
                                                                <>
                                                                        <li><Link link={req.option.alt} onClick={(e) => {actions.theme.resetHiring()}}>EN</Link></li>
                                                                        <li><span>ID</span></li>        
                                                                </>
                                                        }
                                                        
                                                </ul>
                                        </li>
                                </ul>
                        }
                </div>
        )
}

export default connect(Mainmenu);