

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Footer from './Footer';
import Navbar from './navbar';
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "CEO",
    image: "https://www.efilecabinet.com/wp-content/uploads/2019/05/g2-testimonial-female.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "Marketing Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXkP0pXja3Bh2nN9Cye2SmTrWkkglh3m9CQ&usqp=CAU",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bob Johnson",
    occupation: "Sales Director",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCs5tCojTZEkDkgG5bQeEBhuluJk9zCVpLOg&usqp=CAU",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 3,
  },

  {
    id: 4,
    name: " Charan",
    occupation: "Sales Director",
    image: "https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 3,
  },

  {
    id: 5,
    name: " Sri Charan",
    occupation: "Software Engineer",
    image: "https://media.licdn.com/dms/image/D4D03AQE4qm4lt_CM8Q/profile-displayphoto-shrink_800_800/0/1677304847352?e=1687392000&v=beta&t=ad1ZqaSFSE_ntnKwGQiA5kHhwhHqHZq05EzI0dkbOxA",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque tellus at mi commodo dignissim.",
    rating: 4,
  },
];

const About = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  return (
    <>

<Navbar />
      <div className="bg-slate-200">
        <h1 className="text-4xl font-bold flex justify-center p-8">About us</h1>
      </div>

      <div className="flex justify-center mx-auto w-2/3 my-16">
        <Slider {...sliderSettings}>
        <div className="lg:grid-cols-2 grid gap-4 sm:grid-row-auto   sm:gap-8 ">
          <div className=" ">
            Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum
            ipsum. Praesent augue quam, facilisis vitae felis vel, convallis
            convallis nisi. Donec maximus accumsan purus vel tempus. Aenean
            pretium luctus velit id fermentum. Aenean non velit non nulla
            interdum venenatis. Integer in libero sagittis, consequat est quis,
            commodo odio. Aliquam eu vulputate neque. Nunc et massa leo.
            Vestibulum a pretium dolor. Proin et fermentum sapien. Cras
            malesuada neque ac purus fermentum, a placerat quam malesuada.
            Quisque sollicitudin tellus a ex eleifend mattis. In vitae ipsum in
            mauris vestibulum imperdiet.
          </div>
          <div>
            Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum
            ipsum. Praesent augue quam, facilisis vitae felis vel, convallis
            convallis nisi. Donec maximus accumsan purus vel tempus. Aenean
            pretium luctus velit id fermentum. Aenean non velit non nulla
            interdum venenatis. Integer in libero sagittis, consequat est quis,
            commodo odio. Aliquam eu vulputate neque. Nunc et massa leo.
            Vestibulum a pretium dolor. Proin et fermentum sapien. Cras
            malesuada neque ac purus fermentum, a placerat quam malesuada.
            Quisque sollicitudin tellus a ex eleifend mattis. In vitae ipsum in
            mauris vestibulum imperdiet.
          </div>
        </div>

        </Slider>
      </div>




    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6  lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">What People Say</h2>
        <div className="mt-12">
          <Slider {...sliderSettings} >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {testimonial.occupation}
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-500">{testimonial.quote}</p>
                    </div>
                    <div className="mt-4 flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>



    <Footer />
    </>
  );
};

export default About;
