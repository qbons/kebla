
import useInView from "@frontity/hooks/use-in-view";

import Image from "@frontity/components/image";

const ProcessItem = (props) => {
        const item = props.data;
        const Html2React = props.libraries.html2react.Component;
        const key =  props.pos;
        const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "0px" });
        const classes = ((key % 2) == 0 ) ? 'animate__animated animate__fadeInLeft animate__delay-1s' : 'animate__animated animate__fadeInRight animate__delay-1s';
	return (
		<div className="item" >
                        {item.icon != '' && <figure><Image src={item.icon} /></figure>}
                        <div className='caption'>
                                {item.title != '' && <h3  className={`${inView ? classes : 'notanimated'}`}><Html2React html={item.title} /></h3>}
                                {item.text != '' && 
                                        <div className={`txt ${inView ? classes : 'notanimated'}`}  ref={ref}>
                                                <Html2React html={item.text} />
                                        </div>
                                }
                        </div>
                </div>                
	);
};

export default ProcessItem;