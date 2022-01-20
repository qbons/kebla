
import { connect } from 'frontity';

const Wa = ({ state }) => {
	const req = state.source.get(state.router.link);
	return (
		<a href={req.option.wa} target="_blank" className="watrig cvr-bg"></a>
	);
};

export default connect(Wa);