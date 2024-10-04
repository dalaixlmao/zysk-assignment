export default function BlogElement({
  cover,
  type,
  title,
  description,
  date,
  authorName,
  avatar,
}: {
  cover: string;
  type: string;
  title: string;
  description: string;
  date: string;
  authorName: string;
  avatar: string;
}) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <img className="w-full" src={cover} />
      </div>
      <div>
        <div className="mt-3 text-purple-500 font-semibold">{type}</div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl font-semibold">{title}</div>
          <div>
            <UpRight />
          </div>
        </div>
        <div className="text-gray-500">{description}</div>
        <div className="flex flex-row items-center">
          <div>
            <img src={avatar} />
          </div>
          <div className="flex flex-col ml-2">
            <div className="text-lg font-semibold">{authorName}</div>
            <div className="text-gray-500">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
