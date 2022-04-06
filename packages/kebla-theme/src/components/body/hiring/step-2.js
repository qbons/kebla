
import { connect } from 'frontity';
import {useState, useEffect} from 'react';

import axios from 'axios';

import Link from '@frontity/components/link';

import Step_1_2_Table from './step-1-2-table';
import Dropselect from './dropselect';

const Step_2 = ({ state,actions, libraries }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.price;
        const Html2React = libraries.html2react.Component;
        const [current, setCurrent] = useState('peso');
        const [totalPrice, setTotalPrice] = useState({
                peso:data.basic.durationItem[0].basic_cost_peso,
                idr: data.basic.durationItem[0].basic_cost_idr
        });
        const [monthlyPrice, setMonthlyPrice] = useState({
                peso: data.basic.durationItem[0].monthly_cost_peso,
                idr: data.basic.durationItem[0].monthly_cost_idr
        });
        const [duration, setDuration] = useState(3);
        const [tab,setTab] = useState('basic');
        const [tblExp, setTblExp] = useState(false);
        const [isLoading, setLoading] = useState(false);
        

        function setDefaultValue(type){
                if(type == 'basic'){
                        state.theme.hiring.package = 'basic';
                        state.theme.hiring.jobs = data.basic.job;
                        state.theme.hiring.users = data.basic.user;
                        state.theme.hiring.currency = 'peso';
                }else{
                        state.theme.hiring.package = 'custom';
                        state.theme.hiring.jobs = 3;
                        state.theme.hiring.users = 1;
                        //state.theme.hiring.duration = 1;
                        //setDuration(1);
                        state.theme.hiring.currency = '';
                        state.theme.hiring.total = '';
                        state.theme.hiring.monthly = ''
                }
                
        }

        function submitData(submission){
                state.theme.hiring.duration =  duration;
                const fields = [ 'name', 'position', 'email', 'companyName', 'employee'];
                let valid = true;
                fields.map((v, k) => {
                        if(state.theme.hiring[v] == ''){
                                valid = false;
                        }
                });
                if(valid){
                        const fieldsNumber = [ 'jobs', 'users', 'duration' ];
                        let fieldsValid = true;
                        fieldsNumber.map((v, k) => {
                                if(state.theme.hiring[v] == '' || state.theme.hiring[v] == 0){
                                        fieldsValid = false;
                                }
                                if(v == 'jobs' && state.theme.hiring[v] < 3 ){
                                        fieldsValid = 'min_error';
                                        req.option.lang == 'en' ? alert("The minimum number of jobs is 3.") : alert("Jumlah minimum pekerjaan adalah 3.");
                                        return;
                                }
                        });
                        if(fieldsValid != 'min_error'){
                                if(fieldsValid){
                                        state.theme.hiring.currency = current;
                                        state.theme.hiring.total = totalPrice;
                                        state.theme.hiring.monthly =  monthlyPrice;
                                        if(submission){
                                                setLoading(true);
                                                const url = req.option.lang == 'en' ? '/employers/hiring/order-thank-you' : '/employers/id/hiring/order-thank-you';
                                                axios.post(state.theme.api + 'submit-hiring',  {data: state.theme.hiring, lang: req.option.lang }).then(res => {
                                                        setLoading(false);
                                                        actions.router.set(url)
                                                }); 
                                        }else{
                                                const url = req.option.lang == 'en' ? '/employers/hiring/demo-schedule' : '/employers/id/hiring/demo-schedule';
                                                actions.router.set(url);
                                        }
                                }else{
                                        alert(data.custom.invalid);
                                }
                        }
                }else{
                        alert(data.general.invalid);
                        actions.router.set(req.option.lang == 'en' ? '/employers/hiring' : '/employers/id/hiring')
                }
                
        }

        function updateCurrency(){
                axios.get('https://ipapi.co/json/').then((response) => {
                        let data = response.data;
                        if(data.country_code == 'ID'){
                                setCurrent('rupiah');
                        }
                }).catch((error) => {
                        console.log(error);
                });
        }

        useEffect(() => {
                setDefaultValue('basic');
                updateCurrency();

                actions.analytics.event({
                        name: "pricing_page_visit",
                        payload: {
                                category: "page_view",
                                label: "pricing-page-visit",
                        },
                });
        }, [req])
	return (
		<div className={`step-2-alt step-2 ${isLoading ? 'fetching' : ''}`}>
                        {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/`} className="goback for-mobile">&lt; {data.general.back}</Link>}
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

                        <div className="package">
                                {data.general.title != '' && <h2>{data.general.title}</h2>}
                                <div className="tabby">
                                        <div className="thead">
                                                <a href="#" onClick={(e) => {e.preventDefault();setTab('basic');setDefaultValue('basic');}}  className={`${tab == 'basic' ? 'active' : ''}`}>{data.basic.tab != '' ? data.basic.tab : 'Basic Hiring Package'}</a>
                                                <a href="#" onClick={(e) => {e.preventDefault();setTab('custom');setDefaultValue('custom');}}  className={`${tab != 'basic' ? 'active' : ''}`}>{data.basic.tab != '' ? data.custom.tab : 'Customized Hiring Package'}</a>
                                        </div>
                                        <div id="pbasic" className={`titem ${tab == 'basic' ? 'active' : ''}`}>
                                                <h3>{data.basic.title != '' ? data.basic.title : 'Kalibrr Basic Package'}</h3>
                                                <div className="gap">
                                                        <section>
                                                                <table>
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td><Html2React html={data.field.job}/></td>
                                                                                        <td><strong>{data.basic.job}</strong></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><Html2React html={data.field.user}/></td>
                                                                                        <td><strong>{data.basic.user}</strong></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><Html2React html={data.field.duration}/></td>
                                                                                        <td className="pduration">
                                                                                                <Dropselect option={data.basic.durationItem}  state={state} setTotalPrice={setTotalPrice} setMonthlyPrice={setMonthlyPrice} setDuration={setDuration} />
                                                                                                <b>{data.field.monthText}</b>
                                                                                        </td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>
                                                                <div className="disclaim">
                                                                        <Html2React html={data.basic.finfo[0]}/>
                                                                        <small>&nbsp;<a href="#" id="popfeat-trigger" onClick={(e) =>{e.preventDefault(); actions.theme.togglePopFeat(); }}>{data.basic.finfoList}</a>
                                                                        <Html2React html={data.basic.finfo[1]}/></small>
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
                                                        </section>
                                                        <section>
                                                                <div className="pricing">
                                                                        <div className="plang">
                                                                                <div className="hplang clearfix">
                                                                                        {data.basic.priceTitle != '' && <h3>{data.basic.priceTitle}</h3>}
                                                                                        <div className="hswitch">
                                                                                                <a href="#" className={current == 'peso' ? 'current' : ''} onClick={(e) => {e.preventDefault();setCurrent('peso')}}>₱</a>
                                                                                                <a href="#" className={current == 'rupiah' ? 'current' : ''} onClick={(e) => {e.preventDefault();setCurrent('rupiah')}}>Rp</a>
                                                                                        </div>
                                                                                </div>
                                                                                <strong className={current == 'peso' ? 'current' : ''}>{totalPrice.peso}</strong>
                                                                                <strong className={current == 'rupiah' ? 'current' : ''}>{totalPrice.idr}</strong>
                                                                                <span className={current == 'peso' ? 'current' : ''}>{monthlyPrice.peso}</span>
                                                                                <span className={current == 'rupiah' ? 'current' : ''}>{monthlyPrice.idr}</span>
                                                                        </div>
                                                                        {data.basic.pInfo != '' && 
                                                                                <div className="txt">
                                                                                        <Html2React html={data.basic.pInfo} />
                                                                                </div>
                                                                        }
                                                                </div>
                                                        </section>
                                                </div>
                                        </div>
                                        <div id="pcustom" className={`titem ${tab != 'basic' ? 'active' : ''}`}>
                                                <h3>{data.basic.title != '' ? data.basic.title : 'Kalibrr Customized Package'}</h3>
                                                <div className="gap">
                                                        <section>
                                                                <table>
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td><Html2React html={data.field.job}/></td>
                                                                                        <td className="pduration form-basic">
                                                                                                {/*<Dropselect option={data.custom.job} type={'job'} state={state}/>*/}
                                                                                                <input type="number" min="3" onChange={(e) => {state.theme.hiring.jobs = e.target.value}} value={state.theme.hiring.jobs} />
                                                                                                <b>{data.field.jobLabel}</b>
                                                                                        </td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><Html2React html={data.field.user}/></td>
                                                                                        <td className="pduration form-basic">
                                                                                                {/*<Dropselect option={data.custom.user} type={'user'} state={state}/>*/}
                                                                                                <input type="number" min="1" onChange={(e) => {state.theme.hiring.users = e.target.value}} value={state.theme.hiring.users} />
                                                                                                <b>{data.field.userLabel}</b>
                                                                                        </td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><Html2React html={data.field.duration}/></td>
                                                                                        <td className="pduration">
                                                                                                {/*<Dropselect option={data.custom.duration} type={'duration'} state={state}/>*/}
                                                                                                <Dropselect option={data.basic.durationItem}  state={state} setTotalPrice={setTotalPrice} setMonthlyPrice={setMonthlyPrice} setDuration={setDuration} />
                                                                                                {/*<input type="number" min="1" onChange={(e) => {setDuration(e.target.value)}} value={duration} />*/}
                                                                                                <b>{data.field.monthLabel}</b>
                                                                                        </td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>
                                                                <div className="disclaim">
                                                                        <Html2React html={data.custom.finfo[0]}/>
                                                                        <small>&nbsp;<a href="#" id="popfeat-trigger" onClick={(e) =>{e.preventDefault(); actions.theme.togglePopFeat(); }}>{data.custom.finfoList}</a>
                                                                        <Html2React html={data.custom.finfo[1]}/></small>
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
                                                        </section>
                                                        <section>
                                                                <div className="annon cvr-bg-bf">
                                                                        <Html2React html={data.custom.info} />
                                                                </div>
                                                        </section>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        
                        <div className="action clearfix">
                                {data.general.back != '' && <Link link={`${req.option.lang == 'en' ? '' : '/id' }/hiring/`} className="goback">&lt; {data.general.back}</Link>}
                                <div className="list-btn">
                                        {/*
                                        {data.general.request != '' && <a href="#" className="button btn-hollow" onClick={(e) =>{ e.preventDefault(); submitData(false)}}>{data.general.request}</a>}
                                        {data.general.order != '' && <a href="#" className="button" onClick={(e) =>{e.preventDefault(); submitData(true)}}>{data.general.order}</a>}
                                        */}
                                        {data.general.request != '' && <a href="#" className="button" onClick={(e) =>{ e.preventDefault(); submitData(false)}}>{data.general.request}</a>}
                                </div>
                        </div>
                </div>
	);
};

export default connect(Step_2);