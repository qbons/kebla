
import { connect } from 'frontity';
import {useState, useEffect} from 'react';
import CustomScroll from 'react-custom-scroll';

import axios from 'axios';

import Link from '@frontity/components/link';

import Popcheck from './popcheck';

const Step_1 = ({ state, libraries, actions }) => {
        const req = state.source.get(state.router.link);
        const timeline = req.data.timeline;
        const data = req.data.info;
        const [dropActivated, setDropActivated] = useState(false);
        const [dropOpen, setDropOpen] = useState(false);
        const [dropText, setDropText] = useState(state.theme.hiring.employee != '' ? state.theme.hiring.employee : req.data.info.company.sizePlace);
        const Html2React = libraries.html2react.Component;
        const [agree, setAgree] = useState(false);
        const [isLoading, setLoading] = useState(false);
        const [emailValid, setEmailValid] = useState(true);

        function setDropdownText(text){
                setDropActivated(true);
                setDropOpen(false);
                setDropText(text);
                state.theme.hiring.employee = text;
        }
        useEffect(() => {
                setDropText(state.theme.hiring.employee != '' ? state.theme.hiring.employee : req.data.info.company.sizePlace);
                setDropOpen(false);
                setDropActivated(state.theme.hiring.employee != '' ? true : false);


                getCountryByIp();
        }, [req])

        function validateData(){
                const url = req.option.lang == 'en' ? '/employers/hiring/price/' : '/employers/id/hiring/price/';
                let valid = true;
                const fields = [ 'name', 'position', 'email', 'phone', 'companyName', 'employee' ];
                fields.map((v, k) => {
                        if(v != 'phone'){
                                if(state.theme.hiring[v] == ''){
                                        valid = false;
                                }
                        }else{
                                if(state.theme.hiring.phone.number == ''){
                                        valid = false;
                                }
                        }
                });
                if(valid){
                        let hiringNeeds = state.theme.hiring.needs;
                        hiringNeeds.map((item, index) => {
                                if(item == 'other' && hiringOtherText != ''){
                                        state.theme.hiring.needs.push(hiringOtherText);
                                }
                        });
                        setLoading(true);
                        axios.post(state.theme.api + 'submit-info',  {data: state.theme.hiring, lang: req.option.lang }).then(res => {
                                setLoading(false);
                                if(res.data.status == 'ok'){
                                        actions.analytics.event({
                                                name: "personal_data_sign_up",
                                                payload: {
                                                        category: "form",
                                                        label: "personal-data-sign-up",
                                                },
                                        });
                                        actions.router.set(url)
                                }else{
                                        setEmailValid(false);
                                        alert(res.data.msg);
                                }
                        }); 
                }else{
                        alert(data.form.invalid);
                }
        }
        
        const [phoneOpen, setPhoneOpen] = useState(false);
        const [phoneCountry, setPhoneCountry] = useState(state.theme.hiring.phone);
        const [phoneFetched, setPhoneFetched] = useState(true);
        const [phoneActivated, setPhoneActivated] = useState(false);

        function updatePhoneCountry(item){
                setPhoneCountry(item);
                setPhoneOpen(false);
                state.theme.hiring.phone.prefix = item.prefix;
                state.theme.hiring.phone.code = item.code;
                state.theme.hiring.phone.name = item.name;
        }

        function getCountryByIp(){
                axios.get('https://ipapi.co/json/').then((response) => {
                        let data = response.data;
                        setPhoneCountry({
                                prefix: data.country_calling_code,
                                code: data.country
                        });
                        setPhoneFetched(false);
                        state.theme.hiring.phone.prefix = data.country_calling_code;
                        state.theme.hiring.phone.code = data.country;
                        state.theme.hiring.phone.name = data.country_name;
                }).catch((error) => {
                        console.log(error);
                });
        }

        const [popcheckOpen, setPopcheckOpen] = useState(false);
        const [popcheckContent, setPopcheckContent] = useState({});
        const [hiringOtherText, setHiringOtherText] = useState('');
        

        function updateHiringNeeds(event,label){
                let oldNeeds = state.theme.hiring.needs;
                if(event.target.checked){
                        oldNeeds.push(label);
                }else{
                        oldNeeds = oldNeeds.filter(e => e !== label);
                }
                state.theme.hiring.needs = oldNeeds;
        }

	return (
                <>
                        <div className={`step-1 ${isLoading ? 'fetching' : ''}`}>
                                <div className="timeline">
                                        {timeline.step1 != '' &&
                                                <span className="current">
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
                                <div className="hentry">
                                        {data.intro.title != '' && <h2>{data.intro.title}</h2>}
                                        {data.intro.text != '' && 
                                                <div className="txt">
                                                        <Html2React html={data.intro.text} />
                                                </div>
                                        }
                                </div>
                                
                                <div className="form-basic">
                                        <div className="panel">
                                                {data.basic.title != '' && <h3>{data.basic.title}</h3>}
                                                <div className="gap">
                                                        <div className="col">
                                                                <div className="fgroup">
                                                                        {data.basic.fullname != '' && <label>{data.basic.fullname}</label>}
                                                                        <input type="text" onChange={(e) => {state.theme.hiring.name = e.target.value}} value={state.theme.hiring.name} />
                                                                </div>
                                                                <div className="fgroup">
                                                                        {data.basic.email != '' && <label>{data.basic.email}</label>}
                                                                        <input type="email" onChange={(e) => {state.theme.hiring.email = e.target.value}} value={state.theme.hiring.email} placeholder="Name@company.com" className={`${emailValid != true ? 'invalid' : ''}`} />
                                                                </div>
                                                        </div>
                                                        <div className="col">
                                                                <div className="fgroup">
                                                                        {data.basic.position != '' && <label>{data.basic.position}</label>}
                                                                        <input type="text" onChange={(e) => {state.theme.hiring.position = e.target.value}} value={state.theme.hiring.position} />
                                                                </div>
                                                                <div className="fgroup">
                                                                        {data.basic.phone != '' && <label>{data.basic.phone}</label>}
                                                                        <div className="phone-field clearfix">
                                                                                <div className={`drop ${phoneFetched ? 'fetching' : ''}`}>
                                                                                        <span className={`cvr-bg-af ${phoneOpen ? 'clicked' : ''} `} onClick={() => { setPhoneOpen(!phoneOpen);setPhoneActivated(true)}}>
                                                                                                <img src={`https://countryflagsapi.com/svg/${phoneCountry.code}`} width="36"/>
                                                                                                <b>{phoneCountry.prefix}</b>
                                                                                        </span>
                                                                                        <div className="holder">
                                                                                                <CustomScroll heightRelativeToParent="100px">
                                                                                                        <ul>
                                                                                                                {data.basic.country.map((item, index) => {
                                                                                                                        return(
                                                                                                                                <li key={index} onClick={() => updatePhoneCountry(item)}>
                                                                                                                                        {phoneActivated && <img src={`https://countryflagsapi.com/svg/${item.code}`} width="25" height="17" />}
                                                                                                                                        <b>{item.prefix}</b>
                                                                                                                                </li>
                                                                                                                        )
                                                                                                                })}
                                                                                                        </ul>
                                                                                                </CustomScroll>
                                                                                        </div>
                                                                                </div>
                                                                                <input type="tel" value={state.theme.hiring.phone.number} onChange={(e) => {state.theme.hiring.phone.number = e.target.value}} placeholder={req.option.lang == 'en' ? 'Phone Number' : 'Nomor telepon'} />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        
                                        <div className="panel">
                                                {data.company.title != '' && <h3>{data.company.title}</h3>}
                                                <div className="gap">
                                                        <div className="col">
                                                                <div className="fgroup">
                                                                        {data.company.name != '' && <label>{data.company.name}</label>}
                                                                        <input type="text" onChange={(e) => {state.theme.hiring.companyName = e.target.value}} value={state.theme.hiring.companyName} />
                                                                </div>
                                                        </div>
                                                        <div className="col">
                                                                <div className="fgroup">
                                                                        {data.company.size != '' && <label>{data.company.size}</label>}
                                                                        {data.company.sizeOption.length > 0 &&
                                                                                <div className={`dropselect ${dropOpen ? 'clicked' : ''}  ${dropActivated ? 'activated' : ''}`}>
                                                                                        <strong onClick={() => setDropOpen(!dropOpen)}>{dropText}</strong>
                                                                                        <div className="dropholder">
                                                                                                <ul>
                                                                                                        {data.company.sizeOption.map((item, index) => {
                                                                                                                return(
                                                                                                                        <li key={index} onClick={() => setDropdownText(item)}>{item}</li>
                                                                                                                )
                                                                                                        })}
                                                                                                </ul>
                                                                                        </div>
                                                                                </div>
                                                                        }
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="panel">
                                                {data.hiring.title != '' && <h3>{data.hiring.title}</h3>}
                                                {data.hiring.text != '' && 
                                                        <div className="txt">
                                                                <Html2React html={data.hiring.text} />
                                                        </div>
                                                }
                                                {data.hiring.check.length > 0 &&
                                                        <div className="checklist">
                                                                {data.hiring.check.map((item, index) => {
                                                                        return (
                                                                                <div key={index} className="item">
                                                                                        <label>
                                                                                                <input type="checkbox" onChange={(e) => updateHiringNeeds(e,item.label)} />
                                                                                                <span>
                                                                                                        {item.label}
                                                                                                                {item.info != '' &&
                                                                                                                <i className="cvr-bg" onClick={() => {
                                                                                                                        setPopcheckOpen(true);
                                                                                                                        setPopcheckContent({
                                                                                                                                title: item.label,
                                                                                                                                text: item.info
                                                                                                                        });
                                                                                                                }}></i>
                                                                                                        }
                                                                                                </span>
                                                                                        </label>
                                                                                </div>
                                                                        )
                                                                })}
                                                                <div className="item">
                                                                        <label>
                                                                                <input type="checkbox" onChange={(e) => updateHiringNeeds(e,'other')} />
                                                                                <span>{req.option.lang == 'en' ? 'Others:' : 'Lainnya:'}</span>
                                                                        </label>
                                                                        <input type="text" onChange={(e) => {setHiringOtherText('Others: ' + e.target.value)}}  />
                                                                </div>
                                                        </div>
                                                }
                                        </div>
                                        <div className="action">
                                                {data.form.check != '' &&
                                                        <div className="checks">
                                                                <label><input type="checkbox" name="agree" onChange={() => setAgree(!agree)}  />
                                                                        <span>{data.form.check} {(data.form.policy != '' && data.form.policyUrl != '') && <Link link={data.form.policyUrl}>{data.form.policy}</Link>}</span>
                                                                </label>
                                                        </div>
                                                }
                                                {(agree && data.form.button != '') ? <a href="#" onClick={(e) =>{e.preventDefault();validateData()}} className="button">{data.form.button}</a>
                                                : <span className="button btn-disabled">{data.form.button}</span>}

                                        </div>  
                                </div>
                        </div>
                        { popcheckOpen && <Popcheck libraries={libraries} open={setPopcheckOpen} content={popcheckContent} /> }
                </>
	);
};

export default connect(Step_1);