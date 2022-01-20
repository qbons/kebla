
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Step_1 from './step-1';
import Step_1_2 from './step-1-2';
import Step_1_2_Table from './step-1-2-table';
import Step_2 from './step-2';
import Step_2_2 from './step-2-2';
import Step_2_3 from './step-2-3';
import Step_3 from './step-3';

const Hiring = ({ state, libraries, actions}) => {
        const req = state.source.get(state.router.link);
        const step = req.step;
	return (
                <>
                        <div className="inner-sign">
                                <div className="wrapper">
                                        <div className="layer">
                                                <Switch >
                                                        <Step_1 when={step == 'info'} />
                                                        {/*<Step_1_2 when={step == 'needs'} />*/}
                                                        <Step_2 when={step == 'price'} />
                                                        <Step_2_2 when={step == 'demo'} />
                                                        <Step_2_3 when={step == 'dthank'} />
                                                        <Step_3 when={step == 'othank'} />
                                                </Switch>
                                        </div>
                                </div>
                        </div>
                        {step == 'price' &&
                                <div id="popfeat">
                                        <div className="trigger-close"  onClick={(e) =>{e.preventDefault(); actions.theme.togglePopFeat(); }}></div>
                                        <div className="holder">
                                                <div className="layer">
                                                        {req.data.price.feat.title != '' && <h2>{req.data.price.feat.title}</h2>}
                                                        <Step_1_2_Table />
                                                </div>
                                        </div>
                                </div>
                        }
                </>
	);
};

export default connect(Hiring);