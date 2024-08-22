'use client'
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";


const Addvertise = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section className="advertise-area">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-6">
                        <motion.div
                            className="advertise-wrap"
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="advertise-title"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <h2>
                                    Happy <span>Chinese New Year</span>, 20% discount for you today
                                </h2>
                            </motion.div>
                            <motion.div
                                className="advertise-btn"
                                initial={{ opacity: 0, y: 40, x: -40 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1, delay: .4 }}
                            >
                                <Link href=''>Subscribe Course</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col-xl-6">
                        <motion.div
                            className="advertise-img"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1 }}
                        >
                            <Image src='/img/bg/advertise.svg' width={289} height={433} alt="advertise" />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="advertise-shapes-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: .6 }}
                >
                    <motion.div
                        className="advertise-shapes shape-1"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 1, delay: .8 }}
                    >
                        <Image src='/img/shapes/shape-4.svg' width={61} height={60} alt="advertise_shape" />
                    </motion.div>
                    <motion.div
                        className="advertise-shapes shape-2"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <Image src='/img/shapes/shape-5.svg' width={61} height={60} alt="advertise_shape" />
                    </motion.div>
                    <motion.div
                        className="advertise-shapes shape-3"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <Image src='/img/shapes/shape-6.svg' width={56} height={57} alt="advertise_shape" />
                    </motion.div>
                    <motion.div
                        className="advertise-shapes shape-4"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                    >
                        <Image src='/img/shapes/shape-7.svg' width={52} height={46} alt="advertise_shape" />
                    </motion.div>
                    <motion.div
                        className="advertise-shapes shape-5"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 1, delay: 1.6 }}
                    >
                        <Image src='/img/shapes/shape-8.svg' width={24} height={25} alt="advertise_shape" />
                    </motion.div>
                    <motion.div
                        className="advertise-shapes shape-6"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                    >
                        <Image src='/img/shapes/shape-9.svg' width={51} height={47} alt="advertise_shape" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Addvertise;