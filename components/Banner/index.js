import { ButtonLink } from "@/components/atoms/";

export default function Banner() {
  return (
    <section className="mx-3.5 mb-3.5 flex h-60 items-end bg-[url('/images/banner-1.png')] bg-cover bg-center bg-no-repeat p-3.5 font-oswald md:bg-top lg:mb-8 lg:items-center lg:gap-8 lg:bg-none lg:p-0">
      <img
        src="/images/banner-1.png"
        className="hidden h-full w-full object-cover object-center lg:flex"
      />
      <div className="flex h-fit w-full flex-col items-center justify-center gap-3 bg-white py-4 px-5 text-center lg:w-3/5 lg:items-start lg:text-left">
        <h4 className="text-sm font-medium md:text-xl lg:text-3xl">
          EXPLORE THE BEST OF YOU.
        </h4>
        <p className="font-roboto text-[10px] md:w-3/4 md:text-sm lg:text-base">
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco.
        </p>
        <ButtonLink href="/catalog">shop now</ButtonLink>
      </div>
    </section>
  );
}
