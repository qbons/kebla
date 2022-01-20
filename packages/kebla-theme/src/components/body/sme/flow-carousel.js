import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from '../../../assets/css/slick.css';
import { styled } from "frontity";

export default class FlowCarousel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
                const breakpoint = [
                        {
                                breakpoint: 768,
                                settings: {
                                        arrows: false,
                                        dots: false,
                                        slidesToShow: 1,
                                        variableWidth: true
                                }
                        }
                ];
		const settings = {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,
                        speed: 500,
                        autoplaySpeed: 5000,
                        variableWidth: false,
                        arrows: false,
                        centerMode: false,
                        responsive: breakpoint
		};
		return (
                        <SliderElem className="slider">
                                <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.props.children}
                                </Slider>
                        </SliderElem>
		);
	}
}

const SliderElem = styled.div `
        .slick-slider.slick-initialized{
                overflow: hidden;
        }
        ${SlickCSS}
`