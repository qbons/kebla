import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from '../../../assets/css/slick.css';
import { styled } from "frontity";

export default class StoryCarousel extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next(e) {
                e.preventDefault();
		this.slider.slickNext();
	}
	previous(e) {
                e.preventDefault();
		this.slider.slickPrev();
	}
	render() {
		const settings = {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: (this.props.children.length > 1) ? true : false,
                        fade: true,
                        autoplay: true,
                        speed: 500,
                        autoplaySpeed: 5000,
                        variableWidth: false,
                        arrows: false,
                        centerMode: false,
                        adaptiveHeight: true
		};
		return (
                        <SliderElem className="slider">
                                <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.props.children}
                                </Slider>
                                {this.props.children.length > 1 && <div className="slidenav"><a href="#" className="prev cvr-bg" onClick={this.previous}></a><a href="#" className="next cvr-bg" onClick={this.next}></a></div> }
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