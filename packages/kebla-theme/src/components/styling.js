import { Global, css } from 'frontity';

import Reset from '../assets/css/reset';
import AnimateCSS from '../assets/css/animate.css';
import FancyCSS from '../assets/css/fancy.css';
import Style from '../assets/css/style';


const Styling = () => {
        return(
                <>
                        <Global styles = { css `
                                ${Reset}
                                ${AnimateCSS}
                                ${FancyCSS}
                                ${Style}
                        `} />
                </>
        )
}

export default Styling;