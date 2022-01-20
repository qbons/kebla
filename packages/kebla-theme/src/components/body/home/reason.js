import useInView from "@frontity/hooks/use-in-view";

import { connect } from 'frontity';

import Image from "@frontity/components/image";

const Reason = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.reason;
        const Html2React = libraries.html2react.Component;
        const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "0px" });
	return (
		<div className="reason">
                        <div className="wrapper">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.item.length > 0 && 
                                        <div className="holder">
                                                <div className="rowflex" ref={ref}>
                                                        {data.item.map((item, index) => {
                                                                const delay = `animate__delay-${index}s`;
                                                                return (
                                                                        <div className={`item ${inView ? 'animate__animated animate__fadeInUp ' + delay : 'notanimated'}`} key={index}>
                                                                                {item.icon != '' && <figure><Image src={item.icon} /></figure>}
                                                                                {item.title != '' && <h3>{item.title}</h3> }
                                                                                {item.text != '' &&
                                                                                        <div className="txt">
                                                                                                <Html2React html={item.text} />
                                                                                        </div>
                                                                                }
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

export default connect(Reason);