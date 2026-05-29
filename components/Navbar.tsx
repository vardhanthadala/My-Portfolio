'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Experience',
        url: '/#my-experience',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="sticky top-0 z-[4]">
                <button
                    className={cn(
                        'group size-10 mobile-m:size-12 4k:size-24 absolute top-5 4k:top-10 right-4 mobile-m:right-5 md:right-10 4k:right-20 z-[2]',
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 4k:h-2 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] 4k:-translate-y-[10px] ',
                            {
                                'rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 4k:h-2 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] 4k:translate-y-[10px] ',
                            {
                                '-rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:-rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                </button>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] 4k:w-[1000px] max-w-[calc(100vw-2rem)] mobile-m:max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-8 mobile-m:gap-y-14',
                    'flex flex-col lg:justify-center py-10 4k:py-20',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[280px] mobile-m:max-w-[300px] 4k:max-w-[600px] mx-6 mobile-m:mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-4 mobile-m:mb-5 md:mb-8 4k:text-2xl 4k:mb-12">
                                SOCIAL
                            </p>
                            <ul className="space-y-3 4k:space-y-6">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base mobile-m:text-lg 4k:text-4xl capitalize hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-4 mobile-m:mb-5 md:mb-8 4k:text-2xl 4k:mb-12">
                                MENU
                            </p>
                            <ul className="space-y-3 4k:space-y-6">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-lg mobile-m:text-xl 4k:text-4xl flex items-center gap-3 4k:gap-6"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3 mobile-m:size-3.5 4k:size-7 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={16}
                                                    className="scale-0 group-hover:scale-100 transition-all w-2 h-2 4k:w-4 4k:h-4"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[280px] mobile-m:max-w-[300px] 4k:max-w-[600px] mx-6 mobile-m:mx-8 sm:mx-auto">
                    <p className="text-muted-foreground mb-4 4k:text-2xl 4k:mb-8">GET IN TOUCH</p>
                    <a href={`mailto:${GENERAL_INFO.email}`} className="text-sm mobile-m:text-base 4k:text-4xl">
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
