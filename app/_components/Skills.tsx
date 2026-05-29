'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-10 md:space-y-20 4k:space-y-40">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid md:grid-cols-12 gap-y-4 md:gap-y-0" key={key}>
                            <div className="md:col-span-5">
                                <p className="slide-up text-3xl mobile-m:text-4xl md:text-5xl laptop-l:text-6xl 4k:text-9xl font-anton leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                            </div>
                            <div className="md:col-span-7 flex gap-x-6 mobile-m:gap-x-11 4k:gap-x-20 gap-y-6 md:gap-y-9 4k:gap-y-20 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-2 mobile-m:gap-3.5 4k:gap-8 items-center leading-none"
                                        key={item.name}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width="40"
                                            height="40"
                                            className="h-8 mobile-m:h-10 4k:h-24 4k:w-24 object-contain"
                                        />
                                        <span className="text-lg mobile-m:text-xl md:text-2xl 4k:text-6xl capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
