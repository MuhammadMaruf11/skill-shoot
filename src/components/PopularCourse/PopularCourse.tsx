'use client'
import Image from "next/image";
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { PopularCourseData } from "@/allData/popularCourseData";
import { useRef, useState } from "react";
import Link from "next/link";


const PopularCourse = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [hasStarted, setHasStarted] = useState(false);

    if (isInView && !hasStarted) {
        setHasStarted(true);
    }
    return (
        <section className="popular-course-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-9">
                        <div className="popular-wrap">
                            <div className="popular-title text-center">
                                <h2>Popular courses of the week</h2>
                            </div>
                            <div className="popular-description text-center">
                                <p>List of the most popular lists that are often studied by our members</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="popular-course-slider">
                            <Swiper
                                spaceBetween={24}
                                slidesPerView={3}
                                loop={true}
                                breakpoints={{
                                    1600: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    375: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {PopularCourseData?.map((item, index) => {
                                    const { cardImg, video, title, profileImg, name, designation, number, url, price, quantity } = item;
                                    return (
                                        <SwiperSlide key={index} className="py-6">
                                            <div className="card">
                                                <div className="card-img">
                                                    <Image className="card-img-top" src={cardImg} width={413} height={249} alt={`popular_course_card_${index}`} />
                                                    <Image className="play-icon" src='/img/popular-course/play-icon.svg' width={36} height={36} alt="play_icon" />
                                                    <Image className="play-bg" src='/img/popular-course/play-bg.svg' width={60} height={60} alt="play_bg" />
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{title}</h4>
                                                    <div className="card-contents">
                                                        <div className="card-item">
                                                            <div className="item-img">
                                                                <Image src={profileImg} width={45} height={45} alt={`popular_course_profile_${index}`} />
                                                            </div>
                                                            <div className="item-text">
                                                                <h6>{name}</h6>
                                                                <p>{designation}</p>
                                                            </div>
                                                        </div>
                                                        <div className="card-item">
                                                            <div className="item-img">
                                                                <Image src='/img/popular-course/user-icon.svg' width={45} height={45} alt={`user_icon_${index}`} />
                                                            </div>
                                                            <div className="item-text" ref={ref}>
                                                                <h6>
                                                                    {hasStarted && <CountUp end={number} duration={2} />}
                                                                </h6>
                                                                <p>Participant</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-bottom">
                                                        <div className="card-bottom-btn">
                                                            <Link href={url}>
                                                                Buy Now
                                                            </Link>
                                                        </div>
                                                        <div className="card-bottom-wrap">
                                                            <h5>${price}</h5> <span>/{quantity} video</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCourse;