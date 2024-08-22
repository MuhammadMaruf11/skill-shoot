'use client'
import { testimonialData } from "@/allData/testimonialData";
import Image from "next/image";


// Import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import { CSSProperties, useRef } from "react";

const Testimonial = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const afterWidthStyle: CSSProperties = {
        "--after-width": isInView ? "100%" : "0%",
    } as CSSProperties;

    return (
        <section className="testimonial-area">
            <motion.div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-7 col-md-10 text-center">
                        <motion.div
                            className="testimonial-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>What do they <span>say?</span></h2>
                        </motion.div>
                        <motion.div
                            className="testimonial-description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p>This is an honest review from members who have joined us</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="testimonial-slider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Swiper
                        spaceBetween={24}
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides={true}
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
                        {testimonialData?.map((item, index) => {
                            const { img, rating, name, comment } = item;
                            return (
                                <SwiperSlide key={index} className="py-6">
                                    <motion.div
                                        className="testimonial-wrap"
                                        ref={ref}
                                        style={afterWidthStyle}
                                    >
                                        <div className="testimonial-img">
                                            <Image src={img} width={75} height={75} alt="profile" />
                                        </div>
                                        <div className="testimonial-rating">
                                            {[...Array(Number(rating))].map((_, i) => (
                                                <Image
                                                    key={i}
                                                    src="/img/testimonial/star.svg"
                                                    width={15}
                                                    height={14}
                                                    alt="star"
                                                />
                                            ))}
                                        </div>
                                        <motion.div
                                            className="testimonial-name"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <h4>{name}</h4>
                                        </motion.div>
                                        <motion.div
                                            className="testimonial-comment"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <p>{comment}</p>
                                        </motion.div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonial;