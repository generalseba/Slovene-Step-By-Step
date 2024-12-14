import { RocketLaunchIcon, ChatBubbleLeftRightIcon, ArrowTrendingUpIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import { useTranslations } from "next-intl";


export default function DetailsPageHero() {

    const t = useTranslations("HomePage");

    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-500/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-500">{t("why-slovene-subtitle")}</p>
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                                {t("why-slovene-title")}
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                {t("why-slovene-text1")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="https://placehold.co/300x200"
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                    <h1 className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                        Image of the app/ product
                    </h1>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4 lg:block sm:flex sm:justify-center">
                        <div className="max-w-xl text-base/7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
                            <p>
                                {t("why-slovene-text2")}
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                                <li className="flex gap-x-3">
                                    <RocketLaunchIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-500" />
                                    <span>
                                        <strong className="font-semibold text-gray-900 dark:text-gray-200">{t("why-slovene-point1-strong")}</strong> {t("why-slovene-point1")}
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-500" />
                                    <span>
                                        <strong className="font-semibold text-gray-900 dark:text-gray-200">{t("why-slovene-point2-strong")}</strong> {t("why-slovene-point2")}
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <BookOpenIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-500" />
                                    <span>
                                        <strong className="font-semibold text-gray-900 dark:text-gray-200">{t("why-slovene-point3-strong")}</strong> {t("why-slovene-point3")}
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                {t("why-slovene-text3")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
