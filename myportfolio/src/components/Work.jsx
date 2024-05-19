import React from 'react'
import '../Css/work.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Work = () => {


  return (
    <>
      <section>
        <h1 className='my-work-text'>My-Work</h1>
        <h2 className='project-text'>Project</h2>
        <div className="work-container">
          <div className="work-card ">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, nihil?</p>
            <button className='button1'>Explore More</button>
          </div>
          <div className="svg-card "></div>
        </div>
        <h1 className='my-project-text'>My Projects</h1>
        <div className="work-card-container">

          <div className="work-card-1">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>explore</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>   <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>explore</button>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide>
              <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>explore</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide> <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>Explore</button>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide> <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>Explore</button>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide> <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>explore</button>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide> <div className="swiper_card">
                  <div className="card_title"><h1>Project Name</h1></div>
                  <div className="card_img">
                  <img src="/Assets/img/pngs/bootstrap.jpeg" alt=""/>
                  </div>
                  <div className="card_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vero!
                    </p>
                  </div>
                  <div className="card_btn">
                    <button className='btn'>explore</button>
                  </div>
                </div></SwiperSlide>
           
            </Swiper>
          </div>
        </div>
        <section class="reviews">
        <div class="reviews-title">
            <p>Reviews</p>
        </div>
        <div>
            <div class="reviews-row row-first">
                <div class="reviews-card">
                    <img class="card-img" src="https://temalcode-agency-portfolio.netlify.app/images/review1.png" alt=""/>

                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>

                        <div class="card-author">
                            <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            <p>CEO of SomeCompany</p>
                        </div>
                    </div>
                </div>

                <div class="reviews-card">
                    <img class="card-img" src="https://temalcode-agency-portfolio.netlify.app/images/review2.png" alt=""/>

                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>

                        <div class="card-author">
                            <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            <p>CEO of SomeCompany</p>
                        </div>
                    </div>
                </div>

                <div class="reviews-card">
                    <img class="card-img" src="https://temalcode-agency-portfolio.netlify.app/images/review3.png" alt=""/>

                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>

                        <div class="card-author">
                            <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            <p>CEO of SomeCompany</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="reviews-row row-second">
                <div class="reviews-card">
                    <div class="card-img">
                        <img src="https://temalcode-agency-portfolio.netlify.app/images/review1.png" alt=""/>
                    </div>
                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>
                        <p class="card-author"><svg width="9" height="2" viewBox="0 0 9 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            CEO of SomeCompany</p>
                    </div>
                </div>
                <div class="reviews-card">
                    <div class="card-img">
                        <img src="https://temalcode-agency-portfolio.netlify.app/images/review4.png" alt=""/>
                    </div>
                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>
                        <p class="card-author"><svg width="9" height="2" viewBox="0 0 9 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            CEO of SomeCompany</p>
                    </div>
                </div>
                <div class="reviews-card">
                    <div class="card-img">
                        <img src="https://temalcode-agency-portfolio.netlify.app/images/review5.png" alt=""/>
                    </div>
                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>
                        <p class="card-author"><svg width="9" height="2" viewBox="0 0 9 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            CEO of SomeCompany</p>
                    </div>
                </div>
            </div>
            {/* <div class="reviews-row row-third">
                <div class="reviews-card">
                    <div class="card-img">
                        <img src="https://temalcode-agency-portfolio.netlify.app/images/review6.png" alt=""/>
                    </div>
                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>
                        <p class="card-author"><svg width="9" height="2" viewBox="0 0 9 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            CEO of SomeCompany</p>
                    </div>
                </div>
                <div class="reviews-card">
                    <div class="card-img">
                        <img src="https://temalcode-agency-portfolio.netlify.app/images/review7.png" alt=""/>
                    </div>
                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>
                        <p class="card-author"><svg width="9" height="2" viewBox="0 0 9 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            CEO of SomeCompany</p>
                    </div>
                </div>
                <div class="reviews-card">
                    <div class="card-img">
                        <img src="https://temalcode-agency-portfolio.netlify.app/images/review1.png" alt=""/>
                    </div>
                    <div class="card-text">
                        <div class="card-title">
                            <p>“Excellent Team with Creative Mindset”</p>
                        </div>
                        <div class="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu odio pretium sed amet,
                                pulvinar nunc fringilla lectus.
                            </p>
                            <p>
                                Adipiscing gravida rhoncus nunc, massa id. Et vestibulum scelerisque morbi porttitor
                                sapien. Feugiat faucibus gravida sed adipiscing odio. Condimentum purus varius non </p>
                        </div>
                        <p class="card-author"><svg width="9" height="2" viewBox="0 0 9 2" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.526123 1.13867H8.25949" stroke="black" stroke-width="0.822209" />
                            </svg>
                            CEO of SomeCompany</p>
                    </div>
                </div>
            </div> */}
        </div>
    </section>

      </section>

    </>
  )
}

export default Work
