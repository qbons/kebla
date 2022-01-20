
import { connect } from 'frontity';
import Link from '@frontity/components/link';

const Hero = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.hero;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="hero">
                        {data.bg != '' &&
                                <span 
                                        className="bg cvr-bg" 
                                        style={{
                                                backgroundImage: `url("${data.bg}")`, 
                                                '--mobile': `url("${data.mbg}")`}}
                                        >
                                </span>
                        }
                        <div className="wrapper">
                                <div className="holder">
                                        {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                        {data.text != '' && 
                                                <div className="txt">
                                                        <Html2React html={data.text} />
                                                </div>
                                        }
                                        {(data.button != '' && data.utl != '') && <Link link={data.url} className="button btn-white">{data.button}</Link>}
                                </div>
                        </div>
                </div>
	);
};

export default connect(Hero);