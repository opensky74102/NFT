import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Scrollbar, A11y } from "swiper";
import { Trans } from "react-i18next";
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function Team({ data, perview, nav }: any) {
  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: nav.nextEl,
          prevEl: nav.prevEl,
        }}
        spaceBetween={30}
        slidesPerView={perview}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ maxHeight: perview === 1 ? "440px" : "420px", padding: "20px" }}
      >
        {data.map((item: any, ind: number) => {
          return (
            <SwiperSlide key={ind} className="flex justify-center">
              <a href={item.link_url} target="_blank">
                <div className='team-member max-w-[300px]'>
                  <img src={`${item.url}`} className="w-[300px] bg-no-repeat m-auto" alt={item.name} />
                  <div className='name min-w-[250px] m-auto px-[16px] pt-[20px]'>
                    <h5 className='name text-[20px] text-white font-chakrapetch uppercase text-start font-bold hover:text-[#3d4db5] cursor-pointer'><Trans i18nKey={"name_" + ind}>{item.name}</Trans></h5>
                    <p className='role text-[16px] capitalize mb-[14px] text-start'
                    ><Trans i18nKey={"role_" + ind}>{item.role}</Trans></p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}