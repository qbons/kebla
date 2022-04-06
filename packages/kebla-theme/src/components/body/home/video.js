
import { connect } from 'frontity';

import Fancybox from './fancybox';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';


const Video = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.video;
        
	return (
		<div className="video">
                        <div className="wrapper">
                                {data.title != '' && <h2>{data.title}</h2>}
                                {data.thumb != '' &&
                                        <div className="holder">
                                                <Fancybox>
                                                        <a href="#" data-fancybox data-src={data.source == 'upload' ? data.vfile : data.vlink}>
                                                                <Image src={data.thumb} />
                                                                <span><i className="cvr-bg"></i></span>
                                                        </a>
                                                </Fancybox>
                                        </div>
                                }
                                {(data.btxt !='' && data.burl != '') && 
                                        <Link className="button" link={data.burl}>{data.btxt}</Link>
                                }
                        </div>
                </div>
	);
};

export default connect(Video);