const portrait = (id, w = 700) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const chefs = [
  {
    id: "c1",
    name: "Arjun Rao",
    role: "Executive Chef",
    years: 18,
    image: portrait("1577219491135-ce391730fb2c"),
    note: "Trained in Lyon, returned to the coast to cook the sea he grew up on.",
    skills: ["Coastal", "French technique", "Fire"],
  },
  {
    id: "c2",
    name: "Mira Fernandes",
    role: "Pastry Chef",
    years: 12,
    image: portrait("1583394838336-acd977736f90"),
    note: "Believes dessert is the sentence a meal is remembered by.",
    skills: ["Patisserie", "Chocolate", "Plating"],
  },
  {
    id: "c3",
    name: "Devin Shetty",
    role: "Sous Chef",
    years: 9,
    image: portrait("1581299894007-aaa50297cf16"),
    note: "Runs the pass like a metronome; nothing leaves the kitchen imperfect.",
    skills: ["Saucier", "Precision", "Seafood"],
  },
  {
    id: "c4",
    name: "Lena Costa",
    role: "Head Barista",
    years: 7,
    image: portrait("1607631568010-a87245c0daf8"),
    note: "Sources single-estate beans from the Chikmagalur hills.",
    skills: ["Espresso", "Filter", "Latte art"],
  },
];
