import Header from "./Blog/Header";
import { blogs } from "../store";
import BlogElement from "./Blog/Blog";

export default function Blog() {
  return (
    <div className="mt-48 w-screen flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center">
        <Header />
      </div>
      <div className="w-4/5 flex flex-col items-center">
        <div className="mt-12 w-full grid lg:grid-cols-3 justify-center items-center grid-cols-1 ">
          {blogs.map((b, index) => {
            return (
              <div
                key={index}
                className="lg:w-[400px] w-full flex flex-col lg:mb-0 mb-12"
              >
                <BlogElement
                  cover={b.cover}
                  type={b.type}
                  title={b.title}
                  description={b.description}
                  date={b.date}
                  authorName={b.authorName}
                  avatar={b.avatar}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="block lg:hidden w-full flex flex-col items-center">
        <button className="hover:bg-purple-300 w-4/5 transition-all px-3 py-2 bg-purple-500 rounded-md text-white font-semibold">
          View all post
        </button>
      </div>
    </div>
  );
}
