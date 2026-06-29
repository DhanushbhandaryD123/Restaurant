import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, sub, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-3 xs:mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal i={1}>
        <h2
          className="font-display leading-tight text-cream"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal i={2}>
          <p className="mt-4 font-serif text-base text-cream/60 xs:mt-5 xs:text-lg">{sub}</p>
        </Reveal>
      )}
      <Reveal i={3}>
        <div className={`hairline mt-6 xs:mt-7 ${center ? "mx-auto" : ""} w-16 xs:w-24`} />
      </Reveal>
    </div>
  );
}
