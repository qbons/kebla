
import { connect } from 'frontity';

import Link from '@frontity/components/link';

const Request = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.request;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="request">
                        <div className="wrapper">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.text != '' && 
                                        <div className="txt">
                                                <Html2React html={data.text} />
                                        </div>
                                }
                                {(data.button != '' && data.url != '') &&<Link link={data.url} className="button btn-white">{data.button}</Link>}
                        </div>
                </div>
	);
};

export default connect(Request);