'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
       <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
    <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl mobile-m:text-6xl sm:text-7xl md:text-[80px] lg:text-[90px] laptop-l:text-[120px] 4k:text-[200px] font-anton">
        <span className="text-primary">FULL STACK</span>
        <br />
        <span className="ml-2 mobile-m:ml-4">& GEN AI DEV</span>
    </h1>

    <p className="banner-description slide-up-and-fade mt-6 text-sm mobile-m:text-base md:text-lg laptop-l:text-xl 4k:text-4xl text-muted-foreground max-w-[90%] 4k:max-w-full">
        Hi! I&apos;m{' '}
        <span className="font-medium text-foreground">
            Vardhan
        </span>
        . A Full Stack Developer specializing in scalable web applications,
        modern frontend experiences, backend architectures, and Gen AI
        integrations.
    </p>

    <Button
        as="link"
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${GENERAL_INFO.email}`}
        variant="primary"
        className="mt-6 md:mt-9 banner-button slide-up-and-fade text-sm md:text-base 4k:text-2xl 4k:px-12 4k:py-6"
    >
Hire Me    </Button>

    <div className="flex items-center gap-2 mt-3 4k:mt-6">
        <span className="size-2 md:size-3 4k:size-6 rounded-full bg-white"></span>
        <span className="text-xs md:text-sm 4k:text-2xl text-muted-foreground">
            Available for full-time opportunities
        </span>
    </div>
</div>

                <div className="md:absolute bottom-[10%] right-[4%] w-full md:w-auto flex flex-col mobile-l:flex-row mobile-l:flex-wrap md:flex-col gap-4 md:gap-8 text-left md:text-right mt-10 md:mt-0 4k:gap-16">
                    <div className="slide-up-and-fade">
                       <h5 className="text-2xl mobile-m:text-3xl sm:text-4xl laptop-l:text-5xl 4k:text-7xl font-anton text-primary mb-1 4k:mb-4">
    1+
</h5>
<p className="text-xs mobile-m:text-sm 4k:text-2xl text-muted-foreground">
    Year of Shipping Real Projects
</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-2xl mobile-m:text-3xl sm:text-4xl laptop-l:text-5xl 4k:text-7xl font-anton text-primary mb-1 4k:mb-4">
                            10+
                        </h5>
                        <p className="text-xs mobile-m:text-sm 4k:text-2xl text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-2xl mobile-m:text-3xl sm:text-4xl laptop-l:text-5xl 4k:text-7xl font-anton text-primary mb-1 4k:mb-4">
                            2K+
                        </h5>
                        <p className="text-xs mobile-m:text-sm 4k:text-2xl text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
