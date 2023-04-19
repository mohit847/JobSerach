import React from "react"
// import "../component/popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "./Dummy"

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 2000,
    dots: true,
    autoplay: true,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className="popular bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-4">
              Popular
            </h2>
          </div>
          <div className="content ">
            <Slider {...settings}>
              {popular.map((val) => {
                return (
                  <div key={val.id} className="items">
                    <div className="box bg-white flex shadow relative m-15">
                      <div className="images relative h-150">
                        <img
                          src={val.cover}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="category category1 absolute bottom-0 right-0 mr-3 mb-3 text-xs text-white uppercase font-bold p-2 bg-red-600">
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className="text flex flex-col p-4">
                        <h1 className="title text-xl font-bold leading-tight mb-0">
                          {val.title.slice(0, 40)}...
                        </h1>
                        <div className="date mt-4">
                          <i className="fas fa-calendar-days mr-2"></i>
                          <span>{val.date}</span>
                        </div>
                        <div className="comment mt-1">
                          <i className="fas fa-comments mr-2"></i>
                          <span>{val.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Popular
