export default function Blog() {
  return (
    <div className="px-3.5 pb-3.5 lg:py-7 bg-[#F8F9FB]">
      <h3 className="text-lg md:text-xl lg:text-2xl mb-3.5">Blog</h3>
      <ArticleWrap />
    </div>
  );
}

function ArticleWrap() {
  return (
    <section className="grid gap-3.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  );
}

function Article() {
  return (
    <article className="h-56 md:h-72 lg:h-[350px]  p-3 flex flex-col justify-between bg-white">
      <div>
        <p className="uppercase text-[#BDBDBD] text-[10px] md:text-xs font-semibold">
          top woman
        </p>
        <h4 className="text-sm md:text-base lg:text-lg mt-1 mb-3.5">
          Exactly What To Wear To Every Type Of Wedding This Summer
        </h4>
        <p className="font-roboto text-[10px] md:text-xs lg:text-sm">
          A large part of the business here is building up the &quot;experience&quot;.
          Double-page spreads in magazines. Ads on TV. Product placement and
          sponsorship in golf tournaments, tennis matches and sailing
          competitions. All of this builds up your perception of the brand - and
          additionally, it costs money.
        </p>
      </div>
      <div className="border-t-2 border-black py-1">
        <p className="font-roboto text-[10px] md:text-xs lg:text-sm">30 October 2022 by Ragil</p>
      </div>
    </article>
  );
}
