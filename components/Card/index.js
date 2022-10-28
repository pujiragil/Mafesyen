import { Button } from "../Global";

export function Card({ primary, imgLink, tagline, desc, textButton, order }) {
  return (
    <div
      className={`md:w-full md:h-full mx-3.5 mb-3.5 md:m-0 h-36 flex items-center bg-cover bg-no-repeat px-7 py-4 md:py-7 ${
        primary ? "justify-end md:justify-start md:items-end lg:justify-end" : "justify-start md:items-end"
      } ${order}`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div className="">
        <h2 className="uppercase font-semibold md:text-2xl lg:text-3xl md:w-3/4">{tagline}</h2>
        <p className="font-roboto text-[10px] md:text-base lg:text-lg mt-1 mb-2">{desc}</p>
        <Button>{textButton}</Button>
      </div>
    </div>
  );
}

export function MainCard() {
  return (
    <div className="order-2 row-span-2 mx-3.5 mb-3.5 md:m-0 p-7 h-72 md:h-full flex flex-col justify-end md:justify-center bg-[url('/images/main-card.png')] bg-no-repeat md:bg-center lg:bg-right-top bg-cover">
      <h2 className="uppercase font-semibold text-[26px] md:text-4xl lg:text-6xl w-2/5 md:w-3/5 lg:w-2/5">up to 40% off</h2>
      <p className="font-roboto text-[10px] md:text-base lg:text-lg mt-1 mb-2">
        Special offers and great deals
      </p>
      <Button>shop now</Button>
    </div>
  );
}

export function SingleCard() {
  return (
    <div className="mx-3.5 bg-[url('/images/card-3.png')] bg-cover bg-no-repeat bg-center h-36 md:h-56 lg:h-60 px-7 py-4 flex flex-col justify-center gap-y-1 mb-3.5 lg:mb-8">
      <h2 className="uppercase font-semibold md:text-2xl lg:text-3xl">shoping without limits.</h2>
      <p className="lg:hidden font-roboto text-[10px] md:text-base w-3/4">Choose the best option for you, and it does not matter whether you are.</p>
      <p className="hidden lg:inline-block w-1/2 mt-1 mb-2 font-roboto text-lg">You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!</p> 
      <Button>shop now</Button>
    </div>
  )
}