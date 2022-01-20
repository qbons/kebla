
import { connect } from 'frontity';

import Widget from './widget';
import Tribute from './tribute';
import Wa from './wa';

const Footer = ({ state }) => {
        const req = state.source.get(state.router.link);
	return (
		<>
                        {!req.isHiring &&
                                <footer id="bottom">
                                        <div className="wrapper">
                                                <Widget />
                                                <Tribute />          
                                        </div>
                                </footer>
                        }
                        {req.option.wa != '' && <Wa/>}
                </>
	);
};

export default connect(Footer);