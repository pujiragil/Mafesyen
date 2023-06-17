import { ButtonLink, Text } from "@/components/atoms";

export function Card({ primary, imgLink, tagline, desc, textButton, order }) {
  return (
    <div
      className={`mx-3.5 mb-3.5 flex h-36 items-center bg-cover bg-no-repeat px-7 py-4 font-oswald md:m-0 md:h-full md:w-full md:py-7 ${
        primary
          ? "justify-end md:items-end md:justify-start lg:justify-end"
          : "justify-start md:items-end"
      } ${order}`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div className="space-y-2">
        <h2 className="font-semibold uppercase md:w-3/4 md:text-2xl lg:text-3xl">
          {tagline}
        </h2>
        <Text family="roboto" size="xs/lg">
          {desc}
        </Text>
        <ButtonLink href="/catalog">{textButton}</ButtonLink>
      </div>
    </div>
  );
}

export function MainCard() {
  return (
    <div className="order-2 row-span-2 mx-3.5 mb-3.5 flex h-72 flex-col justify-end space-y-2 bg-[url('/images/main-card.png')] bg-cover bg-no-repeat p-7 font-oswald md:m-0 md:h-full md:justify-center md:bg-center lg:bg-right-top">
      <h2 className="w-2/5 text-[26px] font-semibold uppercase md:w-3/5 md:text-4xl lg:w-2/5 lg:text-6xl">
        up to 40% off
      </h2>
      <Text family="roboto" size="xs/lg">
        Special offers and great deals
      </Text>
      <ButtonLink href="/catalog">shop now</ButtonLink>
    </div>
  );
}

export function SingleCard({ bgLink, margin }) {
  return (
    <div
      className={`${
        margin ? margin : "mx-3.5 mb-3.5"
      } flex h-36 flex-col justify-center gap-y-1 bg-cover bg-center bg-no-repeat px-7 py-4 font-oswald md:h-56 lg:mb-8 lg:h-60`}
      style={{ backgroundImage: `url(${bgLink})` }}
    >
      <h2 className="font-semibold uppercase md:text-2xl lg:text-3xl">
        shoping without limits.
      </h2>
      <p className="w-3/5 font-roboto text-[10px] md:text-base lg:hidden">
        Choose the best option for you, and it does not matter whether you are.
      </p>
      <p className="mt-1 mb-2 hidden w-1/2 font-roboto text-lg lg:inline-block">
        You can choose the best option for you, and it does not matter whether
        you are in Prague or San Francisco. We will deliver your purchase
        anywhere!
      </p>
      <ButtonLink href="/catalog">shop now</ButtonLink>
    </div>
  );
}
