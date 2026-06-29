import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../components/ui/SectionHeading";
import DishCard from "../../components/ui/DishCard";
import MagneticButton from "../../components/ui/MagneticButton";
import { featured } from "../../data/dishes";

export default function FeaturedDishes() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Chef's Hand"
          title="Signature plates"
          sub="A short list the kitchen would stake its name on. Each one has earned its place on the pass."
        />

        <div className="mt-10 grid gap-5 xs:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xs:gap-6">
          {featured.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} i={i} />
          ))}
        </div>

        <div className="mt-10 text-center xs:mt-14">
          <MagneticButton as={Link} to="/menu" variant="ghost">
            Explore the full menu <FiArrowUpRight />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
