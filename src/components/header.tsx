import { useTranslations } from 'next-intl';
import Link from 'next/link';
// import LocalSwitcher from './local-switcher';

interface HeaderProps {
  page?: string;
  locale?: string
}

export default function Header({ page, locale }: HeaderProps) {
  const t = useTranslations('Navigation');

  return (
    <header className='px-4 py-12 pb-0'>
      <nav className='font-roboto flex items-center justify-center text-main flex gap-[50px] text-lg'>
        <Link className={`${!page && 'text-pale'}`} href={'/' + locale}>{t('home')}</Link>|
        <Link className={`${page === 'articles' && 'text-pale'}`} href={'/' + locale + '/articles'}>{t('articles')}</Link>|
        <Link className={`${page === 'gallery' && 'text-pale'}`} href={'/' + locale + '/gallery'}>{t('gallery')}</Link>|
        <Link className={`${page === 'qna' && 'text-pale'}`} href={'/' + locale + '/qna'}>{t('qna')}</Link>|
        <Link className={`${page === 'about-us' && 'text-pale'}`} href={'/' + locale + '/about-us'}>{t('aboutus')}</Link>
        {/* <LocalSwitcher /> */}
      </nav>
    </header>
  );
}
