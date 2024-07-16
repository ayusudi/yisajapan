import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FooterIcon, Footer, FooterCopyright, FooterTitle, FooterLinkGroup, FooterLink } from "flowbite-react";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import LocalSwitcher from './local-switcher';

export default function Component() {
  const t = useTranslations('Footer');

  return (
    <Footer theme={{ root: { base: "rounded-0 font-roboto " } }} id='footer' >
      <div className="container m-auto pt-[100px]">
        <div className="grid  justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image
              src="/logo.png"
              alt="Flowbite Logo"
              width="174"
              height="174"
              className='mx-4'
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <FooterTitle title="Community" className='text-main' />
              <FooterLinkGroup col>
                <FooterLink className='text-[#A9CEB5]' href="#">About Us</FooterLink>
                <FooterLink className='text-[#A9CEB5]' href="#">How to Donate</FooterLink>
                <FooterLink className='text-[#A9CEB5]' href="#">Gallery</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Articles" className='text-main' />
              <FooterLinkGroup col>
                <FooterLink className='text-[#A9CEB5]' href="#">Fiqih</FooterLink>
                <FooterLink className='text-[#A9CEB5]' href="#">Taqwa</FooterLink>
                <FooterLink className='text-[#A9CEB5]' href="#">Ibadah</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Questions & Answers" className='text-main w-5/6' />
              <FooterLinkGroup col>
                <FooterLink className='text-[#A9CEB5]' href="#">How to Ask</FooterLink>
                <FooterLink className='text-[#A9CEB5]' href="#">About Project</FooterLink>
                <FooterLink className='text-[#A9CEB5]' href="#">Corporate</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className='text-main'>
              <FooterTitle title="Language" className='text-main' />
              <LocalSwitcher />
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between py-10 mt-10">
          <FooterCopyright className='text-main' href="#" by="YISAJapan." year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center  mr-10">
            <FooterIcon className='text-main' href="https://www.facebook.com/yisainjapan" icon={BsFacebook} />
            <FooterIcon className='text-main' href="https://www.instagram.com/yisa.fridaylecture" icon={BsInstagram} />
            {/* <FooterIcon className='text-main' href="#" icon={BsYoutube} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}

