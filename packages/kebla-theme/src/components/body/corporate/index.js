
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Hero from './hero';
import Company from './company';
import Advan from './advan';
import Feat from './feat';
import Request from './request';
import Story from './story';
import StoryMobile from './story-mobile';
import Faq from './faq';
import CTA from './cta';

const Wrap = (props) =>{
        return <>{props.children}</>
}

const Corporate = ({ state, libraries}) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.content.visibility;
        const order = req.data.content.order;
	return (
                <div className="inner-corp">
                        {order.map((v, k) => {
                                return(
                                        <Switch key={k}>
                                                <Hero when={v == 'hero' && visibility.includes(v)}/>
                                                <Company when={v == 'client' && visibility.includes(v)}/>
                                                <Advan when={v == 'advan' && visibility.includes(v)}/>
                                                <Feat when={v == 'feat' && visibility.includes(v)}/>
                                                <Request when={v == 'request' && visibility.includes(v)}/>
                                                <Wrap when={v == 'story' && visibility.includes(v)}>
                                                        <Story />
                                                        <StoryMobile />
                                                </Wrap>
                                                <Faq when={v == 'faq' && visibility.includes(v)}/>
                                                <CTA when={v == 'cta' && visibility.includes(v)}/>
                                        </Switch>
                                )
                        })}
                </div>
	);
};

export default connect(Corporate);