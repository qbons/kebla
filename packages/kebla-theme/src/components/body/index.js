
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Home from './home/'
import Sme from './sme/';
import Corporate from './corporate/';
import Hiring from './hiring/';
import Page from './page/';

const Body = ({ state }) => {
        const req = state.source.get(state.router.link);
	return (
                <div id="body">
                        <Switch >
                                <Home when={req.isHomepage} />
                                <Sme when={req.isSme} />
                                <Corporate when={req.isCorporate} />
                                <Hiring when={req.isHiring} />
                                <Page when={req.isRegularPage} />
                        </Switch>
                </div>
	);
};

export default connect(Body);