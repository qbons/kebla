
import TriangleDropdown from '../img/icon/triangle-dropdown.svg';
import ArrowFaq from '../img/icon/arrow-faq.svg';
import ButtonLoading from '../img/btn-loading.gif';
import TriangleMenu from '../img/icon/triangle-menu.svg';
import WA from '../img/icon/wa.png';
import ArrowSliderLeft from '../img/icon/arrow-slider-left.svg';
import ArrowSliderRight from '../img/icon/arrow-slider-right.svg';
import Check from '../img/icon/check.svg';
import StepBG from '../img/icon/step-bg.png';
import ArrowSelect from '../img/icon/arrow-select.svg';
import Unchecked from '../img/icon/unchecked.svg';
import Checked from '../img/icon/checked.svg';
import Info from '../img/icon/info.svg';
import CheckFeat from '../img/icon/check-feat.svg';
import Clock from '../img/icon/clock.png';
import ArrowFeat from '../img/icon/arrow-feat.svg';
import Globe from '../img/icon/globe.png';
import Pointing from '../img/icon/pointing.svg';
import Play from '../img/icon/play.svg';

const Style = `
@charset "UTF-8";
:before,:after,html *{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-moz-osx-font-smoothing: grayscale; /*(For Firefox)*/-webkit-font-smoothing: antialiased; /*(For Chrome and Safari)*/}
.clearfix:after,
.clear{clear: both;display: block;height: 0;width: 100%;float: none !important;}
.clearfix:after{content: ''}
input::-moz-focus-inner /*Remove button padding in FF*/{ border: 0;padding: 0;}
a{text-decoration: none;outline: 0 !important;}
a:hover{color: inherit;text-decoration: none;}
img{max-width: 100%;vertical-align: top;}
*:focus ,
textarea,
input,
textarea:focus, input:focus{outline: none;border-radius: 0}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {-webkit-appearance: none !important;margin: 0;}
input[type=number] {-moz-appearance:textfield !important;}
input::placeholder{ 
	color: #cacdc8;
	opacity:1;
}
textarea::placeholder{ 
	color: #cacdc8;
	opacity: 1;
}
::-moz-placeholder {
	opacity: 1;
}
.cvr-bg-bf:before,
.cvr-bg-af:after,
.cvr-bg{
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
.cvr-bg-bf:before,
.cvr-bg-af:after{
	content: '';
	display: inline-block;
        vertical-align: middle;
}
body{
        background: #fff;
        color: #000;
	font-size: 16px;
	font-family: 'DM Sans';
	font-weight:  400;
	position: static;
	overflow-y:auto
}
.wrapper{
	max-width: 1260px;
	width: 100%;
	margin: 0 auto;
}
.rowflex{
	display: flex;
	flex-wrap: wrap;
}
.rowflex > *{
	flex: 1;
}
.clicked.dropselect.has-search input,
.form-basic .date-field,
.dropselect strong,
.dropdown select,
.form-basic input[type="number"],
.form-basic input[type="text"],
.form-basic input[type="tel"],
.form-basic input[type="email"],
.form-basic input[type="password"],
.form-basic textarea{
	/* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border-radius: 5px;
	display: block;
	width: 100%;
	background: #fff;
	color: #000;
	border: solid 1px #CED9EA;
	font-size: 16px;
	font-family: 'DM Sans';
	font-weight: 400;
	height: 43px;
	padding: 0 15px;
}
.form-basic textarea{
	min-height: 160px;
	padding: 15px;
	resize: vertical;
	line-height: 180%;
}
.form-basic form > * {
	display: block;
	margin-top: 20px;
}
.form-basic form > *:first-child{
	margin-top: 0;
}
.form-basic .fgroup > label{
	display: block;
	color: #000;
	font-size: 16px;
}
.form-basic .fgroup > label sup{
	line-height: 100%;
	position: relative;
	top: 0;
	color: #ef0000;
}
/** DROPDOWN **/
.dropdown{
	position: relative;
	cursor: pointer;
}
.dropselect{
	position: relative;
	-webkit-user-select: none; /* Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}
.clicked.dropselect.has-search strong,
.dropselect.has-search input,
.dropselect select{
	display:none;
}
.clicked.dropselect.has-search input{
	display: block;
}
.dropselect strong{
	display: block;
	padding: 0 15px;
	cursor: pointer;
	z-index: 2;
	position: relative;
	border: solid 1px #CED9EA;
	height: 43px;
	line-height: 43px;
	color: #CED9EA;
	overflow: hidden;
}
.dropselect.activated strong{
	color: #000;
}
.dropdown b,
.dropselect strong:after{
	display: inline-block;
	position: absolute;
	top: 18px;
	right: 15px;
	width: 14px;
	height: 6px;
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-image: url('${TriangleDropdown}');
	content: '';
	transition:transform 0.2s ease-in;
	transform: rotate(0deg);
}
.dropselect.clicked strong:after{
	transform: rotate(180deg);
}
.dropselect .scrollbar-inner.scroll-content{
	max-height: 180px;
}
.dropselect .dropholder{
	list-style: none;
	position: absolute;
	left: 0;
	width: 100%;
	opacity: 0;
	visibility: hidden;
	transition:all 0.1s ease-in;
	display: block;
	background: #fff;
	border-radius: 5px;
	border: 1px solid #CED9EA;
	margin-top: 0;
	padding: 15px 0;
}
.dropselect.ontop .dropholder{
	bottom: 100%;
	margin: 0;
}
.dropselect.clicked .dropholder{
	opacity: 1;
	visibility: visible;
	z-index: 9;
	margin-top: 5px;
}
.dropselect.ontop.clicked .dropholder{
	margin: 0 0 5px;
}
.dropselect .scrollbar-inner{
	padding: 2px 15px;
}
.dropselect .scrollbar-inner > .scroll-element.scroll-y{
	width: 2px;
}
.dropselect li[data-value="empty"]:hover,
.dropselect li[data-value="empty"]{
	color: #CED9EA;
}
.dropselect li{
	display:block;
	cursor: pointer;
	position: relative;
	color: #000;
	line-height: 160%;
	margin-top: 13px;
	padding: 0 15px;
}
.dropselect li:hover{
	color: #0086FF;
}
.dropselect li:first-child{
	margin: 0;
}
.dropselect li.hidden,
.dropselect li.empty{
	display: none;
}
.accord-item {
	position: relative;
	border-bottom: 1px solid #CED9EA;
	border-top: 4px solid rgba(0,0,0,0);
	background: #fff;
	padding: 25px 30px;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);
}
.accord-item.expanded,
.accord-item.active{
	border-top: 4px solid #0086FF;
	background: rgba(240, 243, 247, 0.4);
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
	border-bottom: 1px solid rgba(0,0,0,0);
}
.accord-item .acc-head{
	cursor: pointer;
	position: relative;
	padding-right: 165px;
}
.accord-item .acc-head:before{
	position: absolute;
	right: 0;
	top: 11px;
	width: 17px;
	height: 10px;
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: block;
	content: '';
	background-image: url('${ArrowFaq}');
	transform: rotate(0deg);
	transition:transform 0.2s ease-in;
}
.accord-item.expanded .acc-head:before{
	transform: rotate(180deg);
}
.accord-item .acc-head h3{
	color: #000;
	font-weight: 700;
	line-height: 150%;
	font-size: 20px;
	-webkit-user-select: none; /* Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}
.accord-item .acc-body{
	display: none;
	padding-top: 25px;
}
.accord-item.expanded .acc-body,
.accord-item.active .acc-body{
	display: block;
}
.format-text{
	line-height: 160%;
	font-size: 16px;
}
.format-text > *{
	margin-top: 25px;
}
.format-text > *:first-child{
	margin-top: 0;
}
.format-text b,
.format-text strong{
	font-weight: 700;
}
.format-text em,
.format-text i:not(.fa){
	font-style: italic;
}
.format-text h1,
.format-text h2,
.format-text h3,
.format-text h4,
.format-text h5,
.format-text h6{
	color: #000;
	font-weight: 700;
	line-height: 140%;
}
.format-text h1{
	font-size: 28px;
}
.format-text h2{
	font-size: 20px;
}
.format-text h3{
	font-size: 16px;
}
.format-text h4{
	font-size: 14px;
}
.format-text h5{
	font-size: 12px;
}
.format-text h6{
	font-size: 10px;
}
.format-text a:not(.button){
	color: #0086FF;
}
.format-text a:not(.button):hover{
	text-decoration: underline;
}
.format-text ul{
	list-style: disc;
	padding-left: 40px;
}
.format-text ul li,
.format-text ol li{
	padding-bottom: 10px;
}
.format-text ol{
	list-style: decimal;
}
.format-text ol{
	padding-left: 60px;
}
.format-text sup{
	color: #d90000;
	position: relative;
	top: 0;
	line-height: 100%;
}
.format-text blockquote{
	font-size: 19px;
	line-height: 200%;
}
.centered{
	text-align: center;
}
.rightned{
	text-align: right;
}
.leftned{
	text-align: left;
}
.btn-menu-hollow a,
.btn-menu a,
.button{
	/* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border-radius: 5px;
	display: inline-block;
	color: #fff;
	background: #0086FF;
	font-family: 'DM Sans';
	font-weight: 400;
	font-size: 16px;
	height: 44px;
	line-height: 44px;
	padding: 0 28px;
	text-align: center;
	cursor: pointer;
	border: none;
	outline: none !important;
	transition:all 0.2s ease-in;
}
.button:active,
.button:focus{
	border-radius: 5px;
}

.btn-menu-hollow a,
.button.btn-hollow{
	background: none;
	border: 1px solid #0086FF;
	color: #0086FF;
	line-height: 42px;
}
.btn-menu-hollow-white a,
.button.btn-hollow-white{
	background: none;
	border: 1px solid #fff;
	color: #fff;
	line-height: 42px;
}
.btn-menu-hollow-white a:hover,
.button.btn-hollow-white:hover{
	color: #0086FF;
	background: #fff;
	border: 1px solid #fff;
}
.button.btn-white{
	background: #fff;
	color: #0086FF;
}
.button.btn-white:hover{
	background: #efefef;
	color: #0086FF;
}
.btn-menu-hollow a:hover,
.btn-menu a:hover,
.button:hover{
	color: #fff;
	background: #006bcc;
	border-color: #006bcc;
}
.button.btn-disabled{
	color: #fff;
	background: #ddd;
	cursor: default;
}
.button.has-loading{
	position: relative;
	overflow: hidden;
}
.button.has-loading.fetching{
	color: rgba(0,0,0,0);
	cursor: default;
}
.button.has-loading:before{
	display: none;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,.8);
	content: '';
	z-index: 1;
}
.button.has-loading:after{
	display: none;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	left: calc(50% - 8px);
	width: 16px;
	height: 11px;
	background-image: url('${ButtonLoading}');
	content: '';
	z-index: 2;
}
.button.has-loading.fetching:after,
.button.has-loading.fetching:before{
	display: block;
}
.slick-dots{
	display: block;
	z-index: 2;
	width: 100%;
	text-align: center;
}
.slick-dots li{
	display: inline-block;
	vertical-align: middle;
	margin: 0 3px;
}
.slick-dots li button{
	display: block;
	width: 7px;
	height: 7px;
	cursor: pointer;
	border: none;
	color: rgba(0,0,0,0);
	background: #CED9EA;
	padding: 0;
	border-radius: 50%;
}
.slick-dots li.slick-active button{
	background: #677793;
}
/** HEADER **/
#top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background: rgba(255,255,255,0);
        padding: 32px 0;
        transition:all 0.2s ease-in;
}
#top.is-sticky{
        background: rgba(255,255,255,1);
        box-shadow:   0px 4px 30px rgba(0, 0, 0, 0.07);
}
#top .logo{
        float: left;
}
#top .mainmenu{
        float: right;
}
.mainmenu li{
        display: inline-block;
        vertical-align: middle;
        margin-left: 35px;
        position: relative;
}
.mainmenu li:first-child{
        margin: 0;
}
.mainmenu li:not(.btn-menu):not(.btn-menu-hollow) a{
        color: #000;
        /**transition:color 0.2s ease-in;**/
        display: inline-block;
        position: relative;
}
.mainmenu li.current-menu-item:not(.btn-menu):not(.btn-menu-hollow) > a,
.mainmenu li:not(.btn-menu):not(.btn-menu-hollow):hover > a,
.mainmenu li:not(.btn-menu):not(.btn-menu-hollow) a:hover{
        color: #0086FF;
}

.mainmenu li ul:before{
        position: absolute;
        left: 0;
        top: -14px;
        width: 100%;
        height: 10px;
        display: block;
        content: '';
}
.mainmenu li ul{
        display: block;
        position: absolute;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
        min-width: 250px;
        width: calc(100% + 50px);
        padding: 15px 27px 20px;
        left: -27px;
        border-top: 4px solid #0086FF;
        margin-top: 5px;
        opacity: 0;
        visibility: hidden;
        transition:all 0.2s ease-in;
}
.mainmenu li:hover ul{
        opacity: 1;
        visibility: visible;
        margin-top: 10px;
}
.mainmenu li.menu-item-has-children > b{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -1px;
        width: 10px;
        height: 6px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${TriangleMenu}');
        content: '';
        margin-left: 6px;
        transition:transform 0.2s ease-in;
        transform: rotate(0deg);
        filter: brightness(0%);
}
.mainmenu li:hover > b,
.mainmenu li.menu-item-has-children > b:hover{
        transform: rotate(180deg);
        filter: brightness(100%);
}
.mainmenu li.current-menu-item > b{
        filter: brightness(100%);
}
.mainmenu li ul li{
        display: block;
        margin: 12px 0 0;
        line-height: 160%;
}
.mainmenu li ul li:first-child{
        margin: 0;
}
.mainmenu li ul li.info a:hover,
.mainmenu li ul li.info a{
        cursor: default;
        color: #CED9EA !important;
        font-style: italic;
}
@media (min-width: 992px) {
        .white-head #top:not(.is-sticky) .mainmenu > ul > li.current-menu-item:not(.btn-menu):not(.btn-menu-hollow) > a,
        .white-head #top:not(.is-sticky) .mainmenu > ul > li:not(.btn-menu):not(.btn-menu-hollow):hover > a,
        .white-head #top:not(.is-sticky) .mainmenu > ul >  li:not(.btn-menu):not(.btn-menu-hollow) > a:hover{
                color: #efefef;
        }
        .white-head #top:not(.is-sticky) .mainmenu > ul > li:not(.btn-menu):not(.btn-menu-hollow) > a{
                color: #fff;
        }
	.white-head #top:not(.is-sticky) .mainmenu li.lang a.cvr-bg,
        .white-head #top:not(.is-sticky) .mainmenu li.menu-item-has-children > b,
        .white-head #top:not(.is-sticky) .mainmenu li.current-menu-item > b{
                filter: brightness(0) invert(1);
        }
        .white-head #top:not(.is-sticky) .btn-menu-hollow a{
                background: none;
                border: 1px solid #fff;
                color: #fff;
                line-height: 42px;
        }
        .white-head #top:not(.is-sticky) .btn-menu-hollow a:hover{
                color: #0086FF;
                background: #fff;
                border: 1px solid #fff;
        }
        .white-head #top:not(.is-sticky) .btn-menu a{
                background: #fff;
                color: #0086FF;
        }
        .white-head #top:not(.is-sticky) .btn-menu a:hover{
                background: #efefef;
                color: #0086FF;
        }
}
body .white-head #top:not(.is-sticky) .logo{
        filter: brightness(0) invert(1);
}
.mainmenu li.lang a.cvr-bg{
	width: 22px;
	height: 22px;
	background-image: url('${Globe}');
	display: inline-block;
	vertical-align: middle;
	filter: brightness(0%);
}
.mainmenu li.lang:hover > a.cvr-bg{
	filter: brightness(100%);
}
.mainmenu li.lang a.cvr-bg + b{
	top: 0;
}
.mainmenu li.lang:hover ul,
.mainmenu li.lang ul{
	min-width: 1px;
	padding: 10px 15px;
	width: auto;
	left: -5px;
}
.mainmenu li.lang span{
	font-weight: 700;
	color: #0086FF;
}
/** FOOTER **/
#bottom{
        background: #F0F3F7;
        padding: 175px 0 25px;
}
#bottom .info .for-mobile{
	display: inline-block;
	margin: 0 0 15px;
 }
#bottom .footer-widget{
        margin-bottom: 120px;
}
#bottom .rowflex{
        justify-content: space-between;
}
#bottom .tribute p,
#bottom .info{
        flex:25%;
        max-width: 25%;
}
#bottom .tribute ul,
#bottom .holder{
        max-width: 60%;
        flex: 60%;
}
#bottom .info{
        line-height: 150%;
        font-size: 24px;
        font-weight: 700;
}
#bottom .holder{
        display: flex;
        flex-wrap: wrap;
}
#bottom .holder .widget{
        flex: 32%;
        max-width: 32%;
}
#bottom .widget h3{
        color:  #0086FF;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 25px;
}
#bottom .widget li{
        display: block;
        line-height: 160%;
        margin-top: 12px;
}
#bottom .widget li:first-child{
        margin: 0;
}
#bottom .widget li a{
        color: #000;
        transition:color 0.2s ease-in;
}
#bottom .tribute li a:hover,
#bottom .widget li a:hover{
        color:  #0086FF;
}
#bottom .tribute{
        align-items: center;
}
#bottom .tribute p{
        color: #677793;
}
#bottom .tribute li{
        display: inline-block;
        position: relative;
}
#bottom .tribute li a{
        color: #677793;
        transition:color 0.2s ease-in;
}
#bottom .tribute li + li{
        margin-left: 5px;
        position: relative;
        top: 1px;
}
#bottom .tribute li + li:before{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        margin-right: 7px;
        background: #677793;
        content: '';
        width: 1px;
        height: 14px;
        top: -1px;
}
.watrig{
        display: block;
        position: fixed;
        right: 0;
        bottom: 0;
        width: 145px;
        height: 145px;
        background-image: url('${WA}');
        z-index: 99;
}
/** INNER HOME **/
.inner-corp .hero,
.inner-sme .hero,
.inner-home .hero{
        display: flex;
        align-items: center;
        min-height: 100vh;
        position: relative;
        background: #f9fafc;
}
.inner-corp .hero .bg,
.inner-sme .hero .bg,
.inner-home .hero .bg{
        position: absolute;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-position: top right;
}
.inner-corp .hero .wrapper,
.inner-sme .hero .wrapper,
.inner-home .hero .wrapper{
        position: relative;
        z-index: 2;
}
.inner-home .hero .layer{
        max-width: 515px;
        width: 100%;
        background: #fff;
        box-shadow: 0px 0px 27.6435px rgba(0, 0, 0, 0.2);
        border-radius: 9.2145px;
        padding: 60px 45px;
}
.inner-corp .hero h2,
.inner-sme .hero h2,
.inner-home .hero h2{
        font-weight: 700;
        font-size: 48px;
        line-height: 120%;
        margin-bottom: 10px;
}
.inner-home .hero .txt{
        font-size: 20px;
        color: #677793;
        line-height: 160%;
        margin-bottom: 20px;
}
.inner-home .client{
        text-align: center;
        padding-top: 60px;
}
.inner-home .resource .item h3,
.inner-home .resource h2,
.inner-home .process .item h3,
.inner-home .process .hentry h2,
.inner-home .reason h2,
.inner-home .client h2{
        font-size: 36px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 30px;
        text-align: center;
}
.inner-home .client h2 b{
        color: #0086FF;
}
.inner-home .client .list > *{
        display: inline-block;
        vertical-align: middle;
        margin: 0 15px;
}
.inner-home .reason{
        padding-top: 100px;
}
.inner-home .reason .holder{
        max-width: 824px;
        margin: 0 auto;
        width: 100%;
}
.inner-home .reason .rowflex{
        margin: 0 -10px;
}
.inner-home .reason .item{
        flex: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 0 10px 20px;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
        text-align: center;
        padding: 40px;
	border-radius: 10px;
}
.inner-home .reason .item figure{
        margin-bottom: 15px;
}
.inner-home .reason .item h3{
        font-weight: 700;
        font-size: 36px;
        line-height: 130%;
        margin-bottom: 3px;
}
.inner-home .process .item .txt,
.inner-home .process .hentry .txt,
.inner-home .reason .item .txt{
        font-size: 20px;
        line-height: 150%;
        color: #677793;
        text-align: center;
}
.inner-home .process{
        margin-top: 60px;
        padding: 80px 0;
        background: rgba(240, 243, 247, 0.4);
}
.inner-home .process .hentry{
        margin-bottom: 50px;
}
.inner-home .process .item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        max-width: 1050px;
        margin: 0 auto;
}
.inner-home .process .item .caption,
.inner-home .process .item figure{
        max-width: calc(50% - 10px);
        flex: calc(50% - 10px);
}
.inner-home .process .item:nth-child(even) figure{
        order: 2;
}
.inner-home .process .item .caption{
        padding: 10px 0 15px 20px;
        border-left-width: 10px;
        border-style: solid;
	overflow: hidden;
}
.inner-home .process .item:nth-child(even) .caption{
        order: 1;
        text-align: right;
        border-left-width: 0;
        border-right-width: 10px;
        padding-left: 0;
        padding-right: 20px;
}
.inner-home .process .item h3{
        font-size: 28px;
        margin-bottom: 10px;
        text-align: left;
}
.inner-home .process .item .txt{
        text-align: left;
}
.inner-home .process .item:nth-child(even) .caption .txt,
.inner-home .process .item:nth-child(even) .caption h3{
        text-align: right;
}
.inner-home .process .item:nth-child(3n + 1) .caption{
	border-color: #00DDD7;
}
.inner-home .process .item:nth-child(3n + 1) h3{
	color: #00DDD7;
}
.inner-home .process .item:nth-child(3n + 2) .caption{
	border-color: #FFC033;
}
.inner-home .process .item:nth-child(3n + 2) h3{
	color: #FFC033;
}
.inner-home .process .item:nth-child(3n + 3) .caption{
	border-color: #FF6485;
}
.inner-home .process .item:nth-child(3n + 3) h3{
	color: #FF6485;
}
.inner-home .resource{
        padding-top: 90px;
}
.inner-home .resource .slider{
        max-width: 1130px;
        margin: 0 auto;
        position: relative;
}
.inner-corp .story-mobile .slidenav,
.inner-sme .story-mobile .slidenav,
.inner-home .resource .slidenav{
        position: absolute;
        left: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        height: 0;
}
.inner-corp .story-mobile .slidenav a,
.inner-sme .story-mobile .slidenav a,
.inner-home .resource .slidenav a{
        display: block;
        width: 11px;
        height: 17px;
        position: relative;
        opacity: 1;
        transition:opacity 0.2s ease-in;
}
.inner-corp .story-mobile .slidenav a:hover,
.inner-sme .story-mobile .slidenav a:hover,
.inner-home .resource .slidenav a:hover{
        opacity: .7;
}
.inner-corp .story-mobile .slidenav a.prev,
.inner-sme .story-mobile .slidenav a.prev,
.inner-home .resource .slidenav a.prev{
        float: left;
        left: -45px;
        background-image: url('${ArrowSliderLeft}');
}
.inner-corp .story-mobile .slidenav a.next,
.inner-sme .story-mobile .slidenav a.next,
.inner-home .resource .slidenav a.next{
        float: right;
        right: -45px;
        background-image: url('${ArrowSliderRight}');
}
.inner-home .resource h2{
        margin-bottom: 50px;
}
.inner-home .resource .slick-list{
        margin: 0 -10px;
}
.inner-home .resource .slick-track{
        display: flex;
}
.inner-home .resource .slick-slide{
        float: none;
        height: auto;
        margin: 0 10px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        background: rgba(240, 243, 247, 0.4);
        border-bottom-width: 5px;
        border-style: solid;
}
.inner-sme .flow-mobile .slick-slide:nth-child(3n + 3),
/*.inner-sme .flow .accord .item.active:nth-child(3n + 3),*/
.inner-home .resource .slick-slide:nth-child(3n + 1){
	border-color: #FFC033;
}
.inner-sme .flow-mobile .slick-slide:nth-child(3n + 1),
/*.inner-sme .flow .accord .item.active:nth-child(3n + 1),*/
.inner-home .resource .slick-slide:nth-child(3n + 2){
	border-color: #00DDD7;
}
.inner-sme .flow-mobile .slick-slide:nth-child(3n + 2),
/*.inner-sme .flow .accord .item.active:nth-child(3n + 2),*/
.inner-home .resource .slick-slide:nth-child(3n + 3){
	border-color: #FF6485;
}
.inner-home .resource .item figure{
	min-height: 243px;
	display: flex;
	align-items: center;
}
.inner-home .resource .item figure.id{
	min-height: 1px;
}
.inner-home .resource .item figure img{
	flex: 1;
}
.inner-home .resource .item .caption{
        padding: 35px 35px 50px;
}
.inner-home .resource .item a.cat{
        color: #0086FF;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        display: inline-block;
        line-height: 100%;
}
.inner-home .resource .item h3{
        text-align: left;
        margin: 8px 0 15px;
        font-size: 28px;
}
.inner-home .resource .item h3 a{
        color: #000;
        transition:color 0.2s ease-in;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.inner-home .resource .item h3 a:hover{
        color: #0086FF;
}
.inner-home .resource .item .txt{
        line-height: 150%;
        margin-bottom: 25px;
}
.inner-home .resource .item .more{
        display: inline-block;
        color: #0086FF;
        text-transform: uppercase;
}
.inner-home .resource .item .more:hover{
        text-decoration: underline;
}
.inner-corp .cta,
.inner-sme .cta,
.inner-home .cta{
        position: relative;
        margin-top: 100px;
        padding: 160px 0 120px;
}
.inner-corp .cta .bg,
.inner-sme .cta .bg,
.inner-home .cta .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: block;
}
.inner-corp .cta .wrapper,
.inner-sme .cta .wrapper,
.inner-home .cta .wrapper{
        position: relative;
        z-index: 2;
}
.inner-corp .cta .holder,
.inner-sme .cta .holder,
.inner-home .cta .holder{
        float: right;
        width: 45%;
        text-align: left;
}
.inner-corp .cta h2,
.inner-sme .cta h2,
.inner-home .cta h2{
        line-height: 130%;
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 30px;
}
.inner-home .video{
	text-align: center;
	margin: 60px 0 0;
}
.inner-home .video h2{
	color: #000;
	font-size: 36px;
	font-weight: 700;
	line-height: 130%;
	margin: 0 0 20px;
}
.inner-home .video .button{
	width: 100%;
	max-width: 400px;
}
.inner-home .video .holder{
	margin: 0 0 25px;	
}
.inner-home .video .holder a{
	display: block;
	position: relative;
}
.inner-home .video .holder a:after{
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0,0,0,.2);
	content: '';
}
.inner-home .video .holder span{
	display: block;
	position: absolute;
	left: 0;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 100%;
	text-align: center;
	z-index: 2;
}
.inner-home .video .holder i{
	background-image: url('${Play}');
	width: 177px;
	height: 177px;
	display: inline-block;
}
/** SME **/
.inner-sme .hero{
        background: #068aff;
        color: #fff;
        height: calc(100vh + 250px);
}
.inner-sme .hero .bg{
        background-position: top right;
}
.inner-sme .hero .holder{
        position: relative;
        top: -125px;
        max-width: 460px;
}
.inner-corp .hero h2,
.inner-sme .hero h2{
        color: #fff;
        line-height: 130%;
}
.inner-corp .hero .txt,
.inner-sme .hero .txt{
        font-size: 20px;
        line-height: 160%;
}
.inner-corp .hero .txt + .button,
.inner-sme .hero .txt + .button{
        margin-top: 20px;
}
.inner-sme .flow{
        position: relative;
        margin-top: -230px;
        z-index: 2;
}
.inner-sme .flow .layer{
        padding: 75px 0 85px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
        border-radius: 15px;
        background: #fff;
}
.inner-corp .story h2,
.inner-corp .request h2,
.inner-corp .advan h2,
.inner-corp .faq .hentry h2,
.inner-sme .request h2,
.inner-sme .faq .hentry h2,
.inner-sme .story h2,
.inner-sme .flow h2{
        text-align: center;
        margin-bottom: 40px;
        font-weight: 700;
        font-size: 36px;
        line-height: 130%;
}
.inner-sme .flow .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.inner-sme .flow .list > *{
        flex: 50%;
        max-width: 50%;
}
.inner-sme .flow .list figure{
        display: none;
        padding: 0 40px;
        text-align: center;
}
.inner-sme .flow .list figure.active{
        display: block;
}
.inner-sme .flow .list .accord{
        padding-top: 27px;
}
.inner-sme .flow .accord .item{
        padding: 20px 25px;
        border-left-width: 8px;
        border-style: solid;
        border-color: #CED9EA;
	position:relative;
}
.inner-sme .flow .accord .item:before{
	display:block;
	position:absolute;
	left:-8px;
	top:0;
	width:8px;
	height:100%;
	content: '';
	background: red;
	transition:height 0.2s ease-in;
	height:0;
}
.inner-sme .flow .accord .item.active:before{
	height: 100%;
}
.inner-sme .flow .accord .item:nth-child(3n + 3):before{
	background: #FFC033;
}
.inner-sme .flow .accord .item:nth-child(3n + 1):before{
	background: #00DDD7;
}
.inner-sme .flow .accord .item:nth-child(3n + 2):before{
	background: #FF6485;
}
/*
.inner-sme .flow .accord .item.active{
        border-color: var(--border-color);
}
*/
.inner-sme .flow .accord h3{
        color: #CED9EA;
        font-weight: 700;
        font-size: 28px;
        cursor: pointer;
}
.inner-sme .flow .accord h3:hover,
.inner-sme .flow .accord .active h3{
        color: #000;
}
.inner-sme .flow .accord .caption{
        display: none;
}
.inner-sme .flow .accord .item.active .caption{
        display: block;
}
.inner-sme .flow .accord .txt{
        font-size: 20px;
        line-height: 150%;
        color: #677793;
        padding-top: 10px;
}
.inner-sme .flow .accord  .wrap + .button{
        margin-top: 40px;
        margin-left: 30px;
}
.inner-corp .story,
.inner-sme .story{
        margin-top: 130px;
        padding: 90px 0 130px;
        background: rgba(162, 244, 230, 0.3);
}
.inner-corp .story h2,
.inner-sme .story h2{
        margin-bottom: 60px;
}
.inner-corp .story .rowflex,
.inner-sme .story .rowflex{
        justify-content: space-between;
        max-width: 1230px;
        margin: 0 auto;
}
.inner-corp .story .person,
.inner-sme .story .person{
        max-width: 39%;
        flex: 39%;
}
.inner-corp .story .person .item,
.inner-sme .story .person .item{
        padding: 20px 25px;
        background: rgba(0,0,0,0);
        margin-top: 20px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);
        border-radius: 10px;
        transition:all 0.2s ease-in;
        cursor: pointer;
}
.inner-corp .story .person .item:first-child,
.inner-sme .story .person .item:first-child{
        margin: 0;
}
.inner-corp .story .person .item.active,
.inner-sme .story .person .item.active{
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
        background: #fff;
}
.inner-corp .story .person .item > *,
.inner-sme .story .person .item > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-corp .story .person .item figure,
.inner-sme .story .person .item figure{
        width: 71px;
}
.inner-corp .story .person .item figure img,
.inner-sme .story .person .item figure img{
        border-radius: 50%;
}
.inner-corp .story .person .item .caption,
.inner-sme .story .person .item .caption{
        width: calc(100% - 80px);
        padding-left: 20px;
}
.inner-corp .story .person h3,
.inner-sme .story .person h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        margin-bottom: 1px;
        color: #677793;
        transition:color 0.2s ease-in;
}
.inner-corp .story .person .item.active h3,
.inner-sme .story .person .item.active h3{
        color: #000;
}
.inner-corp .story .person span,
.inner-sme .story .person span{
        display: block;
        color: #677793;
        line-height: 150%;
        font-size: 20px;
}
.inner-corp .story .copy,
.inner-sme .story .copy{
        max-width: 49%;
        flex: 49%;
        position: relative;
        top: 10px;
}
.inner-corp .story .copy .item,
.inner-sme .story .copy .item{
        opacity: 0;
        visibility: hidden;
        transition:opacity 0.2s ease-in;
        height: 0;
}
.inner-corp .story .copy .item.active,
.inner-sme .story .copy .item.active{
        opacity: 1;
        visibility: visible;
        height: auto;
}
.inner-corp .story .copy .txt,
.inner-sme .story .copy .txt{
        font-size: 24px;
        line-height: 150%;
        color: #000;
}
.inner-corp .story .copy .txt > *,
.inner-sme .story .copy .txt > *{
        margin-top: 50px;
}
.inner-corp .story .copy .txt > *:first-child,
.inner-sme .story .copy .txt > *:first-child{
        margin: 0;
}
.inner-corp .story-mobile .txt blockquote,
.inner-sme .story-mobile .txt blockquote,
.inner-corp .story .copy .txt blockquote,
.inner-sme .story .copy .txt blockquote{
        font-weight: 700;
        color: #5417a6;
}
.inner-corp .cta,
.inner-sme .cta{
        margin: 0;
        padding: 110px 0 80px;
}
.inner-corp .faq ,
.inner-sme .faq {
        padding-top: 55px;
}
.inner-corp .faq .hentry,
.inner-sme .faq .hentry{
        margin-bottom: 35px;
        text-align: center;
}
.inner-corp .faq .hentry h2,
.inner-sme .faq .hentry h2{
        margin-bottom: 20px;
}
.inner-corp .faq .hentry .txt,
.inner-sme .faq .hentry .txt{
        line-height: 150%;
        font-size: 20px;
        color: #677793;
}
.inner-corp .faq .list,
.inner-sme .faq .list{
        max-width: 955px;
        margin: 0 auto;
}
.inner-corp .faq .format-text,
.inner-sme .faq .format-text{
        padding-right: 100px;
}
.inner-corp .request,
.inner-sme .request{
        background: #0086FF;
        margin-top: 65px;
        padding: 55px 0;
        text-align: center;
        color: #fff;
}
.inner-corp .request h2,
.inner-sme .request h2{
        margin-bottom: 5px;
}
.inner-corp .request .txt,
.inner-sme .request .txt{
        line-height: 150%;
        font-size: 20px;
}
.inner-corp .request .txt + .button,
.inner-sme .request .txt + .button{
        margin-top: 30px;
}
/** INNER CORP **/
.inner-corp .hero{
        background: #068aff;
        color: #fff;
}
.inner-corp .hero .holder{
        max-width: 330px;
}
.inner-corp .company{
        padding-top: 100px;
}
.inner-corp .company .rowflex{
        justify-content: space-between;
        align-items: center;
}
.inner-corp .company .thumb,
.inner-corp .company .copy{
        max-width: 50%;
        flex: 50%;
}
.inner-corp .company .copy {
        font-size: 36px;
        line-height: 130%;
        font-weight: 700;
        position: relative;
        top: -10px;
}
.inner-corp .company .copy b,
.inner-corp .company .copy strong{
        color: #0086FF;
}
.inner-corp .company .thumb{
        display: flex;
        margin: 0 -10px;
        align-items: center;
        flex-wrap: wrap;
}
.inner-corp .company .thumb figure{
        flex: calc(25% - 20px);
        max-width: calc(25% - 20px);
        margin: 0 10px 10px;
}
.inner-corp .advan{
        margin-top: 110px;
        padding: 90px 0;
        background: #F9FAFC;
}
.inner-corp .advan .wrapper{
        max-width: 1160px;
}
.inner-corp .advan h2{
        margin-bottom: 55px;
}
.inner-corp .advan .rowflex{
        margin: 0 -16px;
}
.inner-corp .advan .item{
        background: #fff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
        border-bottom-width: 5px;
        border-style: solid;
        padding: 70px 30px 50px;
        text-align: center;
        max-width: calc( 33.3333333333333333333% - 32px);
        flex: calc( 33.3333333333333333333% - 32px);
        margin: 0 16px 32px;
	border-radius: 10px 10px 0 0;
}
.inner-corp .advan .item:nth-child(3n + 1){
	border-color: #FFC033;
}
.inner-corp .advan .item:nth-child(3n + 2){
	border-color: #FF6485;
}
.inner-corp .advan .item:nth-child(3n + 3){
	border-color: #0086FF;
}
.inner-corp .advan .item h3{
        font-weight: 700;
        line-height: 130%;
        font-size: 28px;
        margin: 30px 0 15px;
}
.inner-corp .advan .item .txt{
        line-height: 150%;
        max-width: 285px;
        margin: 0 auto;
}
.inner-corp .feat{
        padding-top: 90px;
}
.inner-corp .feat .rowflex{
        justify-content: space-between;
}
.inner-corp .feat .copy{
        font-size: 48px;
        font-weight: 700;
        line-height: 130%;
        max-width: 41%;
        flex: 41%;
}
.inner-corp .feat .copy b,
.inner-corp .feat .copy strong{
        color: #ff6485;
}
.inner-corp .feat .list{
        max-width: 48%;
        flex: 48%;
        padding-right: 80px;
}
.inner-corp .feat .list li{
        display: block;
        position: relative;
        padding-top: 17px;
        margin-top: 17px;
        border-top: 1px solid #CED9EA;
        padding-left: 95px;
        font-size: 26px;
        line-height: 150%;
}
.inner-corp .feat .list li:first-child{
        margin-top: 0;
        padding-top: 0;
        border: none;
}
.inner-corp .feat .list li:before{
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 26px;
        height: 22px;
        background-image: url('${Check}');
        position: absolute;
        display: block;
        left: 32px;
        top: 27px;
        content: '';
}
.inner-corp .feat .list li:first-child:before{
        top: 8px;
}
.inner-corp .story{
        margin: 0;
}
.inner-corp .cta{
        margin-top: 65px;
}
/** INNERSIGN **/
.body-sign{
        background: #0086FF;
        padding: 165px 0 105px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${StepBG}');
	min-height: 100vh;
}
.inner-sign .layer{
        background: #FFFFFF;
        box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 45px 100px 50px;
        max-width: 1200px;
        margin: 0 auto;
}
.inner-sign .timeline{
        position: relative;
        max-width: 655px;
        margin: 0 auto 45px;
        display: flex;
        flex-wrap: wrap;
}
.inner-sign .timeline:before{
        position: absolute;
        left: 0;
        top: 15px;
        height: 5px;
        width: 100%;
        border-radius: 3px;
        background: #CED9EA;
        content: '';
        display: block;
}
.inner-sign .timeline span{
        display: inline-block;
        position: relative;
        flex: 33.3333333333333333333333333333333333%;
        max-width:  33.3333333333333333333333333333333333%;
        text-align: right;
        z-index: 2;
}
.inner-sign .timeline span:before{
        position: absolute;
        left: 0;
        top: 15px;
        width: calc(100% - 12px);
        background: #0086FF;
        content: '';
        height: 5px;
        border-radius: 3px;
        display: none;
}
.inner-sign .timeline span.current:nth-child(2):before{
        width: calc(100% - 18px);
}
.inner-sign .timeline span.current:before{
        display: block;
}
.inner-sign .timeline span.current.and-half:before{
        width: calc(100% + 80px);
}
.inner-sign .timeline span b{
        display: inline-block;
        width: 34px;
        height: 34px;
        line-height: 34px;
        border-radius: 50%;
        text-align: center;
        background:  #CED9EA;
        color: #fff;
        font-size: 18px;
        position: relative;
        right: 12px;
        margin-bottom: 8px;
        z-index: 3;
        font-weight: 700;
}
.inner-sign .timeline span.current b{
        background: #0086FF;
}
.inner-sign .timeline span:nth-child(2) b{
        right: 18px;
}
.inner-sign .timeline span:nth-child(3) b{
        right: -7px;
}
.inner-sign .timeline span small{
        font-size: 11px;
        font-weight: 700;
        line-height: 150%;
        display: block;
        position: relative;
        z-index: 3;
}
.inner-sign .timeline span small em{
        display: inline-block;
        text-align: center;
}
.inner-sign .step-1 .hentry{
        text-align: center;
        max-width: 500px;
        margin: 0 auto 40px;
}
.inner-sign .step-3 .hentry h2,
.inner-sign .step-2-2 .hentry h2,
.inner-sign .step-1 .panel h3,
.inner-sign .step-1 .hentry h2{
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 12px;
        font-size: 36px;
}
.inner-sign .step-3 .hentry .txt,
.inner-sign .step-2-2 .hentry .txt,
.inner-sign .step-1-2 .caption .txt,
.inner-sign .step-1 .hentry .txt{
        color: #677793;
        font-size: 20px;
        line-height: 150%;
}
.inner-sign .step-2 .panel,
.inner-sign .step-1 .panel{
        margin-top: 25px;
        background: rgba(240, 243, 247, 0.5);
        border-radius: 10px;
        padding: 25px 40px 50px;
}
.inner-sign .step-1 .panel:first-child{
        margin: 0;
}
.inner-sign .step-1 .panel h3{
        font-size: 24px;
        margin-bottom: 20px;
}
.inner-sign .step-1 .panel .fgroup,
.inner-sign .step-1 .panel .gap{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.inner-sign .step-1 .panel .gap > *{
        max-width: 45%;
        flex: 45%;
}
.inner-sign .step-1 .panel .fgroup{
        align-items: center;
        margin-top: 20px;
}
.inner-sign .step-1 .panel .fgroup:first-child{
        margin: 0;
}
.inner-sign .step-1 .panel .fgroup label{
        max-width: 32%;
        flex: 32%;
}
.inner-sign .step-1 .panel .fgroup label + *{
        max-width: 67%;
        flex: 67%;
}
.inner-sign .form-basic input::placeholder{
        color: #CED9EA;
}
.inner-sign  .dropselect strong,
.inner-sign .form-basic input[type='tel'],
.inner-sign .form-basic input[type='number'],
.inner-sign .form-basic input[type='email'],
.inner-sign .form-basic input[type='text']{
        height: 32px;
        border-radius: 5px;
        padding: 0 8px;
}
.inner-sign .form-basic input.invalid{
	border-color: red;
}
.inner-sign  .dropselect strong{
        line-height: 32px;
}
.inner-sign .dropselect strong:after{
        width: 10px;
        height: 6px;
        background-image: url('${ArrowSelect}');
        right: 7px;
        top: 12px;
}
.inner-sign .step-1 .action{
        text-align: center;
        margin-top: 30px;
}
.inner-sign .checks label{
        cursor: pointer;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
}
.inner-sign .checks label input{
        display: none;
}
.inner-sign .checks label span{
        display: inline-block;
        position: relative;
        color: #000;
        font-size: 16px;
        padding-left: 32px;
}
.inner-sign .checks label span:before{
        width: 19px;
        height: 19px;
        display: block;
        position: absolute;
        left: 0;
        top: 1px;
        content: '';
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${Unchecked}');
}
.inner-sign .checks label input:checked + span:before{
        background-image: url('${Checked}');
}
.inner-sign .checks label span a{
        color: #0086FF;
        text-decoration: underline;
}
.inner-sign .checks label span p{
	display: inline;
}
.inner-sign .checks small{
        display: inline-block;
        color: #677793;
        font-size: 13px;
        line-height: 160%;
        margin-top: 2px;
}
.inner-sign .checks label span b{
        font-weight: 700;
}
.inner-sign .checks + .button{
        margin-top: 30px;
}
.inner-sign .step-1-2 .rowflex{
        justify-content: space-between;
}
.inner-sign .step-1-2 .caption{
        order: 1;
        max-width: 38%;
        flex: 38%;
        position: relative;
}
.inner-sign .step-1-2 figure{
        order: 2;
        max-width: 49%;
        flex: 49%;
}
.inner-sign .step-1-2 .caption .txt{
        margin-bottom: 30px;
}
.inner-sign .step-2 .panel h2,
.inner-sign .step-1-2 .caption h2{
        line-height: 130%;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 15px;
}
.inner-sign .step-1-2 .form-basic .item{
        margin-top: 18px;
}
.inner-sign .step-1-2 .form-basic .item:first-child{
        margin: 0;
}
.inner-sign .step-1-2 .form-basic .fgroup > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-sign .step-1-2 .form-basic .fgroup input{
        max-width: 50px;
        height: 32px;
}
.inner-sign .step-1-2 .form-basic .fgroup label{
        color: #677793;
        font-size: 16px;
        margin-left: 10px;
}
.inner-sign .step-1-2 .form-basic h3{
        line-height: 130%;
        margin-bottom: 6px;
}
.inner-sign .step-1-2 .form-basic h3 b{
        font-weight: 700;
}
.inner-sign .step-1-2 .form-basic h3 small{
        color: #677793;
        font-size: 13px;
}
.inner-sign .goback{
        display: inline-block;
        position: relative;
        color: #0086FF;
}
.inner-sign .goback:hover{
        text-decoration: underline;
}
.inner-sign .step-1-2 .caption .goback{
        position: absolute;
        left: 0;
        bottom: -72px;
}
.inner-sign .step-1-2 .action{
        max-width: 435px;
        margin: 40px auto 0;
}
.inner-sign .step-1-2 .action > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-sign .step-1-2 .action .button{
        max-width: 138px;
        margin-right: 17px;
}
.inner-sign .step-1-2 .action .copy{
        max-width: 280px;
        line-height: 140%;
        font-size: 13px;
        color: #000;
}
.inner-sign .step-1-2 .action .copy a{
        color: #0086FF;
        text-decoration: underline;
}
.phone-field .drop{
	float: left;
	width: 104px;
	position: relative;
}
.phone-field .drop.fetching:after{
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	background: rgba(255,255,255,.7);
	content: '';
}
.phone-field .drop span{
	display: block;
	border-radius: 5px;
	display: block;
	width: 100%;
	background: #fff;
	color: #000;
	border: solid 1px #CED9EA;
	font-size: 16px;
	font-family: 'DM Sans';
	font-weight: 400;
	height: 32px;
	line-height: 28px;
	padding: 0 6px;
	cursor: pointer;
	position: relative;
}
.phone-field .drop span:after{
	width: 10px;
        height: 6px;
        background-image: url('${ArrowSelect}');
        right: 8px;
        top: 12px;
	position: absolute;
	transform: rotate(odeg);
	transition:transform 0.2s ease-in;
}
.phone-field .drop span.clicked:after{
	transform: rotate(180deg);
}
.phone-field .drop .holder li > *,
.phone-field .drop span > *{
	display: inline-block;
	vertical-align: middle;
}
.phone-field .drop span b{
	margin-left: 6px;
}
.phone-field .drop .holder{
	display: block;
	position: absolute;
	left: 0;
	border-radius: 5px;
	width: 100%;
	background: #fff;
	border: solid 1px #CED9EA;
	margin: 8px 0 0;
	overflow: hidden;
	transition:all 0.2s ease-in;
	opacity: 0;
	visibility: hidden;
}
.phone-field .drop span.clicked + .holder{
	opacity: 1;
	visibility: visible;
	margin: 5px 0 0;
}
.phone-field .drop .holder li{
	padding: 6px;
	cursor: pointer;
	font-size: 14px;
	color: #000;
	background: #fff;
	transition:all 0.2s ease-in;
}
.phone-field .drop .holder li b{
	margin-left: 5px;
}
.phone-field .drop .holder li:nth-child(odd){
	background: rgba(240, 243, 247, 0.5);
}
.phone-field .drop .holder li:hover,
.phone-field .drop .holder li:nth-child(odd):hover{
	color: #fff;
	background: #0086FF;
}
.phone-field .drop img{
	border: 1px solid #ced9ea;
}
.phone-field input[type='tel']{
	width: calc(100% - 113px);
	float: right;	
}
#popfeat{
        height: 100vh;
        width: 100%;
        z-index: 9999;
        background: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        left: 0 ;
        justify-content: center;
        overflow-y: scroll;
        display: none;
}
.open-popfeat #popfeat{
        display: flex;
}
.open-popfeat{
        height: 100vh;
        overflow: hidden
}
#popfeat .trigger-close{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 170%;
        z-index: 1;
}
#popfeat .holder{
        flex: 1;
        max-width: 680px;
        margin: 50px 0;
        position: relative;
        z-index: 2;
}
#popfeat .holder:after{
        display: block;
        width: 100%;
        height: 50px;
        content: '';
}
#popfeat .layer{
        background: #fff;
        position: relative;
        padding: 70px 80px 80px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
}
#popfeat .layer h2{
        text-align: center;
        font-weight: 700;
        font-size: 28px;
        line-height: 130%;
        margin-bottom: 45px;
}
.tbl-feat table,
#popfeat table{
        width: 100%;
}
.tbl-feat table th,
#popfeat table th{
        width: 27%;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        line-height: 110%;
}
.tbl-feat table th:first-child,
#popfeat table th:first-child{
        width: 46%;
        text-align: left;
        padding-right: 10px;
}
.tbl-feat table th small,
#popfeat table th small{
        display: block;
        color: #677793;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
}
.ihover{
        display: inline-block;
        position: relative;
        width: 11px;
        height: 13px;
        background-image: url('${Info}');
        cursor: pointer;
}
.ihover .wrap{
        position: absolute;
        width: 255px;
        background: #fff;
        box-shadow: 0px 2.3px 15.15px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
        display: block;
        padding: 10px 15px;
        z-index: 99;
        left: calc(50% - 125px);
        bottom: calc(100% + 10px);
        opacity: 0;
        visibility: hidden;
        transition:all 0.2s ease-in;
}
.ihover:hover .wrap{
        opacity: 1;
        visibility: visible;
}
.ihover .wrap h3{
        font-size: 15px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 2px;
}
.ihover .wrap .txt{
        font-size: 12px;
        line-height: 150%;
        color: #677793;
}
.tbl-feat table .ihover,
#popfeat .ihover{
        top: 2px;
	margin-left: 5px;
}
.tbl-feat table td,
#popfeat  td{
        font-size: 16px;
        padding: 10px 0;
        border-bottom: 1px solid  #CED9EA;
        text-align: center;
        line-height: 150%;
        vertical-align: middle;
}
.tbl-feat table td:first-child,
#popfeat  td:first-child{
        text-align: left;
}
.ico-chk{
        width: 16px;
        height: 13px;
        display: inline-block;
        background-image: url('${CheckFeat}');
}
.inner-sign .step-2 .panel{
        margin: 0 0 25px;
        padding: 30px 60px 25px;
}
.inner-sign .step-2-2 .rowflex,
.inner-sign .step-2 .rowflex{
        justify-content: space-between;
}
.inner-sign .step-2 .rowflex .info{
        max-width: 41%;
        flex: 41%;
}
.inner-sign .step-2 .rowflex .pricing{
        width: 45%;
        max-width: 45%;
}
.inner-sign .step-2 table{
        width: 100%;
}
.inner-sign .step-2 .rowflex .info h2{
        margin-bottom: 20px;
}
.inner-sign .step-2 table td{
        padding: 0 0 15px;
        line-height: 150%;
        width: 40%;
}
.inner-sign .step-2 table td:first-child{
        width: 60%;
}
.inner-sign .step-2 table td > p > strong,
.inner-sign .step-2 table td > p > b,
.inner-sign .step-2 table td > strong,
.inner-sign .step-2 table td > b{
        font-weight: 700;
}
.inner-sign .step-2 table td > strong{
        color: #0086FF;
}
.inner-sign .step-2 table td.pduration > *{
	display: inline-block;
	vertical-align: middle;
}
.inner-sign .step-2 table td.pduration input,
.inner-sign .step-2 table td.pduration .dropselect   {
	width: 51px;
	margin: 0 12px 0 0;
}
.inner-sign .step-2 .plang{
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 15px;
}
.inner-sign .step-2 .hplang {
        margin-bottom: 10px;
}
.inner-sign .step-2 .plang h3{
        float: left;
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        position: relative;
        top: 3px;
}
.inner-sign .step-2 .hswitch{
        float: right;
}
.inner-sign .step-2 .hswitch a{
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        width: 24px;
        height: 24px;
        line-height: 22px;
        border: 1px solid #0086FF;
        border-radius: 5px;
        color: #0086FF;
        font-size: 12px;
        font-weight: 700;
}
.inner-sign .step-2 .hswitch a + a{
	margin-left: 5px;
}
.inner-sign .step-2 .hswitch a.current{
        background: #0086FF;
        color: #fff;
}
.inner-sign .step-2 .plang strong{
        display: none;
        font-size: 36px;
        font-weight: 700;
        line-height: 100%;
}
.inner-sign .step-2 .plang span.current,
.inner-sign .step-2 .plang strong.current{
        display: block;
}
.inner-sign .step-2 .plang span{
	display: block;
	color:  #677793;
	font-size: 16px;
	margin: 8px 0 0;	
	display:none;
}

.inner-sign .step-2 .txt{
        color:  #677793;
        font-size: 12px;
        line-height: 150%;
        max-width: 335px;
        margin: 0 auto;
}
.inner-sign .step-2 .txt b,
.inner-sign .step-2 .txt strong{
        font-weight: 700;
}
.inner-sign .step-2 .action .goback{
        float: left;
        position: relative;
        top: 10px;
}
.inner-sign .step-2 .list-btn{
        float: right;
}
.inner-sign .step-2 .list-btn .button{
        margin-left: 10px;
}
.inner-sign .step-2-2 .rowflex{
        margin-bottom: 30px;
}
.inner-sign .step-2-2 .hentry{
        /**margin-bottom: 30px;**/
}
.inner-sign .step-2-2 .hentry h2{
        font-size: 28px;
        margin-bottom: 1px;
}
.inner-sign .step-2-2 .person{
        max-width: 30%;
        flex: 30%;
}
.inner-sign .step-2-2 .person  figure img{
        border-radius: 50%;
}
.inner-sign .step-2-2 .person span,
.inner-sign .step-2-2 .person small{
        display: block;
        font-size: 14px;
        font-weight: 700;
        line-height: 100%;
        margin: 10px 0;
        color: #677793;
}
.inner-sign .step-2-2 .timing h2,
.inner-sign .step-2-2 .person h3{
        font-weight: 700;
        font-size: 20px;
        margin: 0 0 5px;
}
.inner-sign .step-2-2 .timing h2{
        font-size: 16px;
        margin: 0 0 20px;
}
.inner-sign .step-2-2 .timing h2 b{
	float: right;
}
.inner-sign .step-2-2 .timing h2 b:first-child{
	float: left;
}
.inner-sign .step-2-2 .person span{
        display: inline-block;
        vertical-align: middle;
        font-weight: 400;
        font-size: 16px;
}
.inner-sign .step-2-2 .person span:before{
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        background-image: url('${Clock}');
        margin-right: 9px;
        top: -2px;
}
.inner-sign .step-2-2 .person .txt{
        line-height: 150%;
        color: #677793;
}
.inner-sign .step-2-2 .timing{
        max-width: 65%;
        flex: 65%;
}
.inner-sign .step-2-2 .action .goback{
        float: left;
        position: relative;
        top: 10px;
}
.inner-sign .step-2-2 .action .button{
        float: right;
}
.inner-sign .step-2-2 .dated {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;        
}
.inner-sign .step-2-2 .dated .cal{
        flex: 100%;
        max-width: 100%;
}
.inner-sign .step-2-2 .dated .clock{
        flex: 34%;
        max-width: 34%;
}
.inner-sign .step-2-alt .package{
	margin-bottom: 35px;
}
.inner-sign .step-2-alt .package > h2{
	color: #677793;
	font-size: 20px;
	text-align: center;
	margin: 0 0 35px;
}
.inner-sign .tabby .thead a{
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	width: 50%;
	color:#283142;
	font-size: 16px;
	background: rgba(206, 217, 234, 0.6);
	border-radius: 10px 10px 0 0;
	padding: 13px 10px 11px;
	border-bottom: 4px solid #0086FF;
	transition:all 0.2s ease-in;
}
.inner-sign .tabby .thead a:not(.active):hover{
	color: #0086FF;
}
.inner-sign .tabby .thead a.active{
	color:#fff;
	background: #0086FF;
}
.inner-sign .tabby .titem{
	background: rgba(240, 243, 247, 0.5);
	border-radius: 0 0 10px 10px;
	padding: 35px 65px;
	display: none;
}
.inner-sign .tabby .titem.active{
	display: block;
}
.inner-sign .tabby .titem > h3{
	color: #000;
	font-size: 28px;
	font-weight: 700;
	line-height: 130%;
	margin: 0 0 20px;
}
.inner-sign .tabby .titem .gap{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.inner-sign .tabby .titem .gap section{
	flex: 41%;
	max-width: 41%;
}
.inner-sign .tabby .titem .gap section:first-child{
	flex: 45%;
	max-width: 45%;
}
.inner-sign .package .disclaim{
	color: #0A1126;
	font-size: 16px;
	line-height: 160%;
}
.inner-sign .package .disclaim small{
	display: block;
	color: #677793;
	font-size: 10px;
}
.inner-sign .package .disclaim a{
	color: #0086FF;
	text-decoration: underline;
}
.inner-sign .package .annon{
	position: relative;
	padding: 27px 31px 27px 62px;
	background: #fff;
	border-radius: 10px;
	color: #677793;
	font-size: 12px;
	line-height: 160%;
}
.inner-sign .package .annon > *:not(:first-child){
	margin-top: 15px;
}
.inner-sign .package .annon b,
.inner-sign .package .annon strong{
	font-weight: 700;
}
.inner-sign .package .annon:before{
	display: block;
	position: absolute;
	left: 25px;
	top: 30px;
	width: 20px;
	height: 35px;
	background-image: url('${Pointing}');
}
.inner-sign .step-2-2.fetching,
.inner-sign .step-1.fetching,
.inner-sign .step-2-alt.fetching{
	position: relative;
}
.inner-sign .step-2-2.fetching:after,
.inner-sign .step-1.fetching:after,
.inner-sign .step-2-alt.fetching:after{
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	content: '';
	background: rgba(255,255,255,.7);
}
/** DATEPICKER COACH **/
.cal .react-datepicker,
.datepicker-call .datepicker{
        width: 350px;
        font-family: 'DM Sans';
        border-radius: 4px;
        box-shadow: 2px 2px 7px 1px rgba(147, 156, 161, 0.53);
        border: none;
        padding: 25px 20px 30px;
}
.cal .react-datepicker,
.datepicker-call .datepicker{
        width: 100%;
        box-shadow: 0px 0 2px rgba(30, 30, 30, 0);
        padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.cal .react-datepicker .react-datepicker__triangle{
	display: none;
}
.cal .react-datepicker__month-container{
	flex: 60%;
	max-width: 60%;
}
.cal .react-datepicker__time-container {
	flex: 34%;
	max-width: 34%;
	border: none;
	width: 34%;
	float: none;
}
.cal .react-datepicker__navigation--next--with-time{
	right: 40%;
	top: -5px;
}
.cal .react-datepicker__navigation--previous{
	left: auto;
	right: calc(40% + 25px);
	top: -5px;
}
.cal .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box{
	width: 100%;
	border-radius: 0;
}
.datepicker-call .datepicker--nav{
        border: none;
        padding: 0;
}
.datepicker-call .datepicker--nav-title{
        order: 1;
        flex: 2;
        justify-content: initial;
        font-size: 16px;
        color: #000;
        padding: 0;
        border-radius: 0;
        font-weight: 500;
}
.cal .react-datepicker-time__header{
	display: none;
}
.cal .react-datepicker__current-month{
	text-align: left;
	color: #000;
	font-weight: 500;
	margin: 0 0 20px;
}
.datepicker-call .datepicker--nav-title i{
        color: #000;
}
.datepicker-call .datepicker--nav-action:hover,
.datepicker-call .datepicker--nav-title:hover{
        background: none;
}
.datepicker-call .datepicker--nav-action:first-child{
        order: 2;
}
.datepicker-call .datepicker--nav-title + .datepicker--nav-action{
        order: 3;
}
.datepicker-call .datepicker--nav-action{
        
}
.datepicker-call .datepicker--nav-action{
        
}
.datepicker-call .datepicker--nav-action path{
        stroke-width: 1px;
}
.datepicker-call .datepicker--days-names{      
        margin: 10px 0;
}
.cal .react-datepicker__day-names{
	margin: 0;
	position: relative;
	left: 5px;
}
.cal .react-datepicker__day-name,
.datepicker-call .datepicker--day-name{
        color: #717e8b;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
}
.datepicker-call .datepicker--cell-day{
        background: none !important;
        height: auto;
}
.datepicker-call .datepicker--cell.-range-to-,
.datepicker-call .datepicker--cell.-range-from-{
        border: none;
}

.cal .react-datepicker__day span,
.datepicker-call .datepicker--cell-day span{
        color: #677793;
        font-size: 15px;
        font-weight: 700;
        display: block;
        border: 2px solid #f5f7f9;
        box-sizing: border-box;
        width: 38px;
        height: 38px;
        line-height: 34px;
        margin: 5px auto;
        border-radius: 50%;
        text-align: center;
}
.cal .react-datepicker__day span,
.datepicker-call .datepicker--cell-day span{
        width: 50px;
        height: 49px;
        line-height: 44px;
        margin: 8px auto;
}
.cal .react-datepicker__day-name,
.cal .react-datepicker__day{
	width: 50px;
}
.datepicker-call .datepicker--cell-day.-disabled- span,
.datepicker-call .datepicker--cell-day.-other-month- span{
        background: #fafcff;
        border-color: #f5f7f9;
        color: #b8bdc1;
        opacity: .5;
}
.cal .react-datepicker__day--keyboard-selected,
.cal .react-datepicker__day--selected{
	background: none;
}
.cal  .react-datepicker__day--outside-month{
	opacity: .5;
}
.cal .react-datepicker__day--today span,
.datepicker-call .datepicker--cell.-current- span{
        background: #0b5394;
        color: #fff;
        border-color: #0b5394;
}
.cal .react-datepicker__day:hover{
	background: none;
}
.cal .react-datepicker__day:hover span,
.cal .react-datepicker__day--selected span,
.datepicker-call .datepicker--cell.-in-range- span,
.datepicker-call .datepicker--cell.-range-to- span,
.datepicker-call .datepicker--cell.-range-from- span,
.datepicker-call .datepicker--cell.-selected- span{
        background: #3ca7df;
        color: #fff;
        border-color: #3ca7df;
}
.datepicker-call .picker-action{
        text-align: center;
        padding: 15px 0 0;
}
.datepicker-call .picker-action > *{
        display: inline-block;
        vertical-align: middle;
        margin: 0 8px;
}
.datepicker-call .picker-action a:first-child{
        color: #545f69;
        font-size: 15px;
        font-weight: 700;
}
.datepicker-call .picker-action a:first-child:hover{
        text-decoration: underline;
}
.datepicker-call .picker-action .button{
        padding: 0 25px;
}

.cal .react-datepicker__month-container{
	float: none;
	width: 100%;
}
.cal .react-datepicker__header{
	background: none;
	border: none;
	padding: 0;
}
.cal .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item,
.inner-sign .step-2-2  .dated .clock a{
        display: block;
        border: 1px solid #3ca7df;
        color: #3ca7df;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        height: 50px;
        line-height: 48px;
        margin-top: 14px;
        transition:all 0.2s ease-in;
        border-radius: 3px;
	padding: 0;
}
.cal .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:first-child,
.inner-sign .step-2-2  .dated .clock a:first-child{
        margin: 0
}
.cal .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected,
.cal .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover,
.inner-sign .step-2-2  .dated .clock a:hover,
.inner-sign .step-2-2  .dated .clock a.active{
        background: #3ca7df;
        color: #fff;
}
.cal .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar{
	width: 0;  /* Remove scrollbar space */
	background: transparent;  /* Optional: just make scrollbar invisible */
}
.inner-sign .step-2-2  .dated .clock .scrollbar-inner > .scroll-element.scroll-y{
        opacity: 1;
}
.inner-sign .step-2-2  .dated .clock .scrollbar-inner > .scroll-element .scroll-element_track{
        background: none;
}
.inner-sign .step-2-2 .dated .clock span{
        display: block;
        margin-bottom: 20px;
        font-weight: 500;
}
.inner-sign .step-2-2 .dated .clock .scrollbar-inner{
        max-height: 330px !important;
}
.inner-sign .step-3 .hentry{
        text-align: center;
}
.inner-sign .step-3 .hentry h2{
        margin-bottom: 20px;
}
.inner-sign .step-3 .hentry .txt + *{
        margin-top: 40px;
}
.inner-sign .step-3 .hentry .txt b,
.inner-sign .step-3 .hentry .txt strong{
        font-weight: 700;
}
/** INNER PAGE **/
.inner-page{
	padding: 150px 0 80px;
	min-height: 80vh;
}
.inner-page .wrapper{
	max-width: 900px;
}
.inner-page .wrapper > h1{
	font-weight: 700;
	font-size: 48px;
	line-height: 120%;
	margin-bottom: 10px;
}
.notanimated{
	opacity:0;
}
:root {
	--animate-delay: 0.4s;
}
/* MEDIA QUERY FOR WEBKIT BASED BROWSER **/
@media screen and (-webkit-min-device-pixel-ratio:0) {

}

/* MEDIA QUERY FOR GECKO BASED BROWSER **/
@-moz-document url-prefix(){
        
}

.tbl-feat.for-mobile,
.inner-sign .step-2-2 .goback.for-mobile,
.inner-sign .step-2 .goback.for-mobile,
.inner-sign .step-1-2 .goback.for-mobile,
.inner-corp .cta h2.for-mobile,
.inner-sme .cta h2.for-mobile,
.inner-corp .story-mobile,
.inner-sme .story-mobile,
.inner-sme .flow-mobile,
#bottom .holder .widget h3 b,
.inner-home .help,
#top .for-mobile{
	display: none;
}
@media (max-width: 1800px) {

}
@media (min-width: 1410px) {
	.inner-sme .flow .wrapper{
		max-width: 1350px;
	}
}

@media (max-width: 1299px) {
	.wrapper{
		max-width: 100%;
		padding-left: 20px;
		padding-right: 20px;
	}
	.mainmenu li{
		margin-left: 20px;
	}
	.inner-sign .step-1-2 .caption .txt br{
		display: none;
	}
	.inner-sign .tabby .titem .gap section:first-child,
	.inner-sign .step-2 .rowflex .info,
	.inner-sign .step-1-2 .caption,
	.inner-corp .feat .copy,
	.inner-corp .story .person, .inner-sme .story .person{
		max-width: 45%;
		flex: 45%;
	}
	.inner-corp .feat .list{
		padding: 0;
	}
	.inner-sign .tabby .titem .gap section,
	.inner-sign .step-2 .rowflex .pricing{
		max-width: 50%;
		flex: 50%;
	}
	.inner-sign .tabby .titem,
	.inner-sign .step-2 .panel{
		padding: 30px 30px 25px;
	}
	.inner-sign .step-2-2 .timing,
	.inner-sign .step-2-2 .person{
		flex: 100%;
		max-width: 100%;
	}
	.inner-sign .step-2-2 .person{
		margin: 0 0 50px;
	}
	.inner-home .resource .slidenav{
		-ms-transform: translateY(0%);
		-webkit-transform: translateY(0%);
		transform: translateY(0%);
		top: -80px;
	}
	.inner-home .resource .slidenav a.prev{
		left: 0;
	}
	.inner-home .resource .slidenav a.next{
		right: 0;
	}
}
@media (max-width: 1099px) {
	#top .logo,
	#top .mainmenu{
		float: none;
	}
	#top .mainmenu{
		margin-top: 10px;
	}
}

@media (max-width: 991px) {
	#top .mainmenu li.for-desktop,
	.mainmenu li.lang a.cvr-bg+b,
	.inner-corp .story-mobile .caption span br,
	.inner-sme .story-mobile .caption span br,
	.inner-corp .story .person span br,
	.inner-sme .story .person span br,
	.mainmenu li ul:before{
		display: none;
	}
	#top{
		padding: 10px 0;
		background: #fff;
	}
	body:not(.open-menu) .white-head:not(.body-sign) #top:not(.is-sticky){
		background: rgba(0,0,0,0);
	}
	#top .mainmenu{
		opacity: 0;
		visibility: hidden;
		transition:all 0.2s ease-in;
		position: absolute;
		left: 0;
		top: 53px;
		width: 100%;
		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f6f6f6+0,f8f8f8+1,f6f6f6+1,f6f6f6+3,f8f8f8+3,f7f7f7+3,ffffff+7,ffffff+100,fcfcfc+100 */
		background: rgb(246,246,246); /* Old browsers */
		background: -moz-linear-gradient(top,  rgba(246,246,246,1) 0%, rgba(248,248,248,1) 1%, rgba(246,246,246,1) 1%, rgba(246,246,246,1) 3%, rgba(248,248,248,1) 3%, rgba(247,247,247,1) 3%, rgba(255,255,255,1) 7%, rgba(255,255,255,1) 100%, rgba(252,252,252,1) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top,  rgba(246,246,246,1) 0%,rgba(248,248,248,1) 1%,rgba(246,246,246,1) 1%,rgba(246,246,246,1) 3%,rgba(248,248,248,1) 3%,rgba(247,247,247,1) 3%,rgba(255,255,255,1) 7%,rgba(255,255,255,1) 100%,rgba(252,252,252,1) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom,  rgba(246,246,246,1) 0%,rgba(248,248,248,1) 1%,rgba(246,246,246,1) 1%,rgba(246,246,246,1) 3%,rgba(248,248,248,1) 3%,rgba(247,247,247,1) 3%,rgba(255,255,255,1) 7%,rgba(255,255,255,1) 100%,rgba(252,252,252,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6f6f6', endColorstr='#fcfcfc',GradientType=0 ); /* IE6-9 */
		padding: 20px 20px 30px;
		margin: 0;
		overflow-y: scroll;
		max-height: calc(100vh - 53px);
	}
	body.open-menu #top .mainmenu{
		opacity: 1;
		visibility: visible;
	}
	.mainmenu li:first-child,
	.mainmenu li{
		display: block;
		line-height: 160%;
		margin: 20px 0 0;
		position: relative;
	}
	.mainmenu li.btn-menu a,
	.mainmenu li.btn-menu-hollow a{
		display: block;
		width: 100%;
	}
	.mainmenu li ul li:first-child,
	.mainmenu li:first-child{
		margin: 0;
	}
	.mainmenu li.menu-item-has-children > b{
		position: absolute;
		right: 0;
		top: 10px;
		margin: 0;
		transition:all 0s ease-in !important;
	}
	.mainmenu li:hover ul,
	.mainmenu li ul{
		position: relative;
		left: auto;
		top: auto;
		margin: 15px 0 0;
		opacity: 1;
		visibility: visible;
		padding: 0;
		background: none;
		border: none;
		box-shadow: 0 0 0 0 rgba(0,0,0,0);
		padding: 0 0 0 20px;
		width: 100%;
		min-width: 1px;
		display: none;
		transition:all 0s ease-in;
	}
	.mainmenu li b.expanded + ul{
		display:block;
	}
	.mainmenu li.lang ul li,
	.mainmenu li.lang ul{
		display: inline-block;
	}
	.mainmenu li.lang ul li{
		margin: 0 10px 0 0;
	}
	.mainmenu li ul li{
		margin-top: 15px;
	}
	.mainmenu li:hover > b, .mainmenu li.menu-item-has-children > b:hover{
		transform: rotate(0deg);
		filter: brightness(0%);
	}
	.mainmenu li > b.expanded{
		transform: rotate(180deg) !important;
		filter: brightness(100%) !important;
	}
	.mainmenu li.expanded:not(.btn-menu):not(.btn-menu-hollow) > a{
		color: #0086FF;
	}
	#top .logo{
		float: left;
		width: 65px;
		position: relative;
		top: 7px;
	}
	#top .for-mobile{
		display: block;
		float: right;
	}
	#top .mainmenu li.for-mobile{
		float: none;
	}
	#top .for-mobile .button{
		height: 33px;
		line-height: 31px;
		border: 1px solid #0086FF;
		padding: 0 14px;
	}
        body:not(.open-menu) .white-head:not(.body-sign)  #top:not(.is-sticky) .for-mobile .button{
                background: none;
                border: 1px solid #fff;
                color: #fff;
        }
        body:not(.open-menu) .white-head:not(.body-sign)  #top:not(.is-sticky) .for-mobile .button:hover{
                color: #0086FF;
                background: #fff;
                border: 1px solid #fff;
        }
	.mobile-trigger{
		display: inline-block;
		position: relative;
		margin-left: 9px;
	}
	.menu-mobile{
		width: 20px;
		height: 15px;
		position: relative;
		display: inline-block;
		top: 3px;
	}
	.menu-mobile .menu-bar b:after,
	.menu-mobile .menu-bar b:before,
	.menu-mobile .menu-bar b{
		position: absolute;
		width: 100%;
		height: 2px;
		left: 0;
		top: 6px;
		background: #000;
		display: block;
	}
	body:not(.open-menu) .white-head:not(.body-sign)  #top:not(.is-sticky) .menu-mobile .menu-bar b:after,
	body:not(.open-menu) .white-head:not(.body-sign)  #top:not(.is-sticky) .menu-mobile .menu-bar b:before,
	body:not(.open-menu) .white-head:not(.body-sign)  #top:not(.is-sticky) .menu-mobile .menu-bar b{
		background: #fff;
	}
	.menu-mobile .menu-bar b{
		-webkit-transition:background 300ms ;
		-moz-transition:background 300ms ;
		-o-transition:background 300ms ;
		-ms-transition:background 300ms ;
		transition:background 300ms ;
	}
	.menu-mobile .menu-bar b:after,
	.menu-mobile .menu-bar b:before{
		content: '';
		-webkit-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
		-moz-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
		-o-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
		-ms-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
		transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
	}
	
	.menu-mobile .menu-bar b:after{
		top: 6px;
	}
	.menu-mobile .menu-bar b:before{
		top: -6px;
	}
	.open-menu .menu-mobile  .menu-bar b:after,
	.open-menu .menu-mobile  .menu-bar b:before{
		top:0;
		-webkit-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
		-moz-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
		-o-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
		-ms-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
		transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
		left: 0;
	}
	.open-menu .white-head #top:not(.is-sticky) .menu-mobile  .menu-bar b,
	.open-menu .menu-mobile  .menu-bar b{
		background: rgba(0,0,0,0);
	}
	.open-menu .menu-mobile  .menu-bar b:after{
	    -ms-transform: rotate(45deg); /* IE 9 */
	    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
	    transform: rotate(45deg);
	}
	.open-menu .menu-mobile  .menu-bar b:before{
	    -ms-transform: rotate(-45deg); /* IE 9 */
	    -webkit-transform: rotate(-45deg); /* Chrome, Safari, Opera */
	    transform: rotate(-45deg);
	}
	.watrig{
		width: 65px;
		height: 65px;
		bottom: 30px;
	}
	.inner-corp .hero .bg,
	.inner-sme .hero .bg,
	.inner-home .hero .bg{
		background-image: var(--mobile) !important;
	}
	.inner-home .hero{
		background: #fff;
	}
	.inner-home .help{
		display: block;
		padding-top: 50px;
	}
	.inner-home .help .item h3,
	.inner-home .help h2{
		font-size: 28px;
		font-weight: 700;
		line-height: 130%;
		margin: 0 0 35px;
		text-align: center;
	}
	.inner-home .help .item{
		margin-top: 20px;
		min-height: 225px;
		position: relative;
		padding: 20px 30px;
		border-radius: 10px;
		overflow: hidden;
		color: #fff;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
	}
	.inner-home .help .item .bg{
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.inner-home .help .item .caption{
		position: relative;
		z-index: 2;
		padding-bottom: 30px;
	}
	.inner-home .help .item:first-child{
		margin: 0;
	}
	.inner-home .help .item .more{
		color: #fff;
		position: absolute;
		left: 30px;
		bottom: 20px;
		text-transform: uppercase;
		z-index: 2;
	}
	.inner-home .help .item h3{
		text-align: left;
		margin: 0 0 10px;
	}
	.inner-home .help .item a{
		color: #fff;
		display: block;
	}
	#bottom .info{
		flex: 35%;
		max-width: 35%;
	}
	.inner-corp .feat .copy,
	.inner-corp .feat .list,
	.inner-corp .company .thumb, .inner-corp .company .copy,
	.inner-corp .story .copy, .inner-sme .story .copy,
	.inner-corp .story .person, .inner-sme .story .person{
		flex: 100%;
		max-width: 100%;
	}
	.inner-corp .story .person, .inner-sme .story .person{
		display: flex;
		flex-wrap: wrap;
		margin: 0 -10px;
	}
	.inner-corp .story .person .item:first-child, .inner-sme .story .person .item:first-child,
	.inner-corp .story .person .item, .inner-sme .story .person .item{
		flex: calc(33.333333333333333% - 20px);
		max-width: calc(33.333333333333333% - 20px);
		margin: 0 10px 20px;
	}
	.inner-corp .story .person .item .caption, .inner-sme .story .person .item .caption,
	.inner-corp .story .person .item figure, .inner-sme .story .person .item figure{
		width: 100%;
		display: block;
		text-align: center;
		padding: 0;
	}
	
	.inner-corp .story .person .item figure,
	.inner-sme .story .person .item figure{
		margin-bottom: 15px;
	}
	.inner-corp .story .person span, .inner-sme .story .person span{
		font-size: 16px;
	}
	.inner-corp .story .person h3, .inner-sme .story .person h3{
		font-size: 20px;
		margin-bottom: 5px;
	}
	.inner-corp .cta .holder,
	.inner-sme .cta .holder{
		width: 50%;
	}
	.inner-corp .cta,
	.inner-sme .cta{
		padding: 50px 0;
	}
	.inner-corp .company .copy{
		text-align: center;
		margin: 0 0 30px;
		top: auto;
	}
	.inner-corp .company .thumb{
		margin: 0;
	}
	.inner-corp .advan .rowflex{
		justify-content: center;
	}
	.inner-corp .advan .item {
		max-width: calc( 50% - 32px);
		flex: calc( 50% - 32px);
	}
	.inner-corp .feat .copy{
		margin-bottom: 30px;
	}
	.body-sign{
		background: none;
		padding: 0;
	}
	.white-head.body-sign .logo{
		filter: brightness(1) invert(0) !important;
	}
	.inner-sign{
		position: relative;
		padding: 90px 0 35px;
	}
	.inner-sign:before{
		display: block;
		position: absolute;
		left: 0;
		top: 53px;
		width: 100%;
		height: 200px;
		z-index: 1;
		content: '';
		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f6f6f6+0,f8f8f8+1,f6f6f6+1,f6f6f6+3,f8f8f8+3,f7f7f7+3,ffffff+7,ffffff+100,fcfcfc+100 */
		background: rgb(246,246,246); /* Old browsers */
		background: -moz-linear-gradient(top,  rgba(246,246,246,1) 0%, rgba(248,248,248,1) 1%, rgba(246,246,246,1) 1%, rgba(246,246,246,1) 3%, rgba(248,248,248,1) 3%, rgba(247,247,247,1) 3%, rgba(255,255,255,1) 7%, rgba(255,255,255,1) 100%, rgba(252,252,252,1) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top,  rgba(246,246,246,1) 0%,rgba(248,248,248,1) 1%,rgba(246,246,246,1) 1%,rgba(246,246,246,1) 3%,rgba(248,248,248,1) 3%,rgba(247,247,247,1) 3%,rgba(255,255,255,1) 7%,rgba(255,255,255,1) 100%,rgba(252,252,252,1) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom,  rgba(246,246,246,1) 0%,rgba(248,248,248,1) 1%,rgba(246,246,246,1) 1%,rgba(246,246,246,1) 3%,rgba(248,248,248,1) 3%,rgba(247,247,247,1) 3%,rgba(255,255,255,1) 7%,rgba(255,255,255,1) 100%,rgba(252,252,252,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6f6f6', endColorstr='#fcfcfc',GradientType=0 ); /* IE6-9 */
	}
	.inner-sign > *{
		position: relative;
		z-index: 2;
	}
	.inner-sign .layer{
		padding: 0;
		background: none;
		box-shadow: none;
	}
	.inner-sign .step-1 .panel .gap > *{
		flex: 48%;
		max-width: 48%;
	}
	body:not(.open-menu) .white-head #top:not(.is-sticky) .logo{
		filter: brightness(0) invert(1);
	}
	body.open-menu .white-head #top:not(.is-sticky) .logo{
		filter: none;
	}
}
@media only screen and (min-width: 769px) and (max-width: 991px)  {

}
@media (max-width: 768px) {
	.inner-sign .package .disclaim p small,
	.inner-sign .step-3 .hentry h2 br,
	.inner-sign .step-2-2 .action .goback,
	.inner-sign .step-2-2 .person,
	.inner-sign .step-2 .action .goback,
	.inner-sign .step-1-2 .caption .checks small,
	.inner-sign .step-1-2 .caption .goback,
	.inner-sign .step-1-2 .form-basic .fgroup label,
	.inner-corp .story-mobile .txt blockquote br,
	.inner-corp .story.for-desktop, 
	.inner-corp .advan .item h3 br,
	.inner-corp .cta h2.for-desktop,
	.inner-sme .cta h2.for-desktop,
	.inner-sme .story.for-desktop, 
	.inner-sme .flow.for-desktop{
		display: none;
	}
	
	.inner-home .resource .item figure{
		min-height: 174px;
	}
	
	.inner-home .hero{
		align-items: flex-end;
	}
	.inner-home .hero .layer{
		max-width: 345px;
		margin: 0 auto;
		padding: 30px 25px;
		text-align: center;
		position: relative;
		bottom: 60px;
	}
	.inner-home .hero .layer .form-basic{
		text-align: left;
	}
	.inner-home .hero .layer .form-basic form > *{
		margin-top: 11px;
	}
	.inner-home .hero .layer .button{
		display: block;
		width: 100%;
	}
	.inner-corp .company .copy,
	.inner-home .client h2{
		font-weight: 400;
	}
	.inner-corp .company .copy b,
	.inner-corp .company .copy strong,
	.inner-home .client h2 b{
		font-weight: 700;
	}
	.inner-home .client .list{
		display: flex;
		flex-wrap: wrap;
	}
	.inner-home .client .list > *{
		flex: calc(25% - 20px);
		max-width:  calc(25% - 20px);
		margin: 0 10px 20px;
		height: auto;
	}
	.inner-home .client{
		padding: 40px 0;
		background: rgba(240, 243, 247, 0.4);
	}
	.inner-home .reason{
		padding-top: 80px;
	}
	.inner-home .reason .item{
		flex: 100%;
		max-width: 100%;
		margin: 40px 0 0;
		background: none;
		padding: 0;
		box-shadow: none;
	}
	 .inner-home .reason .item .txt > *{
		max-width: 230px;
		margin: 0 auto;
	 }
	 
	 .inner-home .process .hentry{
		margin-bottom: 30px;
	 }
	 .inner-home .process .hentry h2{
		margin-bottom: 20px;
	 }
	.inner-sign .step-1-2 figure,
	.inner-home .process .item:nth-child(even) figure{
		order: 1;
	}
	 .inner-sign .step-1-2 .caption,
	 .inner-home .process .item:nth-child(even) .caption{
		order: 2;
	 }
	 .inner-home .process .item .caption, .inner-home .process .item figure{
		flex: 100%;
		max-width: 100%;
		text-align: center;
		margin: 0 0 20px;
	 }
	 .inner-home .process .item .caption{
		padding: 0 !important;
		text-align: center;
		border: none;
		max-width: 320px;
		margin: 0 auto;
	 }
	 .inner-home .process .item:nth-child(even) .caption .txt,
	 .inner-home .process .item:nth-child(even) .caption h3,
	 .inner-home .process .item .txt,
	 .inner-home .process .item h3{
		text-align: center;
	 }

	 .inner-home .process .item{
		margin-top: 40px;
	 }
	 .inner-home .process{
		padding: 60px 0 70px;
	 }
	 .inner-home .resource{
		padding-top: 35px;
	 }
	.inner-home .resource .slick-slide{
	       width: 260px;
	       margin: 0 15px 0 0;
	}
	.inner-home .resource .slider{
		margin-right: -20px;
	}
	.inner-home .resource .item .caption{
		padding: 25px 15px;
	}
	.inner-home .process .item .txt{
		line-height: 180%;
	}
	.inner-home .cta .bg{
		background-image: var(--mobile) !important;
		background-position: bottom center;
	}
	.inner-home .cta .holder{
		float: none;
		text-align: center;
		width: 300px;
		margin: 0 auto;
	}
	.inner-home .cta{
		padding: 65px 0 260px;
	}
	#bottom .info,
	#bottom .holder,
	#bottom .holder .widget{
		flex: 100%;
		max-width: 100%;
	}
	#bottom{
		padding: 30px 0 15px;
	}
	 #bottom .info{
		margin-bottom: 50px;
	 }
	 #bottom .info .txt{
		max-width: 280px;
		line-height: 180%;
	 }
	 #bottom .widget h3{
		margin-bottom: 15px;
		position: relative;
	}
	#bottom .holder .widget h3 b{
		display: inline-block;
		top: 5px;
		right: 0;
		width: 10px;
		height: 6px;
		background-image: url('${TriangleMenu}');
		//transition: transform 0.2s ease-in;
		transform: rotate(0deg);
		filter: brightness(0%);
		position: absolute;
	}
	#bottom .holder .widget h3.expanded b{
		transform: rotate(180deg);
	}
	#bottom .holder .widget{
		margin-top: 13px;
		padding: 0 15px;
	}
	#bottom .holder .widget ul{
		padding-left: 10px;
		display: none;
		padding-bottom: 10px;
	}
	#bottom .holder .widget h3.expanded + ul{
		display:block;
	}
	#bottom .footer-widget{
		margin-bottom: 45px;
	}
	#bottom .tribute ul{
		text-align: right;
	}
	#bottom .tribute p{
		max-width: 40%;
		flex: 40%;
	}
	#bottom .widget li a{
		color: #677793;
	}
	.inner-corp .hero,
	.inner-sme .hero{
		align-items: flex-end;
	}
	.inner-corp .hero .holder,
	.inner-sme .hero .holder{
		max-width: 330px;
		margin: 0 auto;
		text-align: center;
		top: -250px;
	}
	.inner-corp .advan h2,
	.inner-corp .hero .holder{
		top: auto;
		margin-bottom: 40px;
	}
	.inner-corp .hero .txt + .button,
	.inner-sme .hero .txt + .button{
		display: block;
		width: 100%;
	}
	.inner-sme .flow-mobile{
		display: block;
		margin-top: -200px;
		position: relative;
		z-index: 2;
	}
	.inner-corp .story-mobile h2,
	.inner-sme .story-mobile h2,
	.inner-sme .flow-mobile .item h3,
	.inner-sme .flow-mobile h2{
		text-align: center;
		color: #fff;
		font-weight: 700;
		font-size: 28px;
		margin-bottom: 20px;
		line-height: 130%;
	}
	.inner-sme .flow-mobile .slider{
		margin-right: -20px;
		margin-left: -20px;
	}
	.inner-sme .flow-mobile .slick-slide{
		width: 285px;
		background: #fff;
		position: relative;
		border-bottom-width: 5px;
		border-style: solid;
		border-radius: 10px 10px 0 0;
		overflow: hidden;
		margin-right: 12px;
		float: none;
		height: auto;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
	}
	.inner-sme .flow-mobile .slick-slider .slick-list{
		padding-left: 10px !important;
	}
	.inner-sme .flow-mobile .slick-slider .slick-track{
		display: flex;
	}
	.inner-sme .flow-mobile .item .caption{
		padding: 20px 18px 45px;
	}
	.inner-sme .flow-mobile .item h3{
		text-align: left;
		margin-bottom: 10px;
		color: #000;
	}
	.inner-sme .flow-mobile .item .txt{
		color: #677793;
		font-size: 16px;
		line-height: 175%;
	}
	.inner-corp .story-mobile,
	.inner-sme .story-mobile{
		display: block;
		padding: 50px 0 35px;
		margin: 30px 0 0;
		background: rgba(162, 244, 230, 0.3);
	}
	.inner-corp .story-mobile h2,
	.inner-sme .story-mobile h2{
		color: #000;
	}
	.inner-corp .story-mobile .slider,
	.inner-sme .story-mobile .slider{
		position: relative;
	}
	.inner-corp .story-mobile .txt,
	.inner-sme .story-mobile .txt{
		background: #fff;
		max-width: 290px;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
		border-radius: 10px;
		margin: 0 auto 25px;
		padding: 30px 20px;
		text-align: center;
		font-size: 13px;
		line-height: 185%;
	}
	.inner-corp .story-mobile .txt > *,
	.inner-sme .story-mobile .txt > *{
		display: block;
		margin-top: 20px;
	}
	.inner-corp .story-mobile .txt > *:first-child,
	.inner-sme .story-mobile .txt > *:first-child{
		margin: 0;
	}
	.inner-corp .story-mobile .txt blockquote,
	.inner-sme .story-mobile .txt blockquote{
		font-size: 16px;
	}
	.inner-corp .story-mobile .author,
	.inner-sme .story-mobile .author{
		max-width: 245px;
		margin: 0 auto;
	}
	.inner-corp .story-mobile .author > *,
	.inner-sme .story-mobile .author > *{
		display: inline-block;
		vertical-align: top;
	}
	.inner-corp .story-mobile .author figure,
	.inner-sme .story-mobile .author figure{
		width: 54px;
	}
	.inner-corp .story-mobile .author figure img,
	.inner-sme .story-mobile .author figure img{
		border-radius: 50%;
	}
	.inner-corp .story-mobile .author .caption,
	.inner-sme .story-mobile .author .caption{
		width: calc(100% - 60px);
		padding-left: 15px;
	}
	.inner-corp .story-mobile .author h3,
	.inner-sme .story-mobile .author h3{
		font-size: 20px;
		font-weight: 700;
		line-height: 130%;
		margin-bottom: 5px;
	}
	.inner-corp .story-mobile .author span,
	.inner-sme .story-mobile .author span{
		color: #677793;
		font-size: 13px;
		line-height: 140%;
		display: block;
		margin: 0 0 7px;
	}
	.inner-corp .story-mobile .slick-dots,
	.inner-sme .story-mobile .slick-dots{
		margin-top: 25px;
	}
	.inner-corp .story-mobile .slidenav a.prev,
	.inner-sme .story-mobile .slidenav a.prev{
		left: -8px;
	}
	.inner-corp .story-mobile .slidenav a.next,
	.inner-sme .story-mobile .slidenav a.next{
		right: -8px;
	}
	.inner-corp .story-mobile .slidenav,
	.inner-sme .story-mobile .slidenav{
		top: 150px;
	}
	.inner-corp .story-mobile .slidenav a.slick-disabled,
	.inner-sme .story-mobile .slidenav a.slick-disabled{
		opacity: 0;
		visibility: hidden;
	}
	.inner-corp .cta,
	.inner-sme .cta{
		padding: 85px 0;
	}
	.inner-corp .cta .holder,
	.inner-sme .cta .holder{
		float: none;
		padding-left: 5px;
		width: 70%;
	}
	.inner-corp .faq .hentry h2,
	.inner-sme .faq .hentry h2{
		margin-bottom: 5px;
	}
	
	.inner-corp .faq .hentry,
	.inner-sme .faq .hentry,
	.inner-corp .cta h2,
	.inner-sme .cta h2{
		margin-bottom: 20px;
	}
	.inner-corp .cta .bg,
	.inner-sme .cta .bg{
		background-image: var(--mobile) !important;
		background-position: bottom right;
	}
	.inner-corp .cta h2.for-mobile,
	.inner-sme .cta h2.for-mobile{
		display: block;
	}
	.accord-item{
		padding: 17px 15px;
		border-top-width: 2px !important;
	}
	.inner-sme .faq .format-text,
	.inner-corp .faq .format-text{
		padding-right: 20px;
	}
	.accord-item .acc-head{
		padding-right: 50px;
	}
	.accord-item .acc-head:before{
		width: 8px;
		height: 5px;
		top: 5px;
	}
	.accord-item .acc-head h3{
		line-height: 170%;
	}
	.accord-item .acc-body{
		padding-top: 20px;
	}
	.inner-corp .request .wrapper,
	.inner-sme .request .wrapper{
		padding: 0;
		max-width: 280px;
	}
	.inner-corp .request h2,
	.inner-sme .request h2{
		margin-bottom: 17px;
	}
	.inner-corp .request .txt + .button, .inner-sme .request .txt + .button{
		width: 100%;
		margin: 45px 0 0;
	}
	.inner-corp .request, .inner-sme .request{
		padding: 37px 0;
		margin-top: 40px;
	}
	.inner-corp .advan,
	.inner-corp .company{
		padding-top: 40px;
	}
	.inner-corp .advan .rowflex{
		display: block;
	}
	.inner-corp .advan .item{
		max-width: 310px;
		margin: 0 auto 30px;
		border-radius: 10px 10px 0 0;
		padding: 23px 24px 25px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.inner-corp .advan .item figure{
		max-width: 12%;
		flex:12%;
	}
	.inner-corp .advan .item .caption{
		max-width: 80%;
		flex: 80%;
		text-align: left;
	}
	.inner-corp .advan .item h3{
		margin: 0 0 15px;
	}
	.inner-corp .advan .item .txt{
		max-width: 100%;
		line-height: 185%;
	}
	.inner-corp .advan{
		margin-top: 30px;
		padding-bottom: 50px;
	}
	.inner-corp .feat{
		padding-top: 40px;
	}
	.inner-corp .feat .copy{
		text-align: center;
	}	
	.inner-corp .feat .list li:before{
		width: 14px;
		height: 12px;
		left: 22px;
		top: 16px;
	}
	.inner-corp .feat .list li{
		padding-top: 10px;
		margin-top: 10px;
		padding-left: 60px;
	}
	.inner-corp .feat .list li:first-child:before{
		top: 5px;
	}
	.inner-sign .timeline span b{
		width: 20px;
		height: 20px;
		line-height: 22px;
		font-weight: 400;		
	}
	.inner-sign .timeline span:before,
	.inner-sign .timeline:before{
		height: 3px;
		top: 10px;
	}
	.inner-sign .timeline{
		max-width: 320px;
	}
	.inner-sign .timeline span small{
		left: 3px;
	}
	.inner-sign .timeline span:last-child small{
		left: 0px;
	}
	.inner-sign .timeline span:nth-child(3) b{
		right: -2px;
	}
	.inner-sign .timeline span:nth-child(2) b{
		right: 10px;
	}
	.inner-sign .timeline span:nth-child(2) small{
		left: 10px;	
	}
	.inner-sign .timeline span.current.and-half:before{
		width: calc(100% + 35px);
	}
	.inner-sign .step-1 .panel:first-child,
	.inner-sign .step-1 .panel{
		margin-left: -20px;
		margin-right: -20px;
		border-radius: 0;
		background: rgba(240, 243, 247, 0.5);
		padding: 25px 20px 30px;
	}
	.inner-sign .step-2-2 .hentry,
	.inner-sign .step-1 .hentry{
		margin-bottom: 30px;
	}
	.inner-sign .step-2 .panel h2,
	.inner-sign .step-1 .panel h3{
		text-align: center;
	}
	.inner-sign .tabby .titem .gap section,
	.inner-sign .tabby .titem .gap section:first-child,
	.inner-sign .step-2-2 .dated .clock,
	.inner-sign .step-2-2 .dated .cal,
	.inner-sign .step-2 .rowflex .pricing,
	.inner-sign .step-2 .rowflex .info,
	.inner-sign .step-1-2 .caption,
	.inner-sign .step-1-2 figure,
	.inner-sign .step-1 .panel .fgroup label + *,
	.inner-sign .step-1 .panel .fgroup label,
	.inner-sign .step-1 .panel .gap > *{
		flex: 100%;
		max-width: 100%;
	}
	.inner-sign .step-2-2 .dated .clock,
	.inner-sign .step-1 .panel .fgroup,
	.inner-sign .step-1 .panel .gap > *{
		margin-top: 15px;
	}
	.inner-sign .step-1 .panel .fgroup label{
		margin-bottom: 3px;
	}
	.inner-sign .checks label span:before{
		top: -1px;
	}
	.inner-sign .checks + .button{
		display:block;
		width: 100%;
		max-width: 330px;
		margin: 30px auto 0;
	}
	/**
	.inner-sign .step-1 .panel:first-child .col:first-child .fgroup:nth-child(2){
		position: relative;
		top: 70px;
	}
	.inner-sign .step-1 .panel:first-child .col:first-child + .col .fgroup{
		position: relative;
		top: -65px;
	}
	**/
	.inner-sign .step-1-2 figure{
		max-width: 290px;
		margin: 0 auto 15px;
	}
	.inner-sign .step-1-2 .caption h2,
	.inner-sign .step-1-2 .caption .txt{
		text-align: center;
	}
	.inner-sign .step-1-2 .form-basic .item > *{
		display: inline-block;
		vertical-align: middle;
	}
	.inner-sign .step-1-2 .form-basic .item .fgroup{
		width: 50px;
	}
	.inner-sign .step-1-2 .form-basic .item h3{
		width: calc( 100% - 60px);
		margin: 0;
		padding-right: 30px;
	}
	.inner-sign .step-2-2 .goback.for-mobile,
	.inner-sign .step-2 .goback.for-mobile,
	.inner-sign .step-1-2 .goback.for-mobile{
		display: inline-block;
		margin-bottom: 25px;
	}
	.tbl-feat.for-mobile{
		display: block;
		margin-top: 30px;
	}
	.ihover .wrap{
		left: -60px;
	}
	.ico-chk{
		width: 13px;
		height: 11px;
	}
	.inner-sign .step-2 .tbl-feat table td,
	.tbl-feat table td{
		padding: 8px 0;
	}
	.tbl-feat table th:first-child{
		width: 50%;
	}
	.tbl-feat .expand-tbl{
		padding-top: 20px;
		text-align: center;
	}
	.tbl-feat .expand-tbl a{
		display: inline-block;
		color: #0086FF;
		font-size: 13px;
		text-transform: uppercase;
	}
	.tbl-feat .expand-tbl a:after{
		width: 14px;
		height: 9px;
		background-image: url('${ArrowFeat}');
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: 15px;
		top: -1px;
	}
	.tbl-feat.expanded .expand-tbl a.feat-show,
	.tbl-feat .expand-tbl a.feat-hide{
		display: none;
	}
	.tbl-feat.expanded .expand-tbl a.feat-hide{
		display: inline-block;
	}
	.tbl-feat .expand-tbl a.feat-hide:after{
		transform: rotate(180deg);
		top: -2px;
	}
	.tbl-feat:not(.expanded) .tbl-wrap{
		height: 190px;
		overflow: hidden;
		position: relative;
	}
	.tbl-feat:not(.expanded) .tbl-wrap:after{
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 80%;
		z-index: 2;
		content: '';
		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f0f3f7+0,f3f4f7+100&0+0,0.78+100 */
		background: -moz-linear-gradient(top,  rgba(240,243,247,0) 0%, rgba(243,244,247,0.78) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top,  rgba(240,243,247,0) 0%,rgba(243,244,247,0.78) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom,  rgba(240,243,247,0) 0%,rgba(243,244,247,0.78) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00f0f3f7', endColorstr='#c7f3f4f7',GradientType=0 ); /* IE6-9 */
		

	}
	.inner-sign .step-1-2 .action{
		max-width: 335px;
	}
	.inner-sign .step-1-2 .action .button{
		max-width: 100%;
		width: 100%;
		display: block;
		margin: 0 0 15px;
	}
	.inner-sign .step-1-2 .action .copy{
		max-width: 285px;
		margin: 0 auto;
		text-align: center;
		display: block;
	}
	.tbl-feat table .ihover{
		top: 3px;
	}
	.inner-sign .step-2 .panel{
		padding: 0;
		border-radius: 0;
		background: none;
	}
	.inner-sign .tabby .titem{
		padding: 29px 14px;
	}
	.inner-sign .step-2 .plang{
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
		padding: 15px;
	}
	.inner-sign .step-2 .rowflex .info h2{
		margin-bottom: 40px;
	}
	.inner-sign .step-2 .list-btn{
		float: none;
		max-width: 335px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
	}
	.inner-sign .step-2 .list-btn > a{
		display: block;
		width: 100%;
		order: 1;
		margin: 0 0 5px !important;
	}
	.inner-sign .step-2 .list-btn > a:first-child{
		order: 2;
	}
	.inner-sign .step-2-2 .hentry{
		text-align: center;
	}	
	.inner-sign .step-2-2 .action{
		display: block;
		width: 100%;
		max-width: 335px;
		margin: 0 auto;
	}
	.inner-sign .step-2-2 .action .button{
		float: none;
		display: block;
		width: 100%;
	}
	.datepicker-call .datepicker--cell-day span{
		width: 35px;
		height: 34px;
		line-height: 31px;
		font-size: 13px;
	}
	.inner-sign .step-2-2 .dated .clock a{
		max-width: calc(100% - 30px);
	}
	.inner-sign .step-2-2 .dated .clock .wrap{
		position: relative;
		left: 15px;
	}
	.inner-sign .step-2-2 .dated .clock .scrollbar-inner{
		max-height: 180px !important;
	}
	.inner-sign .step-3 .hentry{
		max-width: 335px;
		margin: 0 auto;
	}
	.inner-sign .step-3 .hentry .button{
		display: block;
		width: 100%;
	}
	.cal .react-datepicker__time-container,
	.cal .react-datepicker__month-container {
		flex: 100%;
		max-width: 100%;
	}
	.cal .react-datepicker__time-container{
		margin: 30px 0 0;
	}
	.cal .react-datepicker__navigation--next--with-time{
		right: 0;
	}
	.cal .react-datepicker__navigation--previous{
		right:25px;
	}
	.cal .react-datepicker__day-name, .cal .react-datepicker__day{
		width: 40px;
	}
	.cal .react-datepicker__day span, .datepicker-call .datepicker--cell-day span{
		width: 40px;
		height: 39px;
		line-height: 34px;
	}
	.cal .react-datepicker__month{
		margin: 0;
	}
	.cal .react-datepicker__day-names{
		left: 0;
	}
	.inner-sign .step-2-2 .timing h2 b,
	.inner-sign .step-2-2 .timing h2 b:first-child{
		float: none;
		display: block;
	}
	.inner-sign .step-2-2 .timing h2 b:first-child{
		margin: 0 0 15px;
	}
	.inner-page{
		padding: 80px 0;
	}
	.inner-sign .step-2-alt .package{
		margin-left: -20px;
		margin-right: -20px;
	}
	.inner-sign .tabby .titem>h3{
		margin: 0 0 20px;
		text-align: center;
	}
	.inner-sign .tabby .titem .gap section:first-child{
		margin-bottom: 30px;
	}
	.inner-sign .tabby .thead a{
		padding: 13px 5px 11px;
	}
	.inner-home .resource .slidenav,
	.inner-home .resource h2{
		font-size: 24px;
		margin-bottom: 30px;
		display:none;
	}
	.inner-home .resource .slidenav{
		top: -54px;
	}
	.inner-home .resource .slidenav a.next{
		right: 20px;
	}
	.inner-sign .step-2 .hswitch a{
		width: 34px;
		height: 34px;
		line-height: 32px;
		font-size: 14px;
	}
	.inner-sign .step-2 .plang h3{
		top: 9px;
	}
	.inner-home .video .holder i{
		width: 80px;
		height: 80px;
	}

	/** FONT SIZE **/
	
	.inner-home .cta h2{
	       font-size: 36px;
	}
	.inner-home .video h2,
	.inner-page .wrapper > h1,
	.inner-sign .step-2 .plang strong,
	.inner-corp .faq .hentry h2,
	.inner-corp .advan h2,
	.inner-corp .hero h2,
	.inner-corp .request h2,
	.inner-sme .request h2,
	.inner-sme .faq .hentry h2,
	.inner-corp .cta h2,
	.inner-sme .cta h2,
	.inner-sme .hero h2,
	.inner-home .process .hentry h2,
	.inner-home .reason .item h3,
	.inner-home .reason h2,
	.inner-home .hero h2{
		font-size: 28px;
	}
	.inner-sign .tabby .titem>h3,
	.inner-sign .step-3 .hentry h2,
	.inner-sign .step-2-2 .hentry h2,
	.inner-sign .step-2 .panel h2,
	.inner-sign .step-1-2 .caption h2,
	.inner-sign .step-1 .panel h3,
	.inner-corp .story-mobile .txt blockquote,
	.inner-corp .feat .copy,
	.inner-corp .advan .item h3,
	.inner-corp .company .copy,
	.inner-home .resource .item h3,
	.inner-home .process .item h3,
	.inner-home .client h2{
		font-size: 20px;	
	}
	.inner-sign .step-2-2 .hentry .txt,
	.inner-sign .step-1-2 .form-basic h3,
	.inner-sign .step-3 .hentry .txt,
	.inner-sign .step-2-2 .hentry .txt,
	.inner-sign .step-1-2 .caption .txt,
	.inner-sign .step-1 .hentry .txt,
	.inner-corp .feat .list li,
	.inner-corp .hero .txt,
	.inner-corp .request .txt,
	.inner-sme .request .txt ,
	.inner-corp .faq .hentry .txt,
	.inner-sme .faq .hentry .txt,
	 .inner-sme .hero .txt,
	.inner-home .resource .item .more,
	.inner-home .process .item .txt,
	 .inner-home .process .hentry .txt,
	 .inner-home .reason .item .txt{
		font-size: 16px;
	 }
	 .inner-sign .step-2 table td>strong, .inner-sign .step-2 table td>b,
	.inner-home .hero .txt{
		font-size: 15px;
	}
	.inner-sign .tabby .thead a,
	.tbl-feat table th,
	.tbl-feat table td,
	.inner-sign .checks label span,
	.checks label span,
	.form-basic .fgroup > label,
	.inner-sign .timeline span b,
	.inner-corp .advan .item .txt,
	.inner-corp .faq .format-text,
	.inner-sme .faq .format-text,
	.accord-item .acc-head h3,
	#bottom .tribute,
	#bottom .widget h3,
	#bottom .widget li,
	#bottom .info .txt,
	.inner-home .resource .item .txt,
	.inner-home .resource .item a.cat,
	.dropselect li,
	.dropselect strong{
		font-size: 13px;
	}
	.tbl-feat table th small{
		font-size: 10px;
	}
	.inner-sign .timeline span small{
		font-size: 9px;
	}
	
	/** ZERO STUFF **/
	.inner-sign .step-1 .panel .gap > *:first-child,
	.inner-corp .story-mobile,
	.inner-corp .advan .rowflex,
	#bottom .holder .widget:first-child,
	.inner-home .resource .slick-list,
	.inner-home .process .item:first-child,
	.inner-home .reason .item:first-child,
	.inner-home .reason .rowflex,
	.inner-home .hero .layer .form-basic form > *:first-child{
		margin: 0;
	}
}
/* Custom mobile */
@media (max-width: 480px) {

}

@media (max-width: 360px) {
	
}
@media (min-width: 1230px) {

}

#responsive{
	display:block;
	width:10px;
	height: 10px;
	position: fixed;
	bottom:10px;
	left: 10px;
	z-index: 9999;
}
/** RESPONSIVE VIEWER **/
@media (max-width: 1299px) {  #responsive{background: blueViolet !important;}}
@media (max-width: 991px) {  #responsive{background: red !important;}}
@media (max-width: 768px) {  #responsive{background: blue !important;}}
@media (max-width: 480px) {  #responsive{background: cyan !important;}}
@media (max-width: 360px) {  #responsive{background: green !important;}}    
`;

export default Style;
