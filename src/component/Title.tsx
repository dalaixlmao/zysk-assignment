export default function Title({ text, description }: { text: string, description: string }) {
  return <div className="flex flex-col items-center text-center">
    <div className="font-semibold text-2xl md:text-3xl">{text}</div>
    <div className="text-gray-500 w-3/5 mt-3">{description}</div>
  </div>;
}
