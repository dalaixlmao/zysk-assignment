export default function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center md:mb-10">
      <div>
        <img className="border w-10 p-2 rounded-md" src={icon} />
      </div>
      <div className="text-center w-3/5 font-semibold">{title}</div>
      <div className="text-center w-3/5 text-sm text-gray-500">{description}</div>
    </div>
  );
}
