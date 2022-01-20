import {useState} from 'react';
import { connect } from 'frontity';

const Toggle = ({ state }) => {
        const [active, setActive] = useState(false);
	return (
		<b className={active ? 'expanded' : '' } onClick={() => setActive(!active)}></b>
	);
};

export default connect(Toggle);