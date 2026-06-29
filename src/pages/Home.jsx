import Hero from "../sections/home/Hero";
import FeaturedDishes from "../sections/home/FeaturedDishes";
import ChefRecommendation from "../sections/home/ChefRecommendation";
import Stats from "../sections/home/Stats";
import TodaysSpecial from "../sections/home/TodaysSpecial";
import Experience from "../sections/home/Experience";
import Testimonials from "../sections/home/Testimonials";
import ReservationBanner from "../sections/home/ReservationBanner";
import Newsletter from "../sections/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <ChefRecommendation />
      <Stats />
      <TodaysSpecial />
      <Experience />
      <Testimonials />
      <ReservationBanner />
      <Newsletter />
    </>
  );
}
