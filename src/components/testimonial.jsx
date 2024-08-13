import React from "react";
import { DotButton, useDotButton } from "../components/emblaDot";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../components/emblaButton";
import useEmblaCarousel from "embla-carousel-react";
import images from "../constants/images";

const Testimonial = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-[1280px] mx-auto my-5 flex flex-row justify-between items-center">
      <div>left side</div>
      <section className="relative w-3/5">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((index) => (
              <div
                className="grow-0 shrink-0 w-full  transform translate-x-0 translate-y-0 translate-z-0 gap-0 m-0 p-0"
                key={index}
              >
                <img src={images.Slide2} alt="slides" className="rounded" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 -left-5 flex h-full justify-center items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="absolute top-0 -right-5 flex h-full justify-center items-center">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="absolute -bottom-5 left-0 w-full flex justify-center items-center gap-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-1.5 h-1.5 rounded-sm transition-colors duration-300 ${index === selectedIndex ? 'bg-red-500' : 'bg-slate-300'}`}
            />
          ))}
        </div>

        {/* <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Testimonial;
