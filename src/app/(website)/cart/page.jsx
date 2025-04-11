import { EditIcon, TrashIcon } from "@/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const metadata = {
  title: "Cart",
  description: "Cart",
};

let cart = {
  total: 200,
  items: [
    {
      id: 1,
      name: "Quad Bike Safari At Luxor From The West Bank",
      price: 100,
      image: "/tripImage.webp",
      date: "2024-01-01",
      adults: 2,
      children: 1,
      infants: 0,
      link: "/",
    },
    {
      id: 2,
      name: "Quad Bike Safari At Luxor From The West Bank",
      price: 100,
      image: "/tripImage.webp",
      date: "2024-01-01",
      adults: 2,
      children: 1,
      infants: 0,
      link: "/tours/2",
    },
  ],
};

export default function page() {
  return (
    <div className="w-[80%] mx-auto min-h-screen flex flex-col gap-12 justify-center font-bold">
      <div className="flex justify-between items-center w-full  text-black dark:text-white">
        <h1 className="text-3xl">Cart</h1>
        <p className="text-xl">
          Total:{" "}
          <span className="text-2xl text-orange ml-2">${cart.total}.00</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="flex h-[180px] border-[1px] border-orange rounded-lg overflow-hidden"
          >
            <div className="hidden md:block w-[250px] h-full relative">
              <Image src={item.image} layout="fill" alt={item.name} />
            </div>
            <div className="flex flex-col justify-between text-black dark:text-white p-4 w-full">
              <div className="flex items-center w-full justify-between">
                <Link
                  href={item.link}
                  className="text-lg text-darkBlue dark:text-white"
                >
                  {item.name}
                </Link>

                <div className="flex items-center gap-1 text-orange">
                  <button title="click to edit trip">
                    <EditIcon />
                  </button>
                  <DeleteButton productId={item.id} />
                </div>
              </div>

              <p>
                Date:
                <span className="ml-2 text-sm font-semibold text-[rgb(97,97,97)] dark:text-gray-100">
                  {item.date}
                </span>
              </p>
              <p>
                Adults:
                <span className="ml-2 text-sm font-semibold text-[rgb(97,97,97)] dark:text-gray-100">
                  {item.adults}
                </span>
              </p>
              <p>
                Children:
                <span className="ml-2 text-sm font-semibold text-[rgb(97,97,97)] dark:text-gray-100">
                  {item.children}
                </span>
              </p>
              <div className="flex items-center justify-between">
                <p>
                  Infants:
                  <span className="ml-2 text-sm font-semibold text-[rgb(97,97,97)] dark:text-gray-100">
                    {item.infants}
                  </span>
                </p>
                <h4 className="text-orange text-2xl">${item.price}.00</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3">
        <button className="bg-[#d9362b] hover:bg-[#d9362b]/80 cursor-pointer shadow-lg transition-colors duration-300 text-white px-5 py-4 rounded-lg">
          Clear Cart
        </button>
        <Link
          href="/checkout"
          className="bg-orange hover:bg-orange/80 transition-colors shadow-lg duration-300 text-white px-5 py-4 rounded-lg"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
