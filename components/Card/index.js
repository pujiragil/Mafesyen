import { Button } from "../Global";

export function Card({ primary, imgLink, tagline, desc, textButton, order }) {
  return (
    <div
      className={`md:w-full md:h-full mx-3.5 mb-3.5 md:mb-0 lg:m-0 h-40 flex items-center bg-cover bg-no-repeat px-7 py-4 ${
        primary ? "justify-end" : "justify-start"
      } ${order}`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div>
        <h2 className="uppercase font-bold text-xl md:text-3xl lg:text-4xl w-full">{tagline}</h2>
        <p className="font-roboto text-sm md:text-lg lg:text-xl mt-1 mb-2">{desc}</p>
        <Button>{textButton}</Button>
      </div>
    </div>
  );
}

export function MainCard() {
  return (
    <div className="order-2 row-span-2 mx-3.5 mb-3.5 md:mb-0 lg:m-0 px-7 py-9 h-80 md:h-full flex flex-col justify-end bg-[url('/images/main-card.png')] bg-no-repeat bg-cover">
      <h2 className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl w-2/5 md:w-3/5 lg:w-2/5">up to 40% off</h2>
      <p className="font-roboto text-sm md:text-lg lg:text-xl mt-1 mb-2">
        Special offers and great deals
      </p>
      <Button>shop now</Button>
    </div>
  );
}
