import React from 'react'
import Image from 'next/future/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import atvosLogo from '../../assets/partners-logo/atvos-logo.svg'
import comporteLogo from '../../assets/partners-logo/comporte-logo.svg'
import einsteinLogo from '../../assets/partners-logo/einstein-logo.svg'
import engieLogo from '../../assets/partners-logo/engie-logo.svg'
import gerdauLogo from '../../assets/partners-logo/gerdau-logo.svg'
import hidroviasLogo from '../../assets/partners-logo/hidrovias-logo.svg'
import iharaLogo from '../../assets/partners-logo/ihara-logo.svg'
import lafargeLogo from '../../assets/partners-logo/lafarge-logo.svg'
import magnesitaLogo from '../../assets/partners-logo/magnesita-logo.svg'
import mercedesLogo from '../../assets/partners-logo/mercedes-logo.svg'
import piracanjubaLogo from '../../assets/partners-logo/piracanjuba-logo.svg'
import plusoftLogo from '../../assets/partners-logo/plusoft-logo.svg'
import swiftLogo from '../../assets/partners-logo/swift-logo.svg'
import transpetroLogo from '../../assets/partners-logo/transpetro-logo.svg'
import uolLogo from '../../assets/partners-logo/uol-logo.svg'
import votorantimLogo from '../../assets/partners-logo/votorantim-logo.svg'
import whirlpoolLogo from '../../assets/partners-logo/whirlpool-logo.svg'

export const CompaniesContainer: React.FC = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mt-28 flex items-center justify-center 2xl:mt-20"
        loop={true}
      >
        <SwiperSlide className="flex items-center justify-center gap-36 2xl:gap-24">
          <Image
            src={whirlpoolLogo}
            alt="whirlpool logo"
            className="2xl:w-24"
          />
          <Image
            src={mercedesLogo}
            alt="mercedes logo"
            className="w-20 2xl:w-20"
          />
          <Image src={transpetroLogo} alt="transpetro logo" className="w-24" />
          <Image src={gerdauLogo} alt="gerdau logo" />
          <Image
            src={piracanjubaLogo}
            alt="piracanjuba logo"
            className="w-24 2xl:hidden"
          />
          <Image src={uolLogo} alt="uol logo" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center gap-32 2xl:gap-24">
          <Image src={hidroviasLogo} alt="hidrovias logo" className="w-52" />
          <Image src={atvosLogo} alt="atvos logo" />
          <Image src={engieLogo} alt="engie logo" className="w-32 2xl:hidden" />
          <Image src={comporteLogo} alt="comporte logo" className="w-28" />
          <Image src={iharaLogo} alt="ihara logo" className="w-20" />
          <Image src={lafargeLogo} alt="lafarge logo" className="w-20" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center gap-32 2xl:gap-24">
          <Image src={swiftLogo} alt="swift logo" />
          <Image src={einsteinLogo} alt="einstein logo" />
          <Image src={magnesitaLogo} alt="magnesita logo" className="w-20" />
          <Image src={plusoftLogo} alt="plusoft logo" className="w-32" />
          <Image
            src={comporteLogo}
            alt="comporte logo"
            className="w-28 2xl:hidden"
          />
          <Image src={votorantimLogo} alt="votorantim logo" className="w-20" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center gap-32 2xl:gap-24">
          <Image
            src={piracanjubaLogo}
            alt="piracanjuba logo"
            className="w-24"
          />
          <Image src={comporteLogo} alt="comporte logo" className="w-28" />
          <Image src={engieLogo} alt="engie logo" className="w-32 2xl:w-28" />
          <Image
            src={whirlpoolLogo}
            alt="whirlpool logo"
            className="2xl:w-24"
          />
          <Image
            src={mercedesLogo}
            alt="mercedes logo"
            className="w-20 2xl:w-20"
          />
          <Image
            src={transpetroLogo}
            alt="transpetro logo"
            className="w-24 2xl:hidden"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
