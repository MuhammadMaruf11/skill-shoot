'use client'
import Image from "next/image";
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Import required modules
import { Navigation } from 'swiper/modules';
import { PopularCourseData } from "@/allData/popularCourseData";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';


const PopularCourse = () => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    const handleVideoClick = (index: number) => {
        const currentVideo = videoRefs.current[index];
        if (playingIndex !== null && playingIndex !== index) {
            videoRefs.current[playingIndex]?.pause();
        }

        if (currentVideo.paused) {
            currentVideo.play();
            setPlayingIndex(index);
        } else {
            currentVideo.pause();
            setPlayingIndex(null);
        }
    };


    return (
        <motion.section
            className="popular-course-area"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-9">
                        <motion.div
                            className="popular-wrap"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="popular-title text-center"
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2>Popular courses of the week</h2>
                            </motion.div>
                            <motion.div
                                className="popular-description text-center"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <p>List of the most popular lists that are often studied by our members</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <motion.div
                            className="popular-course-slider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Swiper
                                spaceBetween={24}
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView={3}
                                loop={true}
                                breakpoints={{
                                    1600: { slidesPerView: 3 },
                                    1200: { slidesPerView: 3 },
                                    1024: { slidesPerView: 3 },
                                    768: { slidesPerView: 2 },
                                    375: { slidesPerView: 1 },
                                }}
                            >
                                {PopularCourseData?.map((item, index) => (
                                    <SwiperSlide key={index} className="py-6">
                                        <motion.div
                                            className="card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <motion.div
                                                className="card-img"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="play-btn" onClick={() => handleVideoClick(index)}>
                                                    <Image className="play-icon" src='/img/popular-course/play-icon.svg' width={36} height={36} alt="play_icon" />
                                                    <Image className="play-bg" src='/img/popular-course/play-bg.svg' width={60} height={60} alt="play_bg" />
                                                </div>
                                                <video
                                                    ref={(el) => {
                                                        if (el) {
                                                            videoRefs.current[index] = el;
                                                        }
                                                    }}
                                                    width="100%"
                                                    muted
                                                    poster={item.cardImg}
                                                >
                                                    <source src={item.video} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </motion.div>
                                            <motion.div
                                                className="card-body"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: .4 }}
                                            >
                                                <h4 className="card-title">{item.title}</h4>
                                                <div className="card-contents">
                                                    <motion.div
                                                        className="card-item"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.8, delay: .6 }}
                                                    >
                                                        <div className="item-img">
                                                            <Image src={item.profileImg} width={45} height={45} alt={`popular_course_profile_${index}`} />
                                                        </div>
                                                        <div className="item-text">
                                                            <h6>{item.name}</h6>
                                                            <p>{item.designation}</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="card-item"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.8, delay: .8 }}
                                                    >
                                                        <div className="item-img">
                                                            <Image src='/img/popular-course/user-icon.svg' width={45} height={45} alt={`user_icon_${index}`} />
                                                        </div>
                                                        <div className="item-text">
                                                            <h6>
                                                                <CountUp end={item.number} duration={2} />
                                                            </h6>
                                                            <p>Participant</p>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                                <motion.div
                                                    className="card-bottom"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, delay: 1 }}
                                                >
                                                    <div className="card-bottom-btn">
                                                        <Link href={item.url}>
                                                            Buy Now
                                                        </Link>
                                                    </div>
                                                    <div className="card-bottom-wrap">
                                                        <h5>${item.price}</h5> <span>/{item.quantity} video</span>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default PopularCourse;