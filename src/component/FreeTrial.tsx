import WhiteButton from "./WhiteButton";
import PurpleButton from "./PurpleButton";
export default function FreeTrial() {
  return (
    <div className="mt-48 bg-gray-100 py-24 w-screen flex flex-col items-center">
      <div className="text-4xl font-semibold">Start your free trial</div>
      <div className="mt-7 text-lg text-gray-500">Join over 4,000+ startups already growing with Untitled.</div>
      <div className="mt-7 flex flex-row items-center text-center">
        <WhiteButton text="Learn more" icon={<></>} />
        <div className="ml-4">
          {" "}
          <PurpleButton text="Get started" />
        </div>
      </div>
    </div>
  );
}
