import { useTranslations } from "next-intl";
import Wrapper from "../layout/wrapper";

export default function OurCommitment() {
    const t = useTranslations("HomePage");
    return (
        <section className="py-10 sm:px-10 md:px-0 md:py-10 md:mb-20">
            <Wrapper>
                <div className="md:flex md:gap-20 items-center">
                    <h3 className="text-3xl md:text-5xl font-medium font-title flex-1">
                        {t("sustainability_commitment_towards_title")}
                    </h3>
                    <div className="flex-1">
                        <p className="text-base mb-5">
                            {t("sustainability_commitment_towards_text_1")}
                        </p>
                        <p className="text-base italic">
                            {t("sustainability_commitment_towards_text_2")}
                        </p>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
