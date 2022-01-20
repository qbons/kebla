
import { connect } from 'frontity';

import Image from "@frontity/components/image";

const Client = ({ state , libraries}) => {
        const req = state.source.get(state.router.link);
        const data = req.data.client;
        const Html2React = libraries.html2react.Component;
	return (
		<div className="client">
                        <div className="wrapper">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.logo.length > 0 &&
                                        <div className="list">
                                                {data.logo.map((item, index) => {
                                                        return(
                                                                <Image key={index} src={item} height="44" />                
                                                        )
                                                })}
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default connect(Client);