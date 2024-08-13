import Testimonial from "../../components/testimonial";

const Home = () => {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Testimonial slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default Home;
