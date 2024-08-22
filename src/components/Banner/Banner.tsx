'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Banner = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section className='banner-area'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6">
                        <motion.div
                            className="banner-wrap"
                            initial={{ opacity: 0 }}
                            whileInView={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1 }}
                            ref={ref}
                        >
                            <motion.div
                                className="banner-title"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 1 }}
                            >
                                <h1>There is always something new for us to learn</h1>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={isInView ? { width: 220, height: 18 } : { width: 0, height: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{
                                        position: "absolute",
                                        top: "80px",
                                        right: "172px",
                                    }}
                                >
                                    <Image
                                        src="/img/shapes/shape-1.svg"
                                        width={220}
                                        height={18}
                                        alt="shape"
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="banner-description"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p>
                                    We have created more than 100+ materials on various things that
                                    will help your career, with mentors who are experienced in their
                                    fields.
                                </p>
                            </motion.div>
                            <motion.div
                                className="banner-items"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <motion.div
                                    className="banner-btn"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link href="">
                                        <span>Start Journey</span>
                                        <Image
                                            src="/img/icons/up-right-arrow.svg"
                                            width={12}
                                            height={12}
                                            alt="icon"
                                        />
                                    </Link>
                                </motion.div>
                                <motion.div
                                    className="banner-social-link"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                >
                                    <ul>
                                        {['Instagram', 'Twitter', 'Discord'].map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5, delay: .5 * index }}
                                            >
                                                <Link href="" aria-label={item}>
                                                    <Image
                                                        src={`/img/icons/${item.toLowerCase()}.svg`}
                                                        width={30}
                                                        height={30}
                                                        alt={`social_icon_${item.toLowerCase()}`}
                                                    />
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col-xl-5">
                        <div className="banner-img-wrap">
                            <div className="banner-img">
                                <Image src='/img/bg/banner.svg' width={408} height={541} alt='banner' />
                            </div>
                            <motion.div
                                className="banner-img-content"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="banner-content-items"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <motion.div
                                        className="content-item-img"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <Image src='/img/profile/profile-1.svg' width={40} height={40} alt='profile_icon' />
                                    </motion.div>
                                    <div className="content-item-text">
                                        <motion.h6
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                        >
                                            Learn basic UI/UX design
                                        </motion.h6>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                        >
                                            Today at 12 PM
                                        </motion.p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="banner-content-btn"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <Link href=''>Join Now</Link>
                                </motion.div>
                            </motion.div>
                            <div className="banner-img-icon">
                                <Image src='/img/icons/icon-1.svg' width={58} height={58} alt='banner_icon' />
                                <Image src='/img/icons/icon-2.svg' width={51} height={51} alt='banner_icon' />
                                <Image src='/img/icons/icon-3.svg' width={58} height={58} alt='banner_icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;