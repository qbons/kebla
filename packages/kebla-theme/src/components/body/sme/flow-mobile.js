
import { connect } from 'frontity';

import FlowCarousel from './flow-carousel';

const FlowMobile = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.flow;
        const Html2React = libraries.html2react.Component;
	return (
		<div id="solution-mobile" className="flow-mobile">
                        <div className="wrapper">
                                {data.mtitle != '' && <h2><Html2React html={data.mtitle} /></h2>}
                                {data.item.length > 0 &&
                                        <FlowCarousel>
                                                {data.item.map((item, index) => {
                                                        return(
                                                                <div key={index} className="item">
                                                                        <figure><img src={item.mimg} /></figure>
                                                                        <div className="caption">
                                                                                {item.title != '' && <h3><Html2React html={item.title} /></h3>}
                                                                                {item.text != '' && 
                                                                                        <div className="txt">
                                                                                                <Html2React html={item.text} /> 
                                                                                        </div>
                                                                                }
                                                                        </div>
                                                                </div>                
                                                        )
                                                })}
                                        </FlowCarousel>
                                }
                        </div>
                </div>
	);
};

export default connect(FlowMobile);