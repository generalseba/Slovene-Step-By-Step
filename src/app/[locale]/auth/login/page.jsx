import { LoginForm } from "@/components/auth/LoginForm";
import SvgBlob from "@/components/ui/svg-blob";
import SvgBlobContainer from "@/components/ui/svg-blob-container";
import { createClient } from "@/utils/supabase/server";
import { getTranslations } from 'next-intl/server';
import { redirect } from "next/navigation";


export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    return {
        title: t("log-title"),
        //   description: t("log-desc"),
    };
}

export default async function LogInPage() {

    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (data.user) {
        redirect('/');
    }

    return (
        <section className="h-screen">
            <SvgBlobContainer top={true}>
                <SvgBlob color={"blue"} />
            </SvgBlobContainer>
            <div className="flex justify-center items-center">
                <LoginForm />
            </div>
            {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-7xl">
                        {t("title")}
                    </h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl/8">
                        {t("subtitle")}
                    </p>
                </div>
            </div> */}
            <SvgBlobContainer top={false}>
                <SvgBlob color={"green"} />
            </SvgBlobContainer>
        </section>
    );
}
