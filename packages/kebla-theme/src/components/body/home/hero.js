
import { connect } from 'frontity';
import {useState, useEffect} from 'react';

const Hero = ({ state, libraries,actions }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.hero;
        const Html2React = libraries.html2react.Component;
        const [dropActivated, setDropActivated] = useState(false);
        const [dropOpen, setDropOpen] = useState(false);
        const [dropText, setDropText] = useState(data.place);
        const [choosed, setChoosed] = useState(false);

        function setDropdownText(text){
                setDropActivated(true);
                setChoosed(true);
                setDropOpen(false);
                setDropText(text);
        }

        useEffect(() => {
                setDropText(req.data.hero.place);
                setDropOpen(false);
                setDropActivated(false);
        }, [req])

        function goToHiring(){
                if(choosed){
                        actions.analytics.event({
                                name: "click",
                                payload: {
                                        category: "button",
                                        label: "dropdown-hero",
                                },
                        });
                        state.theme.hiring.employee = dropText;
                        actions.router.set('/employers/hiring')
                }
        }

        // ::TEMP:: WORKING ON FORM
	return (
		<div className="hero">
                        {data.bg != '' &&
                                <span 
                                        className="bg cvr-bg" 
                                        style={{
                                                backgroundImage: `url("${data.bg}")`, 
                                                '--mobile': `url("${data.mbg}")`}}
                                        >
                                </span>
                        }
                        <div className="wrapper">
                                <div className="layer">
                                        {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                        {data.text != '' && 
                                                <div className="txt">
                                                        <Html2React html={data.text} />
                                                </div>
                                        }
                                        {data.option.length > 0 &&
                                                <div className="form-basic">
                                                        <form>
                                                                <div className={`dropselect ${dropOpen ? 'clicked' : ''}  ${dropActivated ? 'activated' : ''}`}>
                                                                        <strong onClick={() => setDropOpen(!dropOpen)}>{dropText}</strong>
                                                                        <div className="dropholder">
                                                                                <ul>        
                                                                                        {data.option.map((item, index) => {
                                                                                                return(
                                                                                                        <li key={index} onClick={() => setDropdownText(item)}>{item}</li>
                                                                                                )
                                                                                        })}
                                                                                </ul>
                                                                        </div>
                                                                </div>
                                                                <button type="button" className="button" onClick={goToHiring}>{data.button}</button>
                                                        </form>
                                                </div>
                                        }
                                </div>
                        </div>
                </div>
	);
};

export default connect(Hero);