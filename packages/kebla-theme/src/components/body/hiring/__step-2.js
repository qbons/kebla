
import { connect } from 'frontity';
import {useState} from 'react';

import Link from '@frontity/components/link';

const Step_2 = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.price;
        const Html2React = libraries.html2react.Component;
        const [current, setCurrent] = useState('peso');
	return (
		<div className="step-2">
                        {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/needs`} className="goback for-mobile">&lt; {data.general.back}</Link>}
                        <div className="timeline">
                                {timeline.step1 != '' &&
                                        <span className="current and-half">
                                                <b>1</b>
                                                <small><em><Html2React html={timeline.step1} /></em></small>
                                        </span>
                                }
                                {timeline.step2 != '' &&
                                        <span className="current">
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
                        <div className="panel">
                                <div className="rowflex">
                                        <div className="info">
                                                {data.general.title != '' && <h2>{data.general.title}</h2>}
                                                <table>
                                                        <tbody>
                                                                <tr>
                                                                        <td>{data.field.job != '' && <Html2React html={data.field.job} />}</td>
                                                                        <td><strong>5 {data.field.jobLabel}</strong></td>
                                                                </tr>
                                                                <tr>
                                                                        <td>{data.field.user != '' && <Html2React html={data.field.user} />}</td>
                                                                        <td><strong>2 {data.field.userLabel}</strong></td>
                                                                </tr>
                                                                <tr>
                                                                        <td>{data.field.duration != '' && <Html2React html={data.field.duration} />}</td>
                                                                        <td><strong>6 {data.field.monthLabel}</strong></td>
                                                                </tr>
                                                                <tr>
                                                                        <td>{data.field.premium != '' && <Html2React html={data.field.premium} />}</td>
                                                                        <td><strong>Yes</strong></td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                        <div className="pricing">
                                                <div className="plang">
                                                        <div className="hplang clearfix">
                                                                {data.field.estimate != '' && <h3>{data.field.estimate}</h3>}
                                                                <div className="hswitch">
                                                                        <a href="#" className={current == 'peso' ? 'current' : ''} onClick={(e) => {e.preventDefault();setCurrent('peso')}}>₱</a>
                                                                        <a href="#" className={current == 'rupiah' ? 'current' : ''} onClick={(e) => {e.preventDefault();setCurrent('rupiah')}}>Rp</a>
                                                                </div>
                                                        </div>
                                                        <strong className={current == 'peso' ? 'current' : ''}>₱ 20,000.00</strong>
                                                        <strong className={current == 'rupiah' ? 'current' : ''}>Rp 200.000</strong>
                                                </div>
                                                {data.field.info != '' && 
                                                        <div className="txt">
                                                                <Html2React html={data.field.info} />
                                                        </div>
                                                }
                                        </div>
                                </div>
                        </div>
                        
                        <div className="action clearfix">
                                {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/needs`} className="goback">&lt; {data.general.back}</Link>}
                                <div className="list-btn">
                                        {data.general.request != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/demo-schedule`} className="button btn-hollow">{data.general.request}</Link>}
                                        {data.general.order != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/order-thank-you`} className="button">{data.general.order}</Link>}
                                </div>
                        </div>
                </div>
	);
};

export default connect(Step_2);