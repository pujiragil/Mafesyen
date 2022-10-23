import { Button } from "../Global";

export function Card({ primary, imgLink, tagline, desc, textButton }) {
  return (
    <div
      className={`mx-3.5 mb-3.5 h-40 flex items-center bg-cover bg-no-repeat px-7 py-4 ${
        primary ? "justify-end" : "justify-start"
      }`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div>
        <h2 className="uppercase font-bold text-xl w-full">{tagline}</h2>
        <p className="font-roboto text-sm mt-1 mb-2">{desc}</p>
        <Button>{textButton}</Button>
      </div>
    </div>
  );
}

export function MainCard() {
  return (
    <div className="mx-3.5 mb-3.5 px-7 py-9 h-80 flex flex-col justify-end bg-[url('/images/main-card.png')] bg-no-repeat bg-cover">
      <h2 className="uppercase font-bold text-3xl w-2/5">up to 40% off</h2>
      <p className="font-roboto text-sm mt-1 mb-2">
        Special offers and great deals
      </p>
      <Button>shop now</Button>
    </div>
  );
}
