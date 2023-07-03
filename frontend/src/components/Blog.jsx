import { BlogData } from "./Data";

const Blog = () => {
  return (
    <>
      <div
        className="w-full pt-28 lg:pt-32 min-h-full overflow-hidden mt-28"
        id="blog"
      >
        <div data-aos="flip-down">
          {BlogData.map((d) => (
            <p
              key={d.id}
              className="text-primary-cylogo font-semibold text-6xl overflow-hidden leading-snug md:leading-normal"
            >
              {d.text}
            </p>
          ))}
        </div>
        <div className="pt-10">
          {BlogData.map((d) => (
            <p
              key={d.id}
              className="text-white font-semibold text-4xl overflow-hidden leading-normal md:leading-normal font-ubuntu ps-12"
            >
              {d.cs}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
