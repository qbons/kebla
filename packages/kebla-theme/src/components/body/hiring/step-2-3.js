
import { connect } from 'frontity';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Step_2_3 = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.dthank;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="step-3">
                        <div className="timeline">
                                {timeline.step1 != '' &&
                                        <span className="current and-half">
                                                <b>1</b>
                                                <small><em><Html2React html={timeline.step1} /></em></small>
                                        </span>
                                }
                                {timeline.step2 != '' &&
                                        <span className="current and-half">
                                                <b>2</b>
                                                <small><em><Html2React html={timeline.step2} /></em></small>
                                        </span>
                                }
                                {timeline.step3 != '' && 
                                        <span className="current">
                                                <b>3</b>
                                                <small><em><Html2React html={timeline.step3} /></em></small>
                                        </span>
                                }
                        </div>
                        <div className="hentry">
                                {data.img != '' && 
                                        <figure>
                                                <Image src={data.img} width="322" />
                                        </figure>
                                }
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.text.length > 0 && 
                                        <div className="txt">
                                                <p>
                                                        {data.text[0]}
                                                        <b>{state.theme.hiring.demo.date}</b>
                                                        {data.text[1]}
                                                </p>
                                        </div>
                                }
                                {data.button != '' && <Link link={`${req.option.lang == 'en' ? '/' : '/id' }`} className="button btn-hollow">{data.button}</Link>}
                        </div>
                </div>
	);
};

export default connect(Step_2_3);