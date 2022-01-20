
import { connect } from 'frontity';

const Feat = ({ state , libraries}) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.feat;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="feat">
                        <div className="wrapper rowflex">
                                {data.title != '' &&
                                        <div className="copy">
                                                <div className="txt">
                                                        <Html2React html={data.title} />
                                                </div>
                                        </div>
                                }
                                {data.list != '' && 
                                        <div className="list">
                                                <Html2React html={data.list} />
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Feat);