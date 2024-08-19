import Image from "next/image";
import Link from "next/link";


const Addvertise = () => {
    return (
        <section className="advertise-area">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-6">
                        <div className="advertise-wrap">
                            <div className="advertise-title">
                                <h2>
                                    Happy <span>Chinese New Year</span>, 20% discount for you today
                                </h2>
                            </div>
                            <div className="advertise-btn">
                                <Link href=''>Subscribe Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="advertise-img">
                            <Image src='/img/bg/advertise.svg' width={289} height={433} alt="advertise" />
                        </div>
                    </div>
                </div>
                <div className="advertise-shapes-wrap">
                    <div className="advertise-shapes shape-1">
                        <Image src='/img/shapes/shape-4.svg' width={61} height={60} alt="advertise_shape" />
                    </div>
                    <div className="advertise-shapes shape-2">
                        <Image src='/img/shapes/shape-5.svg' width={61} height={60} alt="advertise_shape" />
                    </div>
                    <div className="advertise-shapes shape-3">
                        <Image src='/img/shapes/shape-6.svg' width={56} height={57} alt="advertise_shape" />
                    </div>
                    <div className="advertise-shapes shape-4">
                        <Image src='/img/shapes/shape-7.svg' width={52} height={46} alt="advertise_shape" />
                    </div>
                    <div className="advertise-shapes shape-5">
                        <Image src='/img/shapes/shape-8.svg' width={24} height={25} alt="advertise_shape" />
                    </div>
                    <div className="advertise-shapes shape-6">
                        <Image src='/img/shapes/shape-9.svg' width={51} height={47} alt="advertise_shape" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Addvertise;