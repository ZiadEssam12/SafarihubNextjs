import Image from "next/image";

export default function ImageCard({ item }) {
  return (
    <div className="relative flex justify-center items-end h-[400px] group hover:shadow-xl transition-all duration-300 ease-linear rounded-xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t from-black/70 to-transparent before:opacity-50 before:transition-opacity before:duration-300 hover:before:opacity-80">
      <Image
        src={`/nile/${item.img}`}
        alt={item.title}
        className="w-full h-full object-cover"
        width={500}
        height={400}
        quality={75}
      />
      <h2 className="text-white text-2xl font-bold capitalize absolute bottom-3 z-[10] group-hover:bottom-6 transition-all duration-300">
        {item.title}
      </h2>
    </div>
  );
}
