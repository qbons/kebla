import Carousel from './carousel';
import { connect } from 'frontity';

import Link from '@frontity/components/link';

const Resource = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.resource;
        const Html2React = libraries.html2react.Component;
        const more = req.option.more;

	return (
		<div className="resource">
                        <div className="wrapper">
                                {data.title != '' && <h2>{data.title}</h2>}
                                {data.item.length > 0 &&
                                <Carousel>
                                        {data.item.map((item, index) => {
                                                return(
                                                        <div className="item" key={index}>
                                                                {item.img != '' && <figure className={req.option.lang}><a href={item.slug}><img src={item.img} /></a></figure>}
                                                                <div className="caption">
                                                                        {item.cats.length > 0 &&
                                                                                <a  href={item.cats[0].slug} className="cat" target="_blank">{item.cats[0].name}</a>
                                                                        }
                                                                        <h3><a href={item.url} target="_blank" title={item.title}>{item.title}</a></h3>
                                                                        <div className="txt">
                                                                                <Html2React html={item.exc} />
                                                                        </div>
                                                                        <a href={item.url} className="more" target="_blank">{more}</a>
                                                                </div>
                                                        </div>
                                                )
                                        })}
                                </Carousel>
                                }
                        </div>
                </div>
	);
};

export default connect(Resource);