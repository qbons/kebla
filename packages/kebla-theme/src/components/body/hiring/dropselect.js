
import {useState} from 'react';


const Dropselect = (props) => {
        const options = props.option;
        const [dropActivated, setDropActivated] = useState(true);
        const [dropOpen, setDropOpen] = useState(false);
        const [dropText, setDropText] = useState(options.length > 0 ? options[0].title : 3);
        const state = props.state;
        const setTotalPrice = props.setTotalPrice;
        const setMonthlyPrice = props.setMonthlyPrice;
        const setDuration = props.setDuration;

        function setDropdownText(value){
                setDropActivated(true);
                setDropOpen(false);
                setDropText(value.title);
                setTotalPrice({
                        peso: value.basic_cost_peso,
                        idr: value.basic_cost_idr
                });
                setMonthlyPrice({
                        peso: value.monthly_cost_peso,
                        idr: value.monthly_cost_idr
                });
                setDuration(value.title);
        }
	return (
                <>
                        {options.length > 0 &&
                                <div className={`dropselect ${dropOpen ? 'clicked' : ''}  ${dropActivated ? 'activated' : ''}`}>
                                        <strong onClick={() => setDropOpen(!dropOpen)}>{dropText}</strong>
                                        <div className="dropholder">
                                                <ul>
                                                        {options.map((v, k) => {
                                                                return(
                                                                        <li key={k} onClick={() => setDropdownText(v)}>{v.title}</li>
                                                                )
                                                        })}
                                                </ul>
                                        </div>
                                </div>
                        }
                </>
	);
};

export default Dropselect