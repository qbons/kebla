
import { connect } from 'frontity';
import {useState, useEffect} from 'react';

import axios from 'axios';

import Link from '@frontity/components/link';

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
        }, [req])

        function validateData(){
                const url = req.option.lang == 'en' ? '/hiring/price/' : '/id/hiring/price/';
                let valid = true;
                const fields = [ 'name', 'position', 'email', 'companyName', 'employee' ];
                fields.map((v, k) => {
                        if(state.theme.hiring[v] == ''){
                                valid = false;
                        }
                });
                if(valid){
                        setLoading(true);
                        axios.post(state.theme.api + 'submit-info',  {data: state.theme.hiring, lang: req.option.lang }).then(res => {
                                setLoading(false);
                                if(res.data.status == 'ok'){
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

	return (
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
	);
};

export default connect(Step_1);