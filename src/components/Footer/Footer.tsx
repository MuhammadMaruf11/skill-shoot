'use client'
import { navMenuData } from '@/allData/navMenuData';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className='footer-area'>
            <div className="footer-shap-wrap">
                <Image className="footer-shape-1" src='/img/shapes/shape-2.svg' width={60} height={39} alt='shape' />
                <Image className="footer-shape-2" src='/img/shapes/shape-3.svg' width={89} height={94} alt='shape' />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="footer-wrap">
                            <motion.div
                                className="footer-title"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <h2>Subscribe to get notified about update</h2>
                            </motion.div>
                            <motion.div
                                className="footer-description"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                            >
                                <p>By subscribing with your mail, you will accept our privacy policy</p>
                            </motion.div>
                            <div className="footer-input">
                                <div className="input-wrap">
                                    <input type="text" placeholder='Enter your email' />
                                </div>
                                <div className="btn-wrap">
                                    <button type='submit'>Subscribe us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-logo">
                            <Link href='/'>
                                <Image src='/img/logo/logo.svg' width={128} height={36} alt='footer_logo' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 text-lg-end">
                        <div className="header-menu">
                            <ul>
                                {navMenuData?.map((item, index) => {
                                    const isActive = pathname === item.url;
                                    return (<li key={index}>
                                        <Link href={item.url} className={isActive ? 'active' : ''}>
                                            {item?.title}
                                        </Link>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;