import PurpleButton from "../PurpleButton";

export default function Header() {
  return (
    <div className="flex flex-row w-full justify-between">
      <div>
        <div className="text-purple-500">Our blog</div>
        <div className="text-5xl mt-3">Latest blog posts</div>
        <div className="text-gray-500 mt-3">
          Tool and strategies modern teams need to help their companies grow.
        </div>
      </div>
      <div className="lg:block hidden">
        <PurpleButton text="View all post" />
      </div>
    </div>
  );
}
