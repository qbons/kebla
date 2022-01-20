
import { connect } from 'frontity';

import StoryCarousel from './story-carousel';

const StoryMobile = ({ state, libraries }) => {        
        const req = state.source.get(state.router.link);
        const data = req.data.content.story;
        const Html2React = libraries.html2react.Component;
	return (
		<div id="story-mobile" className="story-mobile">
                        <div className="wrapper">
                                {data.mtitle != '' && <h2><Html2React html={data.mtitle} /></h2>}
                                {data.item.length > 0 &&
                                        <StoryCarousel>
                                                {data.item.map((item, index) => {
                                                        return(
                                                                <div key={index} className="item">
                                                                        {item.text != '' &&
                                                                                <div className="txt">
                                                                                        <Html2React html={item.text} />
                                                                                </div>
                                                                        }
                                                                        <div className="author">
                                                                                {item.avatar != '' && <figure><img src={item.avatar} width="54" /></figure>}
                                                                                <div className="caption">
                                                                                        {item.name != '' && <h3>{item.name}</h3>}
                                                                                        {item.mocc != '' && <span>{item.mocc}</span>}
                                                                                        {item.logo != '' && <img src={item.logo}  width={item.logoMwidth}/> }
                                                                                </div>
                                                                        </div>
                                                                </div>                
                                                        )
                                                })}
                                        </StoryCarousel>
                                }
                        </div>
                </div>
	);
};

export default connect(StoryMobile);