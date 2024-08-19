'use client'
import Image from "next/image";
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef, useState } from "react";
import { whatWeDoData } from "@/allData/whatWeDoData";


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
                            <div className="why-we-do-title">
                                <h2>Why do we <span>exist?</span></h2>
                            </div>
                            <div className="why-we-do-description">
                                <p>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>
                            </div>
                            <div className="whey-we-do-items">
                                <div className="item-img">
                                    <Image src='/img/profile/profile-2.svg' width={71} height={71} alt="profile" />
                                </div>
                                <div className="item-text">
                                    <h4>Jerony Pulquosta</h4>
                                    <p>CEO Skill Shoot</p>
                                </div>
                            </div>
                            <div className="line-img">
                                <Image src='/img/shapes/shape-10.svg' width={431} height={1} alt="line" />
                            </div>
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
                                return (<div className="col-md-6" key={index}>
                                    <div className="what-we-do-content">
                                        <div className="content-img">
                                            <Image src={item?.img} width={50} height={50} alt="icon" />
                                        </div>
                                        <div className="content-title">
                                            <h4>{item?.title}</h4>
                                        </div>
                                        <div className="content-description">
                                            <p>{item?.description}</p>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeDo;