import BlogItem from "./blogItem";

export default function Blog() {
  return (
    <div className="px-3.5 pb-3.5 lg:py-7 bg-[#F8F9FB]">
      <h3 className="text-lg md:text-xl lg:text-2xl mb-3.5 font-oswald">Blog</h3>
      <BlogWrapper />
    </div>
  );
}

function BlogWrapper() {
  return (
    <section className="grid gap-3.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
    </section>
  );
}
