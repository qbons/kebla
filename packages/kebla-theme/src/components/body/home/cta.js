
import { connect } from 'frontity';

import Link from '@frontity/components/link';

const CTA = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.cta;
        const Html2React = libraries.html2react.Component;
        
	return (
		<div className="cta">
                        {data.bg != '' && 
                                <span 
                                        className="bg cvr-bg" 
                                        style={{
                                                backgroundImage: `url("${data.bg}")`, 
                                                '--mobile': `url("${data.mbg}")`}}>
                                        </span>
                        }
                        <div className="wrapper clearfix">
                                <div className="holder">
                                        {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                        {(data.button != '' && data.url != '') &&<Link link={data.url} className="button btn-hollow-white">{data.button}</Link>}
                                </div>
                        </div>
                </div>
	);
};

export default connect(CTA);