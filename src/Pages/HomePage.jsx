import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import {kelasTerbaru, dataSwiper} from "../data/index"
import {useNavigate} from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Homepage = () => {
    let navigate = useNavigate();

    return <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
            <Container>
                <Row className="header-box d-flex align-items-center pt-lg-5">
                    <Col lg="6">
                        <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                            This is <br /> <span>Khalil Portofolio</span> <br /> Check It Out
                        </h1>
                        <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s" >Halo semuanya! Selamat datang di web portofolio saya! Ayo kita jelajahi lebih lanjut tentang saya dan karya-karya saya.</p>
                        <button className="btn btn-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">HALOO GESS</button>
                    </Col>
                    <Col lg="6" className="pt-lg-0 pt-5">
                        <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp"/>
                    </Col>
                </Row>
            </Container>
        </header>
        <div className="deskripsiSaya w-100 min-vh-10" data-aos="fade-right" data-aos-duration="800">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold">Tentang Saya</h1>
                        <p className="text-center">Halo, perkenalkan nama saya Muhammad Khalil Adha. Saat ini saya sedang menempuh pendidikan di IPB University. Saya adalah seorang yang bersemangat dalam belajar dan mengembangkan diri. Dengan latar belakang di bidang teknologi, saya memiliki minat yang besar dalam pemrograman dan desain web. Saya senang mengeksplorasi teknologi baru dan menciptakan solusi yang inovatif untuk masalah yang kompleks. Selain itu, saya juga memiliki keterampilan dalam berkolaborasi dengan tim untuk mencapai tujuan bersama. Saya percaya bahwa dengan dedikasi dan kerja keras, saya dapat terus berkembang dan memberikan kontribusi yang berarti</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="kelas w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold">Skill Set</h1>
                        <p className="text-center fw-bold">Beberapa Kemampuan Saya Dalam Dunia Kerja Dan Bisnis</p>
                    </Col>
                </Row>
                <Row>
                    {kelasTerbaru.map((kelas) => {
                        return (<Col key={kelas.id} className="shadow" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                            <img src={kelas.image} alt="unsplash.com" className="w-100 mb-4 rounded-top"/>
                            <h5 className="mb-3 px-3">{kelas.title}</h5>
                            <div className="kelas d-flex justify-content-between align-items-center px-3 pb-3">
                                <h6 className="">{kelas.desk}</h6>
                            </div>
                        </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
        <div className="testimonial py-5">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold my-5">Apa Kata Mereka Tentang Saya</h1>
                    </Col>
                </Row>
                <Row>
                <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
        {dataSwiper.map((data) => {
            return(
                <SwiperSlide key={data.id} className="shadow">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                    <img src={data.image} alt=""></img>
                    <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
                </Row>
            </Container>
        </div>
    </div>
}

export default Homepage
