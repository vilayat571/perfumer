import tuberoseFloral from "../assets/images/perfumes/scents/tuberoseFloral.webp";
import frangipaniFloral from "../assets/images/perfumes/scents/frangipaniFloral.webp";
import roseFloral from "../assets/images/perfumes/scents/roseFloral.webp";
import mimosaFloral from "../assets/images/perfumes/scents/mimosaFloral.webp";
import osmanthusFloral from "../assets/images/perfumes/scents/osmanthusFloral.webp";
import muguetFloral from "../assets/images/perfumes/scents/muguetFloral.webp";
import orangeFloral from "../assets/images/perfumes/scents/orangeFloral.webp";
import jasmineFloral from "../assets/images/perfumes/scents/jasmineFloral.webp";
import lysFloral from "../assets/images/perfumes/scents/lysFloral.webp";
import peonyFloral from "../assets/images/perfumes/scents/peonyFloral.webp";
import nerolFloral from "../assets/images/perfumes/scents/nerolFloral.webp";
import oceanFresh from "../assets/images/perfumes/scents/ocean-black-bg-032125.webp";
import teaFresh from "../assets/images/perfumes/scents/tea-black-bg-032425.webp";
import bergamotFresh from "../assets/images/perfumes/scents/bergamot-black-bg-032025.webp";
import mandarinFresh from "../assets/images/perfumes/scents/mandarin-black-bg-112125.webp";
import gingerFresh from "../assets/images/perfumes/scents/ginger-black-bg-032125.webp";
import raspberry from "../assets/images/perfumes/scents/raspberry-black-bg-032425.webp";
import fig from "../assets/images/perfumes/scents/fig-black-bg-032125.webp";
import rhubarb from "../assets/images/perfumes/scents/rhubarb-black-bg-032425.webp";
import pear from "../assets/images/perfumes/scents/pear-black-bg-032425.webp"
import herb from "../assets/images/perfumes/scents/herb-black-bg-032125.webp";
import geranium from "../assets/images/perfumes/scents/geranium-black-bg-112025.webp";
import sage from "../assets/images/perfumes/scents/sage-black-bg-032425.webp";
import lavender from "../assets/images/perfumes/scents/lavender-black-bg-032125.webp";
import amber from "../assets/images/perfumes/scents/amber-black-bg-032025.webp";
import ambergis from "../assets/images/perfumes/scents/ambergris-black-bg-112025.webp";
import incense from "../assets/images/perfumes/scents/incense-black-bg-032125.webp";
import havana from "../assets/images/perfumes/scents/havana-black-bg-032125.webp";
import myrrh from "../assets/images/perfumes/scents/myrrh-black-bg-032125.webp";
import cashmere from "../assets/images/perfumes/scents/cashmere-black-bg-032125.webp";
import spirit from "../assets/images/perfumes/scents/spirit-black-bg-112025.webp";
import leather from "../assets/images/perfumes/scents/leather-black-bg-112025.webp";
import tonka from "../assets/images/perfumes/scents/tonka-black-bg-032425.webp";
import honey from "../assets/images/perfumes/scents/honey-black-bg-032125.webp";
import almond from "../assets/images/perfumes/scents/almond-black-bg-032025.webp";
import musk from "../assets/images/perfumes/scents/musk-black-bg-032125.webp";
import vanilla from "../assets/images/perfumes/scents/vanilla-black-bg-032425.webp";
import caramel from "../assets/images/perfumes/scents/caramel-black-bg-112125.webp";
import fir from "../assets/images/perfumes/scents/fir-black-bg-032125.webp";
import orris from "../assets/images/perfumes/scents/orris-black-bg-032425.webp";
import oud from "../assets/images/perfumes/scents/oud-black-bg-032425.webp";
import patchouli from "../assets/images/perfumes/scents/patchouli-black-bg-032425.webp";
import sandalwood from "../assets/images/perfumes/scents/sandalwood-black-bg-032425.webp";
import cedar from "../assets/images/perfumes/scents/cedar-black-bg-032125.webp";
import vetiver from "../assets/images/perfumes/scents/vetiver-black-bg-032425.webp";



export const PERFUME_CATEGORIES = {
  "Çiçəkli və Zərif": [
    { name: "Qızılgül", image: roseFloral },
    { name: "Portağal Çiçəyi", image: orangeFloral },
    { name: "Tuberoza", image: tuberoseFloral },
    { name: "Yasəmən", image: jasmineFloral },
    { name: "Mimoza", image: mimosaFloral },
    { name: "Frangipani", image: frangipaniFloral },
    { name: "Müge", image: muguetFloral },
    { name: "Osmanthus", image: osmanthusFloral },
    { name: "Zanbaq", image: lysFloral },
    { name: "Pion", image: peonyFloral },
    { name: "Neroli", image: nerolFloral },
  ],
  "Fresh & Citrusy": [
    { name: "Çay", image: teaFresh },
    { name: "Berqamot", image: bergamotFresh },
    { name: "Okean", image: oceanFresh },
    { name: "Zəncəfil", image: gingerFresh },
    { name: "Mandarin", image: mandarinFresh },
  ],
  "Fruity & Delicious": [
    { name: "Moruq", image: raspberry },
    { name: "Əncir", image: fig },
    { name: "Rəvənd", image: rhubarb },
    { name: "Armud", image: pear },
  ],
  "Green & Aromatic": [
    { name: "Lavanda", image: lavender },
    { name: "Otlar", image: herb },
    { name: "Adaçayı", image: sage },
    { name: "Geranium", image: geranium },
  ],
  "Leathery & Distinctive": [
    { name: "Kaşmir", image: cashmere },
    { name: "Dəri", image: leather },
    { name: "Spirt", image: spirit },
  ],
  "Spicy & Ambery": [
    { name: "Mirra", image: myrrh },
    { name: "Buxur", image: incense },
    { name: "Ənbər", image: amber },
    { name: "Havana", image: havana },
    { name: "Ənbərgris", image: ambergis },
  ],
  "Sweet & Gourmand": [
    { name: "Tonka", image: tonka },
    { name: "Vanil", image: vanilla },
    { name: "Bal", image: honey },
    { name: "Badam", image: almond },
    { name: "Müşk", image: musk },
    { name: "Küknar Balzamı", image: fir },
    { name: "Karamel", image: caramel },
  ],
  "Woody & Profound": [
    { name: "İris Kökü", image: orris },
    { name: "Səndəl Ağacı", image: sandalwood },
    { name: "Vetiver", image: vetiver },
    { name: "Ud", image: oud },
    { name: "Sidr", image: cedar },
    { name: "Paçuli", image: patchouli },
  ],
};


export const MAGNIFIERS = [
  {
    name: "Sage Supreme",
    category: "Fresh",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=80",
  },
  {
    name: "Jazz Jasmine",
    category: "Elegant",
    image:
      "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=400&q=80",
  },
  {
    name: "Oud Outshine",
    category: "Sensual",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
  },
];

export const BOTTLE_IMAGES = {
  "30": "https://file.aiquickdraw.com/imgcompressed/img/compressed_9491630784be147483ac24b88839cdc2.webp",
  "50": "https://manage.parfumbar.az/cdn/storage/products_images/nzdhJY3eYrmeFNDBh/HD/nzdhJY3eYrmeFNDBh.webp",
  "70": "https://file.aiquickdraw.com/imgcompressed/img/compressed_9491630784be147483ac24b88839cdc2.webp",
  "100":
    "https://file.aiquickdraw.com/imgcompressed/img/compressed_9491630784be147483ac24b88839cdc2.webp",
};
