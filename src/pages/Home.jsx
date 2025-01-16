import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import banner1 from '../assets/all.jpg'
import banner2 from '../assets/pooh.jpg'
import banner3 from '../assets/tiger.jpg'
import banner4 from '../assets/eeyore.jpg'
import banner5 from '../assets/piglet.jpg'
import banner6 from '../assets/honey.jpg'

import winniethepooh from '../assets/winnie the pooh.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProduct from "../components/CardProduct"
import { useSelector } from "react-redux"

const Home = () => {
    const [bannerData] = useState([
        {
            title: "Banner 1",
            image: banner1
        },
        {
            title: "Banner 2",
            image: banner2
        },
        {
            title: "Banner 3",
            image: banner3
        },
        {
            title: "Banner 4",
            image: banner4
        },
        {
            title: "Banner 5",
            image: banner5
        },
        {
            title: "Banner 6",
            image: banner6
        },
        
    ])
    const {product} = useSelector(root => root)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900
      };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <Slider {...settings}>
                    {
                        bannerData.map((banner, index) => (
                        <img src={banner.image} alt={banner.title} key={index} />
                    ))}
                </Slider>
            </div>
            <div className="container p-4">
                <div className="row">
                    {
                        product.map((product, index) => <CardProduct key={index} {...product} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home