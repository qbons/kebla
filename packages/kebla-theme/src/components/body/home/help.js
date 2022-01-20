
import { connect } from 'frontity';

import Link from '@frontity/components/link';

const Help = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.help;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="help">
                        <div className="wrapper">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.item.length > 0 &&
                                        <div className="list">
                                                {data.item.map((item, index) => {
                                                        return(
                                                                <div className="item" key={index}>
                                                                        <Link link={item.url}>
                                                                                {item.bg != '' && <span className="bg cvr-bg" style={{backgroundImage: `url("${item.bg}")`}}></span>}
                                                                                <div className="caption">
                                                                                        {item.title != '' && <h3><Html2React html={item.title} /></h3>}
                                                                                        {item.subtitle != '' && <p>{item.subtitle}</p>}
                                                                                </div>
                                                                                <span className="more">{item.more}</span>
                                                                        </Link>
                                                                </div>                
                                                        )
                                                })}
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Help);