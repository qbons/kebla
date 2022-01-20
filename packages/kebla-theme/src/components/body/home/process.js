
import { connect } from 'frontity';

import ProcessItem from './process-item';

const Process = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.process;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="process">
                        <div className="wrapper">
                                <div className="hentry">
                                        {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                        {data.text != '' &&
                                                <div className="txt">
                                                        <Html2React html={data.text} /> 
                                                </div>
                                        }
                                </div>
                                
                                {data.item.length > 0 &&
                                        <div className="list">
                                                {data.item.map((item, index) => {
                                                        return(
                                                                <ProcessItem key={index} libraries={libraries} data={item} pos={index}/>
                                                        )
                                                })}
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Process);