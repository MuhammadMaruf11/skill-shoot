import Image from 'next/image';

const Trusted = () => {
    return (
        <section className='trusted-area'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="trusted-wrap">
                            <div className="trusted-title">
                                <h2>
                                    Trusted more than <span>100+</span> in the world
                                </h2>
                            </div>
                            <div className="trusted-description">
                                <p>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-wrapper">
                            <div className="marquee-content marquee-content-1">
                                <div className="cto-marquee-img">
                                    <Image src='/img/trusted/img-1.svg' width={100} height={21} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-2.svg' width={130} height={45} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-3.svg' width={150} height={48} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-4.svg' width={150} height={46} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-5.svg' width={150} height={37} alt='marquee_logo' />
                                </div>
                            </div>
                            <div className="marquee-content marquee-content-2">
                                <div className="cto-marquee-img">
                                    <Image src='/img/trusted/img-1.svg' width={100} height={21} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-2.svg' width={130} height={45} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-3.svg' width={150} height={48} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-4.svg' width={150} height={46} alt='marquee_logo' />
                                    <Image src='/img/trusted/img-5.svg' width={150} height={37} alt='marquee_logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trusted;