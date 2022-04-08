
import { connect } from 'frontity';
import React, { useState, useEffect } from "react";
import { InlineWidget, CalendlyEventListener } from "react-calendly";

import axios from 'axios';

import Link from '@frontity/components/link';

import "react-datepicker/dist/react-datepicker.css";

const Step_2_2 = ({ state, actions, libraries }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.demo;
        const Html2React = libraries.html2react.Component;
        const [isLoading, setLoading] = useState(false);
        const [calendlyLink, setCalendyLink] = useState('nope');
        const [calendlyToken, setCalendyToken] = useState('nope');
        
        function onEventScheduled(props){
                setLoading(true);
                const uri = props.data.payload.event.uri;
                axios.get(uri,  { headers: {"Authorization" : `Bearer ${calendlyToken}`} } ).then(res => {
                        const payload = {
                                start: res.data.resource.start_time,
                                end: res.data.resource.end_time
                        };
                        state.theme.hiring.demo = payload;
                        axios.post(state.theme.api + 'submit-demo',  {data: state.theme.hiring, lang: req.option.lang }).then(res => {
                                state.theme.hiring.demo.date = res.data;
                                const urlThank = req.option.lang == 'en' ? '/employers/hiring/thank-you-demo' : '/employers/id/hiring/thank-you-demo' ;
                                actions.router.set(urlThank)
                        }); 
                });        
        }


        useEffect(() => {
                axios.get('https://ipapi.co/json/').then((response) => {
                        let resp = response.data;
                        setCalendyLink(resp.country == 'ID'  ? data.general.link_id : data.general.link_ph);
                        setCalendyToken(resp.country == 'ID'  ? data.general.token_id : data.general.token_ph);
                }).catch((error) => {
                        console.log(error);
                });
        }, [req])

	return (
		<div className={`step-2-2 ${isLoading ? 'fetching' : ''}`}>
                        {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/price`} className="goback for-mobile">&lt; {data.general.back}</Link>}
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
                                        <span>
                                                <b>3</b>
                                                <small><em><Html2React html={timeline.step3} /></em></small>
                                        </span>
                                }
                        </div>
                        <div className="hentry">
                                {data.general.title != '' && <h2>{data.general.title}</h2>}
                                {data.general.text != '' && 
                                        <div className="txt">
                                                <Html2React html={data.general.text} />
                                        </div>
                                }
                        </div>
                        {calendlyLink != 'nope' && 
                                <>
                                        <InlineWidget 
                                                url={calendlyLink}
                                                styles={{
                                                        height: '700px'
                                                }}
                                                pageSettings={{
                                                        
                                                }}
                                                prefill={{
                                                        email: state.theme.hiring.email,
                                                        name: state.theme.hiring.name,
                                                        customAnswers: {
                                                                a1: state.theme.hiring.position,
                                                                a2: state.theme.hiring.companyName,
                                                                a3: state.theme.hiring.employee
                                                        },
                                                }}
                                        />
                                        <CalendlyEventListener onEventScheduled={onEventScheduled} />
                                </>
                        }
                        <div className="action clearfix">
                                {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/price`} className="goback">&lt; {data.general.back}</Link>}
                                {(false && data.general.button != '') && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/thank-you-demo`} className="button">{data.general.button}</Link>}
                        </div>
                </div>
	);
};

export default connect(Step_2_2);