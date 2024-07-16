import { useTranslations } from 'next-intl';
import { ReactElement } from 'react';
import Image from 'next/image';
import Carousel from '@/components/carrousel';

interface HomeProps {
  params: {
    segment: [locale: string, page: string, id: string];
  };
  searchParams?: Record<string, any> | undefined;
}

function HomeComponent() {
  const t = useTranslations('GalleryCarrousel');
  return (
    <section className='w-full font-roboto font-bold text-main flex flex-col mt-[80px] gap-[100px]'>
      <Image className='mx-auto' src="/logo.png" width="420" height="420" alt='logo' />
      <div className='flex flex-col gap-10 my-[60px] text-2xl  container mx-auto'>
        <p className='text-center'>وَمَنْ أَحْسَنُ قَوْلًۭا مِّمَّن دَعَآ إِلَى ٱللَّهِ وَعَمِلَ صَـٰلِحًۭا وَقَالَ إِنَّنِى مِنَ ٱلْمُسْلِمِينَ</p>
        <p className='text-center'>And who is better in speech than one who invites to Allah and does righteousness and says, &apos;Indeed, I am of the Muslims</p>
        <p className='text-center'>アッラーに呼びかけ、善行を行い、『本当に、私はムスリムである』と言う者よりも優れた言葉を持つ者は誰ですか</p>
        <p className='text-center'>-- Surah Fussilat (41:33) --</p>
      </div>
      <div id='carousel-bg'>
        <div className='mt-20'>
          <p className='text-center font-medium text-[24px] pt-8'>{t('title')}</p>
          <p className='text-[48px] font-roboto font-semibold text-center text-[#292525]'>{t('text')}</p>
        </div>
        <Carousel />
      </div>
    </section>
  )
}

export default function Home({ params: { segment }, searchParams }: HomeProps): ReactElement {
  const [locale, page, id] = segment;
  const t = useTranslations('IndexPage');


  return (
    <div>
      {!page && <HomeComponent />}
      {page && (
        <div className='container m-auto w-5/12 text-main pb-20 pt-10 m-auto mb-10'>
          <Image className='mx-auto' src="/logo.png" width="320" height="320" alt='logo' />
          <h1 className='text-4xl mt-16 font-semibold text-[#3d3d3d]'>{t('title')}</h1>
          <p>{t('description')}</p>
          <br />
          <p>Page : <b className='text-[#3d3d3d]'>{page}</b></p>
          <p>Language : <b className='text-[#3d3d3d]'>{locale}</b></p>
        </div>
      )}

    </div>
  );
}
