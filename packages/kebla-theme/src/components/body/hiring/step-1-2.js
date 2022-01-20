
import { connect } from 'frontity';
import {useState} from 'react';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import Step_1_2_Table from './step-1-2-table';

const Step_1_2 = ({ state, actions, libraries }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.needs;
        const Html2React = libraries.html2react.Component;
        const [tblExp, setTblExp] = useState(false);
	return (
                <div className="step-1-2">
                        {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring`} className="goback for-mobile">&lt; {data.general.back}</Link>}
                        <div className="timeline">
                                {timeline.step1 != '' &&
                                        <span className="current and-half">
                                                <b>1</b>
                                                <small><em><Html2React html={timeline.step1} /></em></small>
                                        </span>
                                }
                                {timeline.step2 != '' &&
                                        <span>
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
                        <div className="rowflex">
                                {data.general.img != '' && <figure><Image src={data.general.img} /></figure>}
                                <div className="caption">
                                        {data.general.text != '' &&
                                                <div className="txt">
                                                        <Html2React html={data.general.text} />
                                                </div>
                                        }
                                        {data.general.title != '' && <h2>{data.general.title}</h2>}
                                        <div className="form-basic">
                                                <div className="item">
                                                        {data.field.jobText != '' && <Html2React html={data.field.jobText} /> }
                                                        <div className="fgroup">
                                                                <input type="number" max="15" min="1" step="1" />
                                                                {data.field.jobLabel != '' && <label>{data.field.jobLabel}</label>}
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        {data.field.userText != '' && <Html2React html={data.field.userText} /> }
                                                        <div className="fgroup">
                                                                <input type="number" max="20" min="1" step="1" />
                                                                {data.field.userLabel != '' && <label>{data.field.userLabel}</label>}
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        {data.field.monthText != '' && <Html2React html={data.field.monthText} /> }
                                                        <div className="fgroup">
                                                                <input type="number" max="12" min="1" step="1" />
                                                                {data.field.monthLabel != '' && <label>{data.field.monthLabel}</label>}
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        <div className="checks">
                                                                <label><input type="checkbox" name="agree"  />
                                                                        <span>
                                                                                <Html2React html={data.field.checkPart[0]} />
                                                                                <small>&nbsp;<a href="#" id="popfeat-trigger" onClick={(e) =>{e.preventDefault(); actions.theme.togglePopFeat(); }}>{data.field.checkList}</a>
                                                                                <Html2React html={data.field.checkPart[1]} /></small>
                                                                        </span>
                                                                </label>
                                                        </div>
                                                </div>
                                        </div>
                                        {data.general.back != '' &&  <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring`} className="goback">&lt; {data.general.back}</Link>}
                                </div>
                        </div>
                        <div className={`tbl-feat for-mobile ${tblExp ? 'expanded' : ''}`}>
                                <div className="tbl-wrap">
                                       <Step_1_2_Table />
                                </div>
                                <div className="expand-tbl">
                                        {data.feat.show != '' && <a href="#" className="cvr-bg-af feat-show" onClick={(e) => {e.preventDefault();setTblExp(true)}}>{data.feat.show}</a>}
                                        {data.feat.hide != '' && <a href="#" className="cvr-bg-af feat-hide" onClick={(e) => {e.preventDefault();setTblExp(false)}}>{data.feat.hide}</a>}
                                </div>
                        </div>
                        <div className="action">
                                {data.form.button != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/price`} className="button">{data.form.button}</Link>}
                                <div className="copy">
                                        {data.form.info !='' && <p>{data.form.info} {data.form.request != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/demo-schedule`}>{data.form.request}</Link>}.</p>}
                                </div>
                        </div>
                </div>
	);
};

export default connect(Step_1_2);