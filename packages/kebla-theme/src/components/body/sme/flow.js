
import {useState} from 'react';
import { connect } from 'frontity';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Flow = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.flow;
        const Html2React = libraries.html2react.Component;
        const [tab,setTab] = useState('img-0');
	return (
		<div id="solution" className="flow for-desktop">
                        <div className="wrapper">
                                <div className="layer">
                                        {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                        {data.item.length > 0 &&
                                                <div className="list">
                                                        <div className="thumb">
                                                                {data.item.map((item, index) => {
                                                                        return(
                                                                                <figure key={index} className={`img-${index} ${tab == `img-${index}` ? 'active animate__animated animate__fadeIn' : 'notanimated'}`}><Image src={item.img} width="550"/></figure>
                                                                        )
                                                                })}
                                                        </div>
                                                        <div className="accord">
                                                                <div className="wrap">
                                                                        {data.item.map((item, index) => {
                                                                                return(
                                                                                        <div key={index} className={`item ${tab == `img-${index}` ? 'active' : ''}`}  onClick={() => setTab(`img-${index}`)}>
                                                                                                {item.title != '' && <h3><Html2React html={item.title} /></h3>}
                                                                                                {item.text != '' && 
                                                                                                        <div className={`caption ${tab == `img-${index}` ? 'active animate__animated animate__fadeInUp' : 'notanimated'}`}>
                                                                                                                <div className="txt">
                                                                                                                        <Html2React html={item.text} /> 
                                                                                                                </div>
                                                                                                        </div>
                                                                                                }
                                                                                        </div>                
                                                                                )
                                                                        })}
                                                                </div>
                                                                {(data.button != '' && data.url != '') && <Link link={data.url} className="button btn-hollow">{data.button}</Link>}
                                                        </div>
                                                </div>
                                        }
                                </div>
                        </div>
                </div>
	);
};

export default connect(Flow);