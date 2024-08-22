'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const CTO = () => {
    return (
        <motion.section
            className="cto-area"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <motion.div
                    className="advertise-shapes-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="advertise-shapes shape-1"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src='/img/shapes/shape-4.svg' width={61} height={60} alt="advertise_shape" />
                    </motion.div>
                    <motion.div
                        className="advertise-shapes shape-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src='/img/shapes/shape-7.svg' width={52} height={46} alt="advertise_shape" />
                    </motion.div>
                </motion.div>
                <div className="row align-items-center">
                    <div className="col-xl-7">
                        <motion.div
                            className="cto-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2><span>Improve</span> your skills, and reach your career as soon as possible</h2>
                        </motion.div>
                    </div>
                    <div className="col-xl-5">
                        <motion.div
                            className="cto-btn"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link href=''>
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Join Now
                                </motion.span>
                            </Link>
                            <Link href=''>
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe Course
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default CTO;