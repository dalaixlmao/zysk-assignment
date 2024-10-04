export default function PurpleButton({ text }: { text: string }) {
  return <button
  className="hover:bg-purple-300 transition-all px-3 py-2 bg-purple-500 rounded-md text-white font-semibold"
  >{text}</button>;
}
