export const partners = [
  { name: "ProfitWell", logo: "ProfitWell" },
  { name: "ShipBob", logo: "ShipBob" },
  { name: "demio", logo: "demio" },
  { name: "Fast Company", logo: "FASTOMPANY" },
  { name: "AfterPay", logo: "AfterPay" },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const partnerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

export const testimonials = [
  {
    id: 1,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    author: "Serhiy Hipskyy",
    position: "CEO Universal",
    avatar: "👤",
  },
  {
    id: 2,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    author: "Justus Menke",
    position: "CEO Eronaman",
    avatar: "👤",
  },
  {
    id: 3,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    author: "Britain Eriksen",
    position: "CEO Universal",
    avatar: "👤",
  },
];
