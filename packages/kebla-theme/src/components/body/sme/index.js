
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Hero from './hero';
import Flow from './flow';
import FlowMobile from './flow-mobile';
import Story from './story';
import StoryMobile from './story-mobile';
import CTA from './cta';
import Faq from './faq';
import Request from './request';

const Wrap = (props) =>{
        return <>{props.children}</>
}

const Sme = ({ state}) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.content.visibility;
        const order = req.data.content.order;
	return (
                <div className="inner-sme">
                        {order.map((v, k) => {
                                return(
                                        <Switch key={k}>
                                                <Hero when={v == 'hero' && visibility.includes(v)}/>
                                                <Wrap when={v == 'flow' && visibility.includes(v)}>
                                                        <Flow />
                                                        <FlowMobile />
                                                </Wrap>
                                                <Wrap when={v == 'story' && visibility.includes(v)}>
                                                        <Story />
                                                        <StoryMobile />
                                                </Wrap>
                                                <CTA when={v == 'cta' && visibility.includes(v)}/>
                                                <Faq when={v == 'faq' && visibility.includes(v)}/>
                                                <Request when={v == 'request' && visibility.includes(v)}/>
                                        </Switch>
                                )
                        })}
                </div>
	);
};

export default connect(Sme);