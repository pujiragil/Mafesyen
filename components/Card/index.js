import { Button } from "../Global";

export function Card({ primary, imgLink, tagline, desc, textButton, order }) {
  return (
    <div
      className={`md:w-full md:h-full mx-3.5 mb-3.5 md:mb-0 lg:m-0 h-36 flex items-center bg-cover bg-no-repeat px-7 py-4 md:py-7 ${
        primary ? "justify-end md:justify-start md:items-end" : "justify-start md:items-end"
      } ${order}`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div className="w-full">
        <h2 className="uppercase font-semibold md:text-3xl lg:text-3xl w-full md:w-1/2">{tagline}</h2>
        <p className="font-roboto text-[10px] md:text-lg lg:text-lg mt-1 mb-2">{desc}</p>
        <Button>{textButton}</Button>
      </div>
    </div>
  );
}

export function MainCard() {
  return (
    <div className="order-2 row-span-2 mx-3.5 mb-3.5 md:mb-0 lg:m-0 p-7 h-72 md:h-full flex flex-col justify-end md:justify-center bg-[url('/images/main-card.png')] bg-no-repeat bg-cover">
      <h2 className="uppercase font-semibold text-[26px] md:text-5xl lg:text-6xl w-2/5 md:w-3/5 lg:w-2/5">up to 40% off</h2>
      <p className="font-roboto text-[10px] md:text-lg lg:text-lg mt-1 mb-2">
        Special offers and great deals
      </p>
      <Button>shop now</Button>
    </div>
  );
}
