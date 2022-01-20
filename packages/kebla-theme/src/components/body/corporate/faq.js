import {useState} from 'react';
import { connect } from 'frontity';

const Faq = ({ state, libraries }) => {
        const [active, setActive] = useState('none');
        const req = state.source.get(state.router.link);
        const data = req.data.content.faq;
        const Html2React = libraries.html2react.Component;
	return (
		<div id="faq" className="faq">
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
                                                        return (
                                                                <div className={`accord-item ${active == index ? 'active expanded' : '' }`} key={index} onClick={() => setActive(index)}>
                                                                        <div className="acc-head"><h3>{item.title}</h3></div>
                                                                        <div className="acc-body">
                                                                                <div className="format-text">
                                                                                        <Html2React html={item.text} />
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Faq);