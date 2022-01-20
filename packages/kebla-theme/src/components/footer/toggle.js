import {useState} from 'react';

const Toggle = (props) => {
        const [active, setActive] = useState(false);
	return (
		<h3 className={active ? 'expanded' : ''} onClick={() => setActive(!active)}>{props.children} <b className="cvr-bg"></b></h3>
	);
};

export default Toggle;