import useInView from "@frontity/hooks/use-in-view";

import { connect } from 'frontity';

import Image from "@frontity/components/image";

const Advan = ({ state, libraries  }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.content.advan;
        const Html2React = libraries.html2react.Component;
        const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "0px" });
	return (
		<div id="solution" className="advan">
                        <div className="wrapper">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.item.length > 0 &&
                                        <div className="rowflex">
                                                {data.item.map((item, index) => {
                                                        const delay = `animate__delay-${index}s`;
                                                        return(
                                                                <div className={`item ${inView ? 'animate__animated animate__fadeInUp ' + delay : 'notanimated'}`} key={index}>
                                                                        {item.icon != '' && <figure><Image src={item.icon} /></figure>}
                                                                        <div className="caption" ref={ref}>
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
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Advan);