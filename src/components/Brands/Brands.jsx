
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as SC from './Brands.styled'
import {useTranslations} from 'next-intl'


export default function Brands() {
    const t = useTranslations("translation")
    return (
        <SC.WrapperSwiper>
            <h1>{t('swiper.tittle')}</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                navigation={true}
                pagination={{ clickable: true }}
                
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,   
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
                loop={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide><Image src="/images/logos/bmw-logo.png" width={80} height={80} alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/5.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/jeep.png" width={80} height={80}alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/nissan-logo.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/Skoda-logo.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/volkswagen-logo.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/21.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/29.png" width={80} height={80}alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/8.png" width={50} height={70} alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/13.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/32.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/15.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/22.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/1.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/33.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/16.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/17.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/images/logos/23.png" width={80} height={80} alt="logo"/></SwiperSlide>
            </Swiper>
        </SC.WrapperSwiper>
    )

}