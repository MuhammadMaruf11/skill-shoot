'use client'
import { navMenuData } from "@/allData/navMenuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header = () => {
    const pathname = usePathname();
    return (
        <header className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header-logo">
                            <Link href='/'>
                                <Image src='/img/logo/logo.svg' priority width={130} height={30} alt="header_logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 text-center">
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
                    <div className="col-xl-3 text-end">
                        <div className="header-right">
                            <ul>
                                <li>
                                    <Link href='/'>Login</Link>
                                </li>
                                <li>
                                    <Link href='/'>Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;