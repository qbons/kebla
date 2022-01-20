
import { connect } from 'frontity';


const Step_1_2_Table = ({ state, actions, libraries }) => {
        const req = state.source.get(state.router.link);
        const data = req.data.price.feat;
        const Html2React = libraries.html2react.Component;
	return (
                <table>
                        <thead>
                                <tr>
                                        <th>&nbsp;</th>
                                        <th>{data.basicLabel != '' && <Html2React html={data.basicLabel}/>}</th>
                                        <th>{data.premiumLabel != '' && <Html2React html={data.premiumLabel}/>}</th>
                                </tr>
                                <tr>
                                        <th colSpan="3"><small>{data.premiumLabel != '' && <Html2React html={data.featureLabel}/>}</small></th>
                                </tr>
                        </thead>
                        {data.item.length > 0 &&
                                <tbody>
                                        {data.item.map((item, index) => {
                                                return(
                                                        <tr key={index}>
                                                                <td>
                                                                        {item.title}
                                                                        {item.text != '' && 
                                                                                <span className="cvr-bg ihover">
                                                                                        <div className="wrap">
                                                                                                <h3>{item.title}</h3>
                                                                                                <div className="txt">
                                                                                                        {item.text}
                                                                                                </div>
                                                                                        </div>
                                                                                </span>
                                                                        }
                                                                </td>
                                                                <td>{item.basic == 'yes' ? <i className="cvr-bg ico-chk"></i> : ''}</td>
                                                                <td>{item.premium == 'yes' ? <i className="cvr-bg ico-chk"></i> : ''}</td>
                                                        </tr>
                                                )
                                        })}
                                </tbody>
                        }
                </table>
	);
};

export default connect(Step_1_2_Table);