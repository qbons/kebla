
import { connect } from 'frontity';

const Page = ({ state, libraries}) => {
        const req = state.source.get(state.router.link);
        const Html2React = libraries.html2react.Component;
        const data = req.data;
	return (
                <div className="inner-page">
                        <div className="wrapper">
                                {data.title != '' && <h1>{data.title}</h1>}
                                {data.text != '' && 
                                        <div className="format-text">
                                                <Html2React html={data.content} />
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Page);