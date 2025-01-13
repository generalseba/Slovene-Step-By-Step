import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemButton } from "../ui/ApearanceSwitchButton";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "./language-swithcher";
import { useAuth } from "../auth/AuthProvider";
import { LogoutButton } from "../auth/LogoutButton";
import { UserButton } from "../auth/UserButton";
import { Button } from "../ui/button";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";

export default function MyDialog({ mobileMenuOpen, setMobileMenuOpen, navigationPublic, navigationPrivate, locale }) {

    const pathname = usePathname();
    const t = useTranslations('Navbar');
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
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm px-6 py-6 shadow-lg"
                        />

                        <DialogPanel>
                            <motion.div
                                initial={{ y: "100%" }} // Start off-screen
                                animate={{ y: 0 }} // Slide into view
                                exit={{ y: "100%" }} // Slide out to the bottom
                                transition={{ duration: 0.3, ease: "easeInOut", type: "" }}
                                // transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="fixed overflow-auto top-[10vh] inset-x-0 z-50 h-[90vh] bg-white dark:bg-[#121212] px-6 py-6 rounded-t-xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <Link href={"/"} className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                            <span className="sr-only">Company</span>
                                            <img
                                                alt="Company Logo"
                                                src={`/Logo.svg`}
                                                className="h-8 w-auto"
                                            />
                                        </Link>
                                        <div className="flex justify-center items-center">
                                            <LanguageSwitcher locale={locale} />
                                            <ThemButton />
                                            <button
                                                type="button"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="-m-2.5 rounded-md p-2.5 text-custom-light-4 dark:text-custom-dark-4"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon aria-hidden="true" className="size-6" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                {navigationPrivate.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 dark:hover:text-custom-accent-d dark:hover:bg-[#121212] ${pathname.includes(item.href) ? "text-custom-accent-l dark:text-custom-accent-d" : "text-custom-light-3 dark:text-custom-dark-3"}`}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {t(item.name)}
                                                    </a>
                                                ))}

                                                {navigationPublic.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 dark:hover:text-custom-accent-d dark:hover:bg-[#121212] ${pathname.includes(item.href) ? "text-custom-accent-l dark:text-custom-accent-d" : "text-custom-light-3 dark:text-custom-dark-3"}`}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {t(item.name)}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex justify-between items-center">
                                        {!user ? (
                                            <a
                                                href="/auth/login"
                                                className={`text-sm/6 font-semibold ${pathname.includes("/login")
                                                    ? "text-custom-accent-l dark:text-custom-accent-d"
                                                    : "text-custom-light-3 dark:text-custom-dark-3"
                                                    } hover:text-custom-accent-l dark:hover:text-custom-accent-d`}
                                            >
                                                {t("log-in")} <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        ) : loading ? (
                                            <span>Loading...</span>
                                        ) : (
                                            <>
                                                <Button variant="link" className="p-0" asChild>
                                                    <Link href={"/dashboard/settings"} className="flex items-center gap-2">
                                                        <Cog6ToothIcon />
                                                        <p>
                                                            Settings
                                                        </p>
                                                    </Link>
                                                </Button>
                                                <UserButton />
                                            </>

                                        )}
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

