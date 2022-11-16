import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import BannerItems from './BannerItems';


const bannerData = [
    {
        image: img1,
        prv: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prv: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prv: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prv: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prv: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prv: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full pb-20 ">

            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;