import { Category, Text } from "@/components/atoms";

const BlogItem = ({ title, desc, date, highlight }) => {
  return (
    <article className="flex h-56 flex-col  justify-between bg-white p-3 font-oswald md:h-72 lg:h-[350px]">
      <div>
        <Category intent="secondary" value={highlight} />
        <h4 className="mt-1 mb-3.5 text-sm md:text-base lg:text-lg">{title}</h4>
        <Text weight={300} color="black" size="xs/sm" family="roboto">
          {desc}
        </Text>
      </div>
      <div className="border-t-2 border-black py-1">
        <Text weight={400} color="black" size="xs/sm" family="roboto">
          {date} by Puji Ragil
        </Text>
      </div>
    </article>
  );
};

export default BlogItem;
