"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
// import Link from "next/link";
import { Link } from '@/i18n/routing';
import SvgBlobContainer from "./ui/svg-blob-container";
import SvgBlob from "./ui/svg-blob";
import { useTranslations } from 'next-intl';
import { BoxDecoration } from "./ui/BoxDecoration";
import { Background } from "./ui/Background";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const t = useTranslations('HomePage');
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);
    const chars = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline();
        const title = titleRef.current;

        const fullText = `${t("title-1")} ${t("title-strong")} ${t("title-2")}`;
        const strongWord = t("title-strong").trim();
        title.innerHTML = '';

        const container = document.createElement('div');
        container.className = 'justify-center sm:justify-start';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '0.25em';

        // Filter out empty strings and trim whitespace
        const words = fullText.split(' ').filter(word => word.trim().length > 0);

        words.forEach((word) => {
            const wordContainer = document.createElement('div');
            wordContainer.style.display = 'inline-flex';

            // Single color comparison
            if (word.trim() === strongWord) {
                wordContainer.className = 'text-custom-light-1 sm:text-custom-accent-l sm:dark:text-custom-accent-d';
            }

            word.split('').forEach((char) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.display = 'inline-block';
                wordContainer.appendChild(span);
                chars.current.push(span);
            });

            container.appendChild(wordContainer);
        });

        title.appendChild(container);

        // Animations remain the same
        tl.from(chars.current, {
            duration: 0.8,
            y: 100,
            rotationX: -90,
            stagger: 0.02,
            opacity: 0,
            ease: "back.out(1.7)"
        })
            .from(subtitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
            .from(buttonRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5");
    });

    return (
        <>
            <div className="flex sm:hidden absolute h-screen bg-custom-accent-l w-full flex-col-reverse">
                <div>
                    <img className="aspect-[9/16] w-full h-[70vh] object-cover sm:rounded-full bg-custom-accent-l" src="/herro-picture.png" alt="" />
                </div>
            </div>
            <div className="relative h-screen sm:h-fit flex flex-row-reverse mx-8 gap-x-5 lg:gap-x-20 lg:max-w-7xl justify-self-center overflow-hidden">
                <div className="hidden sm:block relative aspect-square sm:h-48 sm:mt-60 md:h-56 lg:h-96 lg:mt-40">
                    <img className="aspect-square w-auto sm:h-48 md:h-56 lg:h-96 object-cover rounded-full bg-custom-accent-l" src="/herro-picture.png" alt="" />
                </div>
                <div className="w-full py-[calc(100vh-90vh)] sm:py-48 lg:py-56">
                    <div className="mb-8 flex justify-center">
                        {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-custom-light-2 dark:text-custom-dark-2 ring-1 ring-gray-900/10 dark:ring-gray-200/25 hover:ring-gray-900/20"> */}
                        <div className="hidden">
                            {t("announcement")}{" "}
                            <Link href="#" className="font-semibold text-custom-accent-l dark:text-custom-accent-d">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {t("announcement-link")} <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center sm:text-start">
                        <h1 ref={titleRef} className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-custom-light-1 sm:dark:text-custom-dark-1 md:text-6xl lg:text-7xl">
                            <div>{t("title-1")} <strong className='text-custom-accent-l'>{t("title-strong")}</strong>{t("title-2")}</div>
                        </h1>
                        <p ref={subtitleRef} className="mt-8 outline-1 text-pretty text-lg font-medium text-white sm:text-custom-light-2 dark:text-custom-dark-2 sm:text-xl/8">
                            {t("under-title")}
                        </p>
                        <div ref={buttonRef} className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
                            <a
                                href={"/courses"}
                                className="rounded-2xl border-2 sm:border-none border-white bg-custom-button-l dark:bg-custom-button-d/75 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-200 shadow-sm hover:bg-custom-button-hover-l dark:hover:bg-custom-button-hover-d focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-button-hover-l"
                            >
                                {t("action-button")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}