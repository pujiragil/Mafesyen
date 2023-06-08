import { Highlight } from "../Global";

export default function BlogItem({ highlight, title, description, date }) {
  return (
    <article className="h-56 md:h-72 lg:h-[350px]  p-3 flex flex-col justify-between bg-white font-oswald">
      <div>
        <Highlight sizes="lg" text={highlight} />
        <h4 className="text-sm md:text-base lg:text-lg mt-1 mb-3.5">{title}</h4>
        <p className="font-roboto text-[10px] md:text-xs lg:text-sm">
          {description}
        </p>
      </div>
      <div className="border-t-2 border-black py-1">
        <p className="font-roboto text-[10px] md:text-xs lg:text-sm">
          {date} by Ragil
        </p>
      </div>
    </article>
  );
}
