import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className='banner-area'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6">
                        <div className="banner-wrap">
                            <div className="banner-title">
                                <h1>There is always something new for us to learn</h1>
                            </div>
                            <div className="banner-description">
                                <p>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
                            </div>
                            <div className="banner-items">
                                <div className="banner-btn">
                                    <Link href=''>
                                        <span>Start Journey</span>
                                        <Image src='/img/icons/up-right-arrow.svg' width={12} height={12} alt='icon' />
                                    </Link>
                                </div>
                                <div className="banner-social-link">
                                    <ul>
                                        <li>
                                            <Link href=''>
                                                <Image src='/img/icons/instagram.svg' width={30} height={30} alt='social_icon' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                <Image src='/img/icons/twitter.svg' width={30} height={30} alt='social_icon' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                <Image src='/img/icons/discord.svg' width={30} height={30} alt='social_icon' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="banner-img-wrap">
                            <div className="banner-img">
                                <Image src='/img/bg/banner.svg' width={408} height={541} alt='banner' />
                            </div>
                            <div className="banner-img-content">
                                <div className="banner-content-items">
                                    <div className="content-item-img">
                                        <Image src='/img/profile/profile-1.svg' width={40} height={40} alt='profile_icon' />
                                    </div>
                                    <div className="content-item-text">
                                        <h6>Learn basic ui ux design</h6>
                                        <p>Today at 12 PM</p>
                                    </div>
                                </div>
                                <div className="banner-content-btn">
                                    <Link href=''>Join Now</Link>
                                </div>
                            </div>
                            <div className="banner-img-icon">
                                <Image src='/img/icons/icon-1.svg' width={58} height={58} alt='banner_icon' />
                                <Image src='/img/icons/icon-2.svg' width={51} height={51} alt='banner_icon' />
                                <Image src='/img/icons/icon-3.svg' width={58} height={58} alt='banner_icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;