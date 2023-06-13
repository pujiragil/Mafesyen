import Image from "next/image";
import { Highlight } from "../Global";

export default function CatalogCard({ imgLink, imgAlt }) {
  return (
    <section className="space-y-1.5 font-oswald">
      <div className="w-full overflow-hidden">
        <Image
          width={344}
          height={450}
          src={imgLink}
          alt={imgAlt}
          className="h-56 w-full cursor-pointer object-cover duration-200 ease-in-out hover:scale-110 md:h-64"
        />
      </div>
      <div className="space-y-1.5">
        <Highlight text="TOP WOMAN" />
        <h4 className="text-xs font-light md:text-base lg:text-lg">
          Angels malu zip jeans slim black used
        </h4>
        <p className="text-sm font-medium md:text-lg lg:text-2xl">139,00 EUR</p>
      </div>
    </section>
  );
}
