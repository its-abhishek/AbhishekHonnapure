import React from "react";
import "./awards.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
  {
    avatar: AVTR1,
    title: 'Abhishek',
    description: 'Lorem ipsum dolor sit amet, consectetur \
    description: Lorem ipsum dolor sit amet, consectetur \
      Lorem ipsum dolor sit amet, consectetur \
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et do\
                  lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    avatar: AVTR2,
    title: 'Abhishek',
    description: 'Lorem ipsum dolor sit amet, consectetur \
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

  },
  {
    avatar: AVTR3,
    title: 'Abhishek',
    description: 'Lorem ipsum dolor sit amet, consectetur \
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

  },
  {
    avatar: AVTR4,
    title: 'Abhishek',
    description: 'Lorem ipsum dolor sit amet, consectetur \
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Compitation and Events</h5>
      <h2>Awards</h2>

      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='container testimonials_container'>
        {
          data.map(({ avatar, title, description }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='my_avatar'>
                  <img src={avatar} />
                </div>
                <h2 className='my_title' >{title}</h2>
                <small className='my_description'>
                  {description}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
