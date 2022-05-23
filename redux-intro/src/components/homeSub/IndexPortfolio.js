import React from "react";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import { connect } from "react-redux";

import {
  Navigation,
  EffectCreative,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import "swiper/css";
import "swiper/css/effect-creative";

var swiperTitle = $(".swiper-title-box p");

function IndexPortfolio({ portfolios, currentLanguage }) {
  return (
    <div className="index_portfolio">
      <div className="mutual_section_heading">
        <p>{translate("Portfoliomuz")}</p>
        <Link to="/portfolio">{translate("hamısına bax")}</Link>
      </div>
      <div className="main-swiper-container">
        <Swiper
          className="image-slider"
          modules={[
            Navigation,
            EffectCreative,
            Pagination,
            Mousewheel,
            Keyboard,
            Autoplay,
          ]}
          effect={"creative"}
          autoplay={{
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          speed={1500}
          breakpoints={{
            // when window width is >= 768px
            768: {
              grabCursor: true,
              slidesPerGroup: 1,
              slidesPerView: 1,
              mousewheel: true,
              keyboard: true,

              creativeEffect: {
                prev: {
                  translate: ["-120%", 0, -450],
                },
                next: {
                  translate: ["120%", 0, -450],
                },
              },

              pagination: {
                el: ".main-swiper-container .swiper-pagination",
                type: "progressbar",
              },

              navigation: {
                clickable: true,
                nextEl: ".swiper-navigation-btn .swiper-next-button",
                prevEl: ".swiper-navigation-btn .swiper-prev-button",
              },
            },
          }}
          onSwiper={(swiper) => {
            swiperTitle = $(".swiper-title-box p");
            // let endNum = $(".total_length_slider");
            // swiper && swiper.slides.length < 10
            //   ? endNum.text(`0${swiper.slides.length}`)
            //   : endNum.text(swiper.slides.length);
            let constId = swiper.realIndex + 1;
            for (let i = 0; i < swiperTitle.length; i++) {
              var elementId = parseInt($(swiperTitle[i]).data("swiper"));
              if (constId === elementId) {
                $(swiperTitle[i]).addClass("show");
              }
            }
          }}
          onSlideChange={(swiper) => {
            swiperTitle = $(".swiper-title-box p");
            var fragment = document.querySelector(".image_slider__current");
            var current = swiper.realIndex + 1;
            var idx = current < 10 ? "0" + current : current;
            fragment.innerHTML = idx;
            for (let i = 0; i < swiperTitle.length; i++) {
              var elementId = parseInt($(swiperTitle[i]).data("swiper"));
              if (current === elementId) {
                $(".swiper-title-box p").removeClass("show");
                $(swiperTitle[i]).addClass("show");
              }
            }
          }}
        >
          {portfolios.load &&
            !portfolios.failed &&
            portfolios?.data.map((portfolio, index) => (
              index<=3 ?
              <SwiperSlide key={index}>
                <div className="swiper-slide-inner">
                  <div className="swiper-img">
                    <img src={portfolio?.cover_image} alt="" />
                  </div>
                  <p className="swiper-inner-title">
                    {portfolio?.title?.[currentLanguage]}
                  </p>
                  <p className="swiper-other-title">
                    {portfolio?.title?.service?.title?.[currentLanguage]}
                  </p>
                </div>
              </SwiperSlide>
              : null
            ))}
        </Swiper>

        <div className="swiper-right-addings">
          <div className="swiper-title-box">
            {portfolios.load &&
              !portfolios.failed &&
              portfolios?.data.map((portfolio, index) => (
                index<=3 ?
                <p key={index} data-swiper={index + 1}>
                  {portfolio?.service?.title?.[currentLanguage]}
                </p>
                : null
              ))}
          </div>
          <div className="swiper-navigation-btn">
            <div className="swiper-prev-button swiper-nav-button">
              <svg
                width="28"
                height="16"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.92196L7.77872 14.8437M1 7.92196L7.77873 1.00017M1 7.92196L28 7.92196"
                  stroke="#9B9B9B"
                />
              </svg>
            </div>
            <div className="swiper-next-button swiper-nav-button">
              <svg
                width="28"
                height="16"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.92196L7.77872 14.8437M1 7.92196L7.77873 1.00017M1 7.92196L28 7.92196"
                  stroke="#9B9B9B"
                />
              </svg>
            </div>
          </div>
          
          <div className="swiper-pagination-bar">
            <div className="image-slider__fraction">
              <div className="image_slider__current same-swiper-pagination-style">
                01
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <span className="total_length_slider same-swiper-pagination-style">04</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    portfolios: state.portfoliosReducer,
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(IndexPortfolio);
