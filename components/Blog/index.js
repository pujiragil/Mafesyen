import data from "@/utils/data.json";
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
  const blogs = data.blogs;

  return (
    <section className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </section>
  );
};

export default BlogSection;
