'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
              <h2 className="text-3xl mobile-m:text-4xl md:text-6xl laptop-l:text-7xl 4k:text-9xl font-thin mb-10 mobile-m:mb-20 4k:mb-32 slide-up-and-fade">
    I engineer intelligent digital products by blending full stack development,
    creative interfaces, and Gen AI integrations into impactful user
    experiences.
</h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5 mb-6 md:mb-0">
                        <p className="text-4xl mobile-m:text-5xl laptop-l:text-6xl 4k:text-8xl slide-up-and-fade">
                            Hi, I&apos;m Vardhan.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                     <div className="text-base mobile-m:text-lg laptop-l:text-2xl 4k:text-5xl text-muted-foreground max-w-[450px] laptop-l:max-w-2xl 4k:max-w-5xl">
    <p className="slide-up-and-fade">
        I&apos;m a Full Stack Developer and Gen AI enthusiast passionate about
        transforming ideas into scalable, intelligent digital products. I
        specialize in building modern web applications with seamless user
        experiences and powerful backend architectures.
    </p>

    <p className="mt-4 4k:mt-10 slide-up-and-fade">
        My approach combines performance, scalability, and AI-driven innovation
        to create solutions tailored to both user needs and business goals. By
        focusing on responsiveness, accessibility, and clean architecture, I
        strive to deliver impactful experiences that drive real-world results.
    </p>
</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
