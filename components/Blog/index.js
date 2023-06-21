import SectionLayout from "../Layout/sectionLayout";
import BlogItem from "./blogItem";

const BlogSection = () => {
  return (
    <SectionLayout background="bg-[#F8F9FB]">
      <div className="px-3.5 pb-3.5 lg:py-7">
        <h3 className="mb-3.5 font-oswald text-lg md:text-xl lg:text-2xl">
          Blog
        </h3>
        <BlogWrapper />
      </div>
    </SectionLayout>
  );
};

const BlogWrapper = () => {
  return (
    <section className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BlogItem
        date="20 May 2023"
        highlight="ARTICLE"
        title="Exactly What To Wear To Every Type Of Wedding This Summer"
        description='A large part of the business here is building up the
        "experience". Double-page spreads in magazines. Ads on TV.
          Product placement and sponsorship in golf tournaments, tennis matches
          and sailing competitions. All of this builds up your perception of the
          brand - and additionally, it costs money.'
      />
      <BlogItem
        date="11 June 2023"
        highlight="TIPS"
        title="Exactly What To Wear To Every Type Of Wedding This Summer"
        description="When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. "
      />
      <BlogItem
        date="16 September 2023"
        highlight="ARTICLE"
        title="Exactly What To Wear To Every Type Of Wedding This Summer"
        description='A large part of the business here is building up the
          "experience". Double-page spreads in magazines. Ads on TV.
          Product placement and sponsorship in golf tournaments, tennis matches
          and sailing competitions. All of this builds up your perception of the
          brand - and additionally, it costs money.'
      />
      <BlogItem
        date="16 September 2023"
        highlight="ARTICLE"
        title="Exactly What To Wear To Every Type Of Wedding This Summer"
        description='A large part of the business here is building up the
          "experience". Double-page spreads in magazines. Ads on TV.
          Product placement and sponsorship in golf tournaments, tennis matches
          and sailing competitions. All of this builds up your perception of the
          brand - and additionally, it costs money.'
      />
    </section>
  );
};

export default BlogSection;
