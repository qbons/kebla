
import {useState} from 'react';
import { connect } from 'frontity';

import Image from "@frontity/components/image";

const Story = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.story;
        const Html2React = libraries.html2react.Component;
        const [tab,setTab] = useState('item-0');
	return (
		<div id="story" className="story for-desktop">
                        <div className="wrapper">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.item.length > 0 &&
                                        <div className="list rowflex">
                                                <div className="person">
                                                        {data.item.map((item, index) => {
                                                                return(
                                                                        <div key={index} className={`item ${tab == `item-${index}` ? 'active' : ''}`}  onClick={() => setTab(`item-${index}`)}>
                                                                                <figure><Image src={item.avatar} width="71" /></figure>
                                                                                <div className="caption">
                                                                                        {item.name != '' && <h3>{item.name}</h3>}
                                                                                        {item.occ != '' && <span><Html2React html={item.occ} /></span> }
                                                                                </div>
                                                                        </div>                
                                                                )
                                                        })}
                                                </div>
                                                <div className="copy">
                                                        {data.item.map((item, index) => {
                                                                return(
                                                                        <div key={index} className={`item ${tab == `item-${index}` ? 'active' : ''}`}>
                                                                                <div className="txt">
                                                                                        <Html2React html={item.text} />
                                                                                        <Image src={item.logo}  width={item.logoWidth} />
                                                                                </div>
                                                                        </div>                
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Story);