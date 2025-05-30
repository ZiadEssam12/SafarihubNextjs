import {
  CarbonLocationFilled,
  TablerUsers,
  SolarStarLinear,
  LucideLeaf,
  UilMapMarker,
  MdiCartOutline,
  SolarPhoneOutline,
} from "../../icons/Icons";

export const links = [
  {
    name: "Home",
    url: "/",
    dropdown: false,
    icon: CarbonLocationFilled,
  },
  {
    name: "About Us",
    url: "/about-us",
    dropdown: false,
    icon: TablerUsers,
  },
  {
    name: "Categories",
    url: "/",
    dropdown: [
      { name: "One Day Trip", url: "/one-day-tours" },
      { name: "Multi Days Trips", url: "/multi-days-tours" },
      { name: "Nile Cruise", url: "/nile-cruise" },
      { name: "Shore Excursions", url: "/shore-excursions" },
    ],
    icon: SolarStarLinear,
  },
  {
    name: "Tours",
    url: "/hidden-gems",
    dropdown: false,
    icon: LucideLeaf,
  },
  {
    name: "Make Your Trip",
    url: "/make-trip",
    dropdown: false,
    icon: UilMapMarker,
  },
  {
    name: "Rent A Car",
    url: "/rent-car",
    dropdown: false,
    icon: MdiCartOutline,
  },
  {
    name: "Contact Us",
    url: "/contact-us#contact",
    dropdown: false,
    icon: SolarPhoneOutline,
  },
];
