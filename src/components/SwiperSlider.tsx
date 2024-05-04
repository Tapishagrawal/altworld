import { EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-creative';
export interface SwiperSliderProps {
    images: { img: string, question: string }[];
}
export default function SwiperSlider({ images }: SwiperSliderProps) {
    return (
        <div>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper3"
            >
                {
                    images?.map((img, i) => (
                        <SwiperSlide key={i} className='relative'>
                            <div className='absolute bg-gradient-to-t from-black w-[400px] h-[600px] left-0 opacity-80 text-sm overflow-hidden object-cover object-center'></div>
                            <img src={img.img} alt="" className='w-full h-[600px] object-cover object-center' />
                            <div className='absolute bottom-0 left-[50%] -translate-x-[50%] text-center bg-gradient-to-t from-black w-full p-5'>
                                <h1 className='text-white text-sm'>{img.question}</h1>
                                <p className='text-white text-sm'>Question {i + 1}/{images.length}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
