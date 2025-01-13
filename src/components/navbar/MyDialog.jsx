import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemButton } from "../ui/ApearanceSwitchButton";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-swithcher";
import { useAuth } from "../auth/AuthProvider";
import { LogoutButton } from "../auth/LogoutButton";
import { UserButton } from "../auth/UserButton";
import { Button } from "../ui/button";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";

export default function MyDialog({
    mobileMenuOpen,
    setMobileMenuOpen,
    navigationPublic,
    navigationPrivate,
    locale,
}) {
    const pathname = usePathname();
    const t = useTranslations("Navbar");
    const { user, loading } = useAuth();

    return (
        <div>
            <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen && (
                    <Dialog
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                        className="lg:hidden"
                        as={motion.div} // Make the Dialog itself animated
                        static // Ensures Dialog content stays in the DOM for animations
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 bg-black/50 dark:bg-black/25 backdrop-blur-sm px-6 py-6 shadow-lg"
                        />

                        <DialogPanel>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                // transition={{ duration: 0.3, ease: "easeInOut" }}
                                // className="fixed overflow-auto top-0 inset-x-0 z-50 h-screen bg-gray-200 dark:bg-[#242424] bg-overlay px-6 py-6 rounded-t-xl flex flex-col justify-between"
                                className="bg-white dark:bg-[#242424] fixed overflow-hidden inset-0 z-50 h-screen max-h-screen w-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]"
                            >
                                <div className="absolute h-16 px-6 py-9 flex items-center justify-between w-screen left-0 top-0 z-50 bg-white dark:bg-[#242424]">
                                    {/* <div className="flex items-center justify-between"> */}
                                    <Link
                                        href="/"
                                        type="button"
                                        className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
                                    >
                                        <span className="sr-only">Slovene Step By Step</span>
                                        <img
                                            alt="Company Logo"
                                            src={`/Logo.svg`}
                                            className="h-7 w-auto"
                                        />
                                    </Link>
                                    {/* <div className="flex justify-center items-center"> */}
                                    {/* <LanguageSwitcher locale={locale} /> */}
                                    {/* <ThemButton /> */}
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        // className="-m-2.5 rounded-md p-2.5 text-custom-light-4 dark:text-custom-dark-4"
                                        className="inline-flex items-center justify-center p-2 rounded-md text-foreground-lighter focus:ring-brand hover:text-foreground-light transition-colors focus:outline-none focus:ring-2 focus:ring-inset"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                    {/* </div> */}
                                    {/* </div> */}
                                </div>
                                <div className="max-h-screen flex flex-col justify-between supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
                                    {/* <div className="mt-6 flow-root"> */}
                                    {/* <div className="-my-6 divide-y divide-gray-500/10"> */}

                                    <div className=" flex flex-col space-y-1">
                                        {navigationPrivate.map((item) => (
                                            <div
                                                key={item.name}
                                                className="border-b border-gray-200 dark:border-white/10"
                                            >
                                                <a
                                                    href={item.href}
                                                    // className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 dark:hover:text-custom-accent-d dark:hover:bg-[#121212] ${pathname.includes(item.href) ? "text-custom-accent-l dark:text-custom-accent-d" : "text-custom-light-3 dark:text-custom-dark-3"}`}
                                                    className="block py-2 pl-3 pr-4 text-base font-medium text-foreground hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {t(item.name)}
                                                </a>
                                            </div>
                                        ))}

                                        {navigationPublic.map((item) => (
                                            <div
                                                key={item.name}
                                                className="border-b border-gray-200 dark:border-white/10"
                                            >
                                                <Link
                                                    href={item.href}
                                                    // className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 dark:hover:text-custom-accent-d dark:hover:bg-[#121212] ${pathname.includes(item.href) ? "text-custom-accent-l dark:text-custom-accent-d" : "text-custom-light-3 dark:text-custom-dark-3"}`}
                                                    className="block py-2 pl-3 pr-4 text-base font-medium text-foreground hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {t(item.name)}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-0 mb-10">
                                        <div className="w-full flex justify-between items-center">
                                            <a
                                                href="/auth/login"
                                                className="block py-2 pl-3 pr-4 text-base font-medium text-foreground hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
                                            // className={`text-sm/6 font-semibold ${pathname.includes("/login")
                                            //     ? "text-custom-accent-l dark:text-custom-accent-d"
                                            //     : "text-custom-light-3 dark:text-custom-dark-3"
                                            //     } hover:text-custom-accent-l dark:hover:text-custom-accent-d`}
                                            >
                                                <p className="truncate">Dashboard</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogPanel>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
}
