
import CustomScroll from 'react-custom-scroll';

const Popcheck = (props) => {
        const Html2React = props.libraries.html2react.Component;
        const open = props.open;
        const content = props.content;
        console.log(content);
	return (
		<div id="popcheck">
                        <div className="holder">
                                <a href="#" className="cls cvr-bg-bf" onClick={(e) => {e.preventDefault(); open(false)}}>Close</a>
                                {content.title != '' && <h2>{content.title}</h2>}
                                {content.text != '' && 
                                        <CustomScroll heightRelativeToParent="300px">
                                                <div className="format-text">
                                                        <Html2React html={content.text} />
                                                </div>
                                        </CustomScroll>
                                }
                                <div className="rightned">
                                        <a href="#" className="button" onClick={(e) => {e.preventDefault(); open(false)}}>OKAY</a>
                                </div>
                        </div>
                </div>
	);
};

export default Popcheck;