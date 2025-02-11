import HeroForm from "@/components/HeroForm/HeroForm";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center mx-break-out">
        <div className="w-full">
          <figure className="w-full h-1/2">
            <Image
              src="/image_fx_ (8) (1).jpg"
              alt="pyramids hero background"
              className="w-full object-cover max-h-[600px] h-[60vh] lg:h-auto hero-section"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
              loading="lazy"
              // layout="responsive" // This makes the image responsive
              width={1200} // Specify the original width
              height={800} // Specify the original height
              unoptimized
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUpJREFUWEeFVw1zFUUQnNm7l3/qZ1mWVZZVAgoxGEEEI4RYWEhhjPxKb3e1u2d270UtKZYNSd5NT3fPx/mDO++6m5sXs6U4z7q4ravuZSn6/mJW3M3dzM2s4/RureE0q7Vbrbir1a3ZtumuW7WWd23WcVrnZ613cwJwPbwwUADY3QBRyg5AIGhdD0LgxuDNNtwRMEE0gEHgrREsAbQAcHrnXUdKxYOBEbgEAwIEcDiTAT1EALpVsIDAtdoWABIIbgDE6TsA+Kyf3v2jIyFmCPpxVgVPCQRAPy9moYGCQwIEb7WLdrBwBECgBACgpwRQwb+5e0MJcKb+E8AKD8ALZECxpYAYmB4QA9vwwGQEDBHAreD0wNm965Dg2ICHpYQR04ROmXBowW7jgTLfBCAGpicUPMGGAWliM3/41VsYetC/rG4KXuyw88MyTEi8pB90UgIGn/QTQEoR8lT+fjd6LxJAYP/26zejClQBxQ4sQdw7L6BCQipCTwCZPQOmAVUNrIjIvOojxsphCiplP7//egBI4yEwg+9YoAcgQX406l/mms5H9iM4jBlZI3Nm79FDAoQ/evBKAKIJZfBxByuSIACQgVlaaj4CMU5kX5tZNQVv5oZg1Dxuf3x6NQAk7Ucg0geDgeRyB4D6V9v+rMqeLCh7UI/AFcETAIIja+B4cvYi+sDUPQGcpBRRhgtL8O/2yQ6Itoo2m8HDA8N8CUDBlX2xBhq9CAD+Pn148R8MLDYAsEHtJWioQQJI+inBngFQ3802MlCsuVtDYDYT3Ooo/uz8KRlQE5LxTg4LTUgAqIZkgKDBQLTUZID655nu31pkH8GbLwSQIOADv/jucXdXE8LQUeAdgAABE7IM0b26GID7KQHPJhAsvx393a2S+oUSdNzBAgE8f3QeEqjmDwy+2MkhgIAVGJF9gDaSB2qVB6ICBgAYsAGAJKikHweBk4FFvR8ALr8/myZktosdDqm/mDhEiYKBwi4GBgJAmFAAogIwGQkAEgQABp8guIAAwMsn929JkPQDhL7mhNyV4ZEHyMA2zJgSqP53AAYD2Gw4WgXg5x/uEQBHMT0QWUOGHQB6JBgYAJokSB9wEsIDHNFigPSDhR0DqoIA8OrZl1zJtA3JhOkD3v9aBZIhPUAf5BjODgj9AQA9wJcoQWXfnfsdRqD5Lz9+IQY8y3AyQD+EBNoXj1sxjRjVQAA5mJKBaEBggOUXZSj91Yz89cXnHE4LSpGOnwDWYICbESXARqRKmNOwci/QTggQoB8tGKM3GUCwedKA9MCvP302GBAANKOgfl30/9yMYxyjDDWSY8sh7QGC2SO4Zj8liDYMEBxCuNmH3fzN809jHGv1UsAlRvExAG7OsZZPALmYaAnhgpLrek5Azv4IPAZRzIK3Lz6JjShXr2MWtBPiZ0USaIhRBm1FuZzOtYts5PLBDUgjWCBiq81p+Nvlx9jMxtq9Fs0DshDBUwIxoNU895IEkcspqQ8J5gYkxcA6s80/eNb15UdjKc1SHLrvQMiExRzvBmMzjv00NR9syANc2+NW4H/+69cvPyQreLBKTZQfZ6/v5dvThJCvaPDjfE9gUIzrHQCuoqRBJ6H471cfCEC+mkVDGiACEIAVHr5J8vfpBG3oASCWTnogPQIgTUHjZgkHBL+5ej9WtOiG/wOAEkCKIURUJCtzsqCvY2/AzeBN/SOBwJYEEC8cojjehCBDZs+X03mQPV/SwEIykK0hTMjgOwBs3Qi8A8K6uLl6L17N5PA0ol7H5IUSZZggwADXKXQ3eiukSNoJIgDE8tJ71fy4BeAvEIdIbDB6IKwAAAAASUVORK5CYII="
            />
          </figure>
        </div>
      </div>

      <div id="triPackUp" className="px-4 md:px-0 -translate-y-3 ">
        <HeroForm />
      </div>
    </>
  );
}
