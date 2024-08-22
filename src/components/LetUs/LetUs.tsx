'use client'
import { letUsData } from '@/allData/letUsData';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const LetUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (

        <motion.section
            className='let-us-area'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5">
                        <motion.div
                            className="let-us-img-wrap"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="let-us-img text-center">
                                <Image src='/img/bg/let-us.svg' width={408} height={570} alt='let-us' />
                            </div>
                            <motion.div
                                className="banner-img-content"
                                initial={{ opacity: 0, x: 100 }}
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
                            <div className="let-us-shape">
                                <Image src='/img/shapes/shape-11.svg' width={457} height={338} alt='shape' />
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-xl-6">
                        <div className="let-us-text-wrap">
                            <motion.div
                                className="let-us-title"
                                ref={ref}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.8 }}
                                style={{ position: 'relative' }}
                            >
                                <h2>Let us <span>Skill Shoot</span></h2>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={isInView ? { width: 250, height: 18 } : { width: 0, height: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        right: 0,
                                    }}
                                >
                                    <Image src="/img/shapes/shape-1.svg" width={250} height={18} alt="shape" />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="let-us-description"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
                                </p>
                                <p>
                                    We have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
                                </p>
                            </motion.div>
                            <div className="row">
                                {letUsData?.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="col-md-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 * index }}
                                    >
                                        <div className="let-us-items">
                                            <div className="item-icon">
                                                <Image src={item.img} width={25} height={25} alt='icon' />
                                            </div>
                                            <div className="item-title">
                                                <h6>{item.title}</h6>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default LetUs;