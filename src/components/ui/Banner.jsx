"use client";
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";

export default function Banner() {

    const [show, setShow] = useState(true);

    const t = useTranslations("Banner");

    return (
        <div className={show ? 'block' : 'hidden'}>
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#FF5555] opacity-90 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="text-sm/6 text-white">
                        <FiAlertTriangle className="mx-2 inline size-5 text-white -translate-y-[2.5px]" />
                        <strong className="text-lg font-semibold">{t("title")}</strong>
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                        </svg>
                        {t("message")}
                        <FiAlertTriangle className="mx-2 inline size-5 text-white -translate-y-[2.5px]" />
                    </div>
                </div>
                <div className="flex flex-1 justify-end">
                    <button type="button" onClick={() => setShow(false)} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon aria-hidden="true" className="size-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}
