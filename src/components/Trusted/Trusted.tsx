'use client'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Trusted = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section className='trusted-area'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="trusted-wrap">
                            <motion.div
                                className="trusted-title"
                                ref={ref}
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h2>
                                    Trusted more than <span>100+</span> in the world
                                </h2>
                            </motion.div>
                            <motion.div
                                className="trusted-description"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <p>
                                    they have asked us more than 3 times to teach their employees about various things. to improve their skills
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row d-md-block d-none">
                    <div className="col-12">
                        <div className="marquee-wrapper">
                            <motion.div
                                className="marquee-content marquee-content-1"
                                whileInView={{ x: ['0%', '-100%'] }}
                                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            >
                                <div className="cto-marquee-img">
                                    <Image src='/img/trusted/img-1.svg' width={100} height={21} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-2.svg' width={130} height={45} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-3.svg' width={150} height={48} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-4.svg' width={150} height={46} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-5.svg' width={150} height={37} alt='marquee_logo' />
                                </div>
                            </motion.div>
                            <motion.div
                                className="marquee-content marquee-content-2"
                                whileInView={{ x: ['0%', '-100%'] }}
                                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            >
                                <div className="cto-marquee-img">
                                    <Image src='/img/trusted/img-1.svg' width={100} height={21} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-2.svg' width={130} height={45} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-3.svg' width={150} height={48} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-4.svg' width={150} height={46} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-5.svg' width={150} height={37} alt='marquee_logo' />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div className="trusted-brand-wrap d-md-none">
                    <motion.div className="trusted-brand-img"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image src='/img/trusted/img-1.svg' width={100} height={21} alt='marquee_logo' />
                    </motion.div>
                    <motion.div className="trusted-brand-img text-end"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        <Image src='/img/trusted/img-2.svg' width={130} height={45} alt='marquee_logo' />
                    </motion.div>
                    <motion.div className="trusted-brand-img"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image src='/img/trusted/img-3.svg' width={150} height={48} alt='marquee_logo' />
                    </motion.div>
                    <motion.div className="trusted-brand-img text-end"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        <Image src='/img/trusted/img-4.svg' width={150} height={46} alt='marquee_logo' />
                    </motion.div>
                    <motion.div className="trusted-brand-img text-center"
                        initial={{ opacity: 0, scale: 0.75 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}>
                        <Image src='/img/trusted/img-5.svg' width={150} height={37} alt='marquee_logo' />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trusted;