'use client'
import Image from "next/image";
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef, useState } from "react";
import { whatWeDoData } from "@/allData/whatWeDoData";
import { motion } from 'framer-motion';


const WhyWeDo = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [hasStarted, setHasStarted] = useState(false);

    if (isInView && !hasStarted) {
        setHasStarted(true);
    }

    return (
        <section className="what-we-do-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-we-do-wrap">
                            <motion.div
                                className="why-we-do-title"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <h2>Why do we <span>exist?</span></h2>
                            </motion.div>
                            <motion.div
                                className="why-we-do-description"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <p>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>
                            </motion.div>
                            <motion.div
                                className="whey-we-do-items"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <div className="item-img">
                                    <Image src='/img/profile/profile-2.svg' width={71} height={71} alt="profile" />
                                </div>
                                <div className="item-text">
                                    <h4>Jerony Pulquosta</h4>
                                    <p>CEO Skill Shoot</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="line-img"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                <Image src='/img/shapes/shape-10.svg' width={431} height={1} alt="line" />
                            </motion.div>
                            <div className="count-up-wrap" ref={ref}>
                                <div className="count-up">
                                    <h2>
                                        {hasStarted && <CountUp end={100} duration={2} />}
                                        <span>+</span>
                                    </h2>
                                    <p>Updated Material</p>
                                </div>
                                <div className="count-up">
                                    <h2 className=''>
                                        {hasStarted && <CountUp end={15} duration={2} />}
                                        <span>K</span>
                                    </h2>
                                    <p>Updated Material</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            {whatWeDoData?.map((item, index) => {
                                return (<motion.div
                                    className="col-md-6"
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: .4 * index }}
                                >
                                    <motion.div
                                        className="what-we-do-content"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    >
                                        <motion.div
                                            className="content-img"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <Image src={item?.img} width={50} height={50} alt="icon" />
                                        </motion.div>
                                        <motion.div
                                            className="content-title"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            <h4>{item?.title}</h4>
                                        </motion.div>
                                        <motion.div
                                            className="content-description"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <p>{item?.description}</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeDo;