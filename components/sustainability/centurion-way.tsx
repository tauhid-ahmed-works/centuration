import { useTranslations } from 'next-intl'
import { Icons } from '../icons'
import Wrapper from '../layout/wrapper'
import AnimatedCard from '../shared/animate-card'

export default function CenturionWay() {
  const t = useTranslations('HomePage')
  return (
    <section className="bg-gray-50 py-10 sm:px-10 md:px-0 md:py-10 md:mb-20">
      <Wrapper>
        <AnimatedCard index={0}>
          <div className="md:flex md:gap-10 items-center py-10">
            <div className="md:flex-1 justify-center space-y-6">
              <h3 className="text-center text-2xl md:text-5xl font-medium font-title">
                {t('sustainability_cen_way_title')}
              </h3>
              <p className="text-base text-center w-9/12 mx-auto">
                {t('sustainability_cen_way_title_text_1')}
              </p>
            </div>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 place-items-center mt-8">
          <AnimatedCard index={2}>
            <div className="max-w-96">
              <Icons.Financial className="size-32 mx-auto text-rose-500" />
              <p className="text-center">
                {t('sustainability_cen_way_currency_text')}
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={3}>
            <div className="max-w-96">
              <Icons.Inititution className="size-32 mx-auto text-sky-500" />
              <p className="text-center">
                {t('sustainability_cen_way_build_text')}
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={3}>
            <div className="max-w-96">
              <Icons.Values className="size-32 mx-auto text-orange-500" />
              <p className="text-center">
                {t('sustainability_cen_way_cultural_text')}
              </p>
            </div>
          </AnimatedCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center my-16">
          <AnimatedCard index={4}>
            <div className="max-w-96">
              <Icons.Environmental className="size-32 mx-auto text-green-500" />
              <p className="text-center">
                {t('sustainability_cen_way_environmental_text')}
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard index={5}>
            <div className="max-w-96">
              <Icons.LearningEnvionment className="size-32 mx-auto text-violet-500" />
              <p className="text-center">
                {t('sustainability_cen_way_unity_text')}
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Wrapper>
    </section>
  )
}
