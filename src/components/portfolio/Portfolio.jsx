import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { newItemsPack2 as items } from "../../items.js";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <div className="carCont">
              <Carousel
                className="car"
                showThumbs={false}
                infiniteLoop={true}
              >
                {item.images.map((img, i) => (
                  <div key={i} className="carDiv">
                    <img src={img} alt="" className="carImg" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>
              {item.desc}
              {item.flink ? (
                <a
                  href={item.flink}
                  target="_blank"
                  style={{ color: "lightgrey", fontSize: 16 }}
                >
                  <br />
                  Figma Link
                </a>
              ) : (
                ""
              )}
            </p>

            {item.tunnel && (
              <span>
                info: using a tunnel for live demo so a warning will pop up when
                accessing the link, feel free to check the pics if you don't
                trust it
              </span>
            )}

            <div className="btnCont">
              <a href={item.ghlink} target="_blank">
                <button>Source Code</button>
              </a>
              {item.tunnel && (
                <a href={item.tunnel} target="_blank">
                  <button>Live Demo</button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    targer: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;