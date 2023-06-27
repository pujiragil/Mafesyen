import { Category } from "../atoms";

export default function BlogItem({ highlight, title, desc, date }) {
  return (
    <article className="flex h-56 flex-col  justify-between bg-white p-3 font-oswald md:h-72 lg:h-[350px]">
      <div>
        <Category intent="secondary" value={highlight} />
        <h4 className="mt-1 mb-3.5 text-sm md:text-base lg:text-lg">{title}</h4>
        <p className="font-roboto text-[10px] md:text-xs lg:text-sm">{desc}</p>
      </div>
      <div className="border-t-2 border-black py-1">
        <p className="font-roboto text-[10px] md:text-xs lg:text-sm">
          {date}
        </p>
      </div>
    </article>
  );
}
