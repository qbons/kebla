import { connect } from "frontity";

import Styling from './styling';
import Loading from './loading';
import HeadMeta from './head-meta';
import Header from './header/';
import Body from './body/';
import Footer from './footer/';

const Root = ({state}) => {
        const req = state.source.get(state.router.link);
	let classes = (req.isSme || req.isCorporate ) ? 'white-head' : '';
        classes = (req.isHiring) ? 'white-head body-sign' : classes;
        return(
                <div id="shell" className={classes}>
                        <Styling />
                        {req.isFetching && <Loading/>}
                        {req.isReady &&
                                <>
                                        <HeadMeta/>
                                        <Header/>
                                        <Body/>
                                        <Footer />
                                </>
                        }
                </div>
        )
}
export default connect(Root);