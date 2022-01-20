
import { connect } from 'frontity';
import Link from '@frontity/components/link';
const Tribute = ({ state }) => {
        const req = state.source.get(state.router.link);
        const menu = req.option.menu;
	return (
		<div className="tribute rowflex">
                        <p>{req.option.copy}</p>
                        {menu.footer.length > 0 &&
                                <ul>
                                        {menu.footer.map((item, index) => {
                                                return(
                                                        <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                )
                                        })}
                                </ul>
                        }
                </div>
	);
};

export default connect(Tribute);