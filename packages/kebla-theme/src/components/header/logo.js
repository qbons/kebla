import { connect } from "frontity";

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Logo = ({state, actions}) => {
        const req = state.source.get(state.router.link);
        return(
                <div className="logo">
                        <Link link={req.option.lang == 'en' ? '/' : '/id' }><Image src={req.option.logoHead} width="120"/></Link>
                </div>
        )
}

export default connect(Logo);