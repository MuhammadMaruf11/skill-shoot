'use client'
import { navMenuData } from "@/allData/navMenuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { slide as Menu } from 'react-burger-menu';


const Header = () => {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [headerStyle, setHeaderStyle] = useState('visible');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            if (currentScrollY > (lastScrollY + 10)) {
                setHeaderStyle('hidden');
            } else if (currentScrollY < (lastScrollY - 10)) {
                setHeaderStyle('visible');
            }

            lastScrollY = currentScrollY;
            console.log('las', lastScrollY + 20);
            console.log('cur', currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => {
            if (prevState) {
                closeMenu();
            }
            return !prevState;
        });
    };
    return (
        <header className={`header-area ${headerStyle}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-6">
                        <div className="header-logo">
                            <Link href='/'>
                                <Image src='/img/logo/logo.svg' priority width={130} height={30} alt="header_logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block text-center">
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
                    <div className="col-lg-4 d-none d-lg-block text-end">
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
                    <div className="col-6 d-lg-none text-end">
                        <button onClick={toggleMenu} className="toggle-btn">
                            <Image className={isMenuOpen ? 'times-icon' : ''} src={isMenuOpen ? '/img/icons/times.svg' : '/img/icons/menu.svg'} width={22.5} height={22.5} alt={isMenuOpen ? 'times' : 'menu'} />
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    <Menu
                        isOpen={isMenuOpen}
                        right
                        customBurgerIcon={false}
                        customCrossIcon={false}
                    >
                        <ul className="bm-item-list">
                            {navMenuData?.map((item, index) => {
                                const isActive = pathname === item.url;
                                return (
                                    <li key={index}>
                                        <Link href={item.url} className={isActive ? 'active' : ''} onClick={closeMenu}>
                                            {item?.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;