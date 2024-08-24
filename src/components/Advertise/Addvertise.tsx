'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

const Advertise = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const shapes = [
        { src: '/img/shapes/shape-4.svg', width: 61, height: 60, delay: 0.2 },
        { src: '/img/shapes/shape-5.svg', width: 61, height: 60, delay: 0.4, animateY: true },
        { src: '/img/shapes/shape-6.svg', width: 56, height: 57, delay: 0.6, animateY: true },
        { src: '/img/shapes/shape-7.svg', width: 52, height: 46, delay: 0.8, animateY: true },
        { src: '/img/shapes/shape-8.svg', width: 24, height: 25, delay: 1.0, animateY: true },
        { src: '/img/shapes/shape-9.svg', width: 51, height: 47, delay: 1.2, animateY: true },
    ];

    const renderShapes = () => shapes.map((shape, index) => (
        <motion.div
            key={index}
            className={`advertise-shapes shape-${index + 1}`}
            initial={shape.animateY ? { y: -50, opacity: 0 } : { opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: shape.delay }}
        >
            <Image src={shape.src} width={shape.width} height={shape.height} alt={`advertise_shape_${index + 1}`} />
        </motion.div>
    ));

    return (
        <section className="advertise-area">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
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
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <Link href=''>Subscribe Course</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <motion.div
                            className="advertise-img"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image src='/img/bg/advertise.svg' width={289} height={433} alt="advertise" />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="advertise-shapes-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {renderShapes()}
                </motion.div>
            </div>
        </section>
    );
};

export default Advertise;
