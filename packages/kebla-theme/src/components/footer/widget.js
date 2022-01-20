
import { connect } from 'frontity';
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

import Toggle from './toggle';

const Widget = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const menu = req.option.menu;
	return (
		<div className="footer-widget">
                        <div className="rowflex">
                                <div className="info">
                                        {req.option.logoIcon != '' && <Image src={req.option.logoIcon}  className="for-mobile" /> }
                                        {req.option.tagline != '' &&
                                                <div className="txt">
                                                        <p>{req.option.tagline}</p>
                                                </div>
                                        }
                                </div>
                                <div className="holder">
                                        {menu.candidate.length > 0 &&
                                                <div className="widget">
                                                        <Toggle>{menu.candidateTitle}</Toggle>
                                                        <ul>
                                                                {menu.candidate.map((item, index) => {
                                                                        return(
                                                                                <li key={index}>
                                                                                        <Link link={item.slug}>{item.title}</Link>
                                                                                </li>        
                                                                        )
                                                                })}
                                                        </ul>
                                                </div>
                                        }
                                        {menu.employer.length > 0 &&
                                                <div className="widget">
                                                        <Toggle>{menu.employerTitle}</Toggle>
                                                        <ul>
                                                                {menu.employer.map((item, index) => {
                                                                        return(
                                                                                <li key={index}>
                                                                                        <Link link={item.slug}>{item.title}</Link>
                                                                                </li>        
                                                                        )
                                                                })}
                                                        </ul>
                                                </div>
                                        }
                                        {menu.about.length > 0 &&
                                                <div className="widget">
                                                        <Toggle>{menu.aboutTitle}</Toggle>
                                                        <ul>
                                                                {menu.about.map((item, index) => {
                                                                        return(
                                                                                <li key={index}>
                                                                                        <Link link={item.slug}>{item.title}</Link>
                                                                                </li>        
                                                                        )
                                                                })}
                                                        </ul>
                                                </div>
                                        }
                                </div>
                        </div>
                </div>
	);
};

export default connect(Widget);