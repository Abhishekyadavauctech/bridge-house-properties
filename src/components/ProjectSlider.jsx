import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";

const projects = [
  {
    title: "KNS Samooha Phase I",
    subtitle: "By KNS Group, Nelamangala Road, Bangalore",
    area: "Area 1200 - 2400 sqft",
    price: "63 Lac onwards",
    image:
      "https://cdn.staticmb.com/property/microsite/mbimages/01251264/featured-commercial-spaces-new-img2.jpg",
    features: ["VP Magnus Hospital - 4.6 Km", "Harsha Institution - 3.9 Km"],
    link: "https://www.magicbricks.com/kns-samooha-kns-samooha-phase-i-nelamangala-road-bangalore-pdpid-4d4235343239303837/prjDtId-4d42383830383739",
  },
  {
    title: "Nanda Prakruthi",
    subtitle: "By Nanda Shelters, Kanakapura Road, Bangalore",
    area: "Area 2131- 2906 sqft",
    price: "1.03 Cr onwards",
    image:
      "https://cdn.staticmb.com/property/microsite/mbimages/01205281/featured-commercial-spaces-new-img.jpg",
    features: [
      "Nearby NPS School in education institutions",
      "Upcoming Namma Metro stations in Kanakapura Road",
    ],
    link: "https://www.magicbricks.com/nanda-prakruthi-kanakapura-road-bangalore-pdpid-4d4235303338353331/prjDtId-4d42313137303931",
  },
  {
    title: "Indian Springs",
    subtitle: "By Urbanize Group, Electronic City, Bangalore",
    area: "Area 1200 - 2800 sqft",
    price: "1.15 Cr onwards",
    image:
      "https://cdn.staticmb.com/property/microsite/mbimages/01230166/featured-commercial-spaces-new-img1.jpg",
    features: ["Motherhood Hospital - 3.5 Kms", "Treamis World School - 700 Mtr"],
    link: "https://www.magicbricks.com/indian-springs-electronic-city-bangalore-pdpid-4d4235343236343735/prjDtId-4d42383530363639",
  },
  {
    title: "KNS Billore",
    subtitle: "By KNS Infrastructure Pvt Ltd, Yelahanka, Bangalore",
    area: "Area 1200 - 2100 sqft",
    price: "60 Lac onwards",
    image:
      "https://cdn.staticmb.com/property/microsite/mbimages/01231664/featured-commercial-spaces-new-img.jpg",
    features: [
      "Doddaballapura Textile Integrated Park - 5Km",
      "Shree Kempegowda Hospital - 6.5Km",
    ],
    link: "https://www.magicbricks.com/kns-billore-yelahanka-bangalore-pdpid-4d4235343233363837/prjDtId-4d42383533343433",
  },
];

export default function ProjectSlider() {
  return (
    <section className="newlanchwraper section-block" id="newlanches">
      <div className="plotcontainer">
        <div className="plotcontainer__title">
          New Launches &amp; Upcoming Projects - Bangalore
        </div>
        <Swiper
          modules={[Navigation, Parallax]}
          navigation
          parallax
          spaceBetween={30}
          slidesPerView={1}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="newlanchwraper__pos__imgwrap"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    height: "400px",
                    borderRadius: "10px",
                    position: "relative",
                  }}
                >
                  <div
                    className="newlanchwraper__pos__contentwrap"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      padding: "20px",
                      background: "linear-gradient(90deg,#ff7e5f,#feb47b)",
                      color: "#fff",
                      width: "50%",
                      height: "100%",
                      borderRadius: "10px 0 0 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h2>{project.title}</h2>
                    <p>{project.subtitle}</p>
                    <p>{project.area}</p>
                    <p>{project.price}</p>
                    <ul>
                      {project.features.map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>
                    <button
                      style={{
                        marginTop: "10px",
                        background: "#000",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
