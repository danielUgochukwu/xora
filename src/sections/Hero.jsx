import { Element, Link as LinkScroll } from "react-scroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../components/Button.jsx";

const Hero = () => {
  const headingRef = useRef(null);
  const captionRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Timeline for the animations
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(
      captionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power1.out" }
    );
  }, []);

  return (
    <section
      className={`relative pt-36 pb-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-36`}
    >
      <Element name={`hero`}>
        <div className={`container relative z-2`}>
          <div className={`relative max-w-512 max-lg:max-w-388`}>
            <div className={`caption uppercase text-p3`} ref={captionRef}>
              Video Editing
            </div>
          </div>
          <h1
            className={`max-w-400 mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12`}
            ref={headingRef}
          >
            Amazingly simple
          </h1>
          <p
            className={`max-w-440 mb-14 body-1 max-md:mb-10`}
            ref={paragraphRef}
          >
            We designed XORA AI Video Editor to be an easy to use, quick to
            learn, and surprisingly powerful.
          </p>
          <LinkScroll to={`features`} offset={-100} spy smooth>
            <Button icon={`/images/zap.svg`}>Try it now</Button>
          </LinkScroll>
        </div>

        <div
          className={`absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res`}
          ref={imageRef}
        >
          <img src="/images/hero.png" alt="hero" className={`size-1230`} />
        </div>
      </Element>
    </section>
  );
};

export default Hero;
