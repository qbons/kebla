
import { connect } from 'frontity';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import "react-datepicker/dist/react-datepicker.css";

const Step_2_2 = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.demo;
        const Html2React = libraries.html2react.Component;
        const [startDate, setStartDate] = useState(new Date());
        const renderDayContents = (day, date) => {
                return <span>{date.getDate()}</span>;
        };
        const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
        ];
        const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
        ];
        const [currentDay, setCurrentDay] = useState(days[startDate.getDay()] + ', ' + startDate.getDate() +' '+ months[startDate.getMonth()] + ' ' + startDate.getUTCFullYear());

        function changeDate(date){
                setStartDate(date);
                setCurrentDay(days[date.getDay()] + ', ' + date.getDate() +' '+ months[date.getMonth()] + ' ' + date.getUTCFullYear());
        }
	return (
		<div className="step-2-2">
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
                        <div className="rowflex">
                                <div className="person">
                                        {data.member.ava != '' && <figure><Image src={data.member.ava} width="56" /></figure>}
                                        {data.member.name != '' && <small>{data.member.name}</small>}
                                        {data.member.demo != '' && <h3>{data.member.demo}</h3>}
                                        {data.member.duration != '' && <span className="cvr-bg-bf iclock">{data.member.duration}</span>}
                                        {data.member.info != '' && 
                                                <div className="txt">
                                                        <Html2React html={data.member.info} />
                                                </div>
                                        }
                                </div>
                                <div className="timing">
                                        <h2 className="clearfix"><b>{data.general.date} </b><b>{currentDay}</b></h2>
                                        <div className="dated">
                                                <div className="cal">
                                                        <DatePicker 
                                                                selected={startDate} 
                                                                onChange={(date) => changeDate(date)} 
                                                                renderDayContents={renderDayContents}
                                                                inline
                                                                showTimeSelect
                                                         />
                                                </div>
 
                                        </div>
                                </div>
                        </div>
                        <div className="action clearfix">
                                {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/price`} className="goback">&lt; {data.general.back}</Link>}
                                {data.general.button != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/thank-you-demo`} className="button">{data.general.button}</Link>}
                        </div>
                </div>
	);
};

export default connect(Step_2_2);