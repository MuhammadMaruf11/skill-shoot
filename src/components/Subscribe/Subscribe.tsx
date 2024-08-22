'use client'
import { subscribeData } from "@/allData/subscribeData";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { motion } from 'framer-motion';


const Subscribe = () => {
    return (
        <motion.section
            className="subscribe-area"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <motion.div
                    className="row justify-content-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="col-xl-6 col-lg-9 text-center">
                        <motion.div
                            className="subscribe-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2><span>Subscribe</span> with us now</h2>
                        </motion.div>
                        <motion.div
                            className="subscribe-description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p>By subscribing now, you will be able to access the material easily and cheaply, so you will be very efficient and benefit.</p>
                        </motion.div>
                    </div>
                </motion.div>
                <div
                    className="subscribe-grid"
                >
                    {subscribeData?.map((item, index) => {
                        const { price, month, type, description, list, url } = item;
                        return (
                            <Fragment key={index}>
                                <motion.div
                                    className={type !== 'Pro' ? 'subscribe-wrap' : 'subscribe-wrap popular'}
                                    initial={type !== "Pro" ? { opacity: 0, y: -100 } : { opacity: 0, y: 30 }}
                                    whileInView={type !== "Pro" ? { opacity: 1, y: 0 } : { opacity: 1, y: -70 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {type === 'Pro' && (
                                        <motion.div
                                            className="popular-badge"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <span>Most Popular</span>
                                        </motion.div>
                                    )}
                                    <motion.div
                                        className="subscribe-price"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: .2 }}
                                    >
                                        <h2>${price}</h2><span>/ {month} month</span>
                                    </motion.div>
                                    <motion.div
                                        className="subscribe-type"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: .4 }}
                                    >
                                        <h3>{type}</h3>
                                    </motion.div>
                                    <motion.div
                                        className="subscribe-description"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: .6 }}
                                    >
                                        <p>{description}</p>
                                    </motion.div>
                                    <motion.div
                                        className="subscribe-list"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: .4 }}
                                    >
                                        <ul>
                                            {list?.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.2 + (1 * index) }}
                                                >
                                                    <Image
                                                        src={type !== 'Pro' ? '/img/icons/tick-circle.svg' : '/img/icons/tick-white-circle.svg'}
                                                        width={20}
                                                        height={20}
                                                        alt="icon"
                                                    />
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                    <motion.div
                                        className="subscribe-btn"
                                        initial={{ opacity: 0, scale: .8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                    >
                                        <Link href={url}>Choose plan</Link>
                                    </motion.div>
                                </motion.div>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Subscribe;