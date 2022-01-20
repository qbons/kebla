import { Global, css } from 'frontity';

import Reset from '../assets/css/reset';
import AnimateCSS from '../assets/css/animate.css';
import Style from '../assets/css/style';


const Styling = () => {
        return(
                <>
                        <Global styles = { css `
                                ${Reset}
                                ${AnimateCSS}
                                ${Style}
                        `} />
                </>
        )
}

export default Styling;