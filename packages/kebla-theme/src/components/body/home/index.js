
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Hero from './hero';
import Client from './client';
import Help from './help';
import Reason from './reason';
import Process from './process';
import Resource from './resource';
import CTA from './cta';

const Home = ({ state, libraries}) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.visibility;
        const order = req.data.order;
	return (
                <div className="inner-home">
                        {order.map((v, k) => {
                                return(
                                        <Switch key={k}>
                                                <Hero when={v == 'hero' && visibility.includes(v)}/>
                                                <Client when={v == 'client' && visibility.includes(v)}/>
                                                <Help when={v == 'help' && visibility.includes(v)}/>
                                                <Reason when={v == 'reason' && visibility.includes(v)}/>
                                                <Process when={v == 'process' && visibility.includes(v)}/>
                                                <Resource when={v == 'resource' && visibility.includes(v)}/>
                                                <CTA when={v == 'cta' && visibility.includes(v)}/>
                                        </Switch>
                                )
                        })}
                </div>
	);
};

export default connect(Home);