
import { connect } from 'frontity';

import Image from "@frontity/components/image";

const Company = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.client;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="company">
                        <div className="wrapper rowflex">
                                {data.title != '' && 
                                        <div className="copy">
                                                <div className="txt">
                                                        <Html2React html={data.title} />
                                                </div>
                                        </div>
                                }
                                {data.logo.length > 0 &&
                                        <div className="thumb">
                                                {data.logo.map((item, index) => {
                                                        return(
                                                                <figure key={index}><Image key={index} src={item}  /></figure>
                                                        )
                                                })}
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Company);