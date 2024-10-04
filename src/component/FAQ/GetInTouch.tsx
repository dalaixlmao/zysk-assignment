import PurpleButton from "../PurpleButton"
import avatarGrp from "../../assets/Avatar-group.svg";

export default function GetInTouch(){
    return <div className="w-4/5 mt-12 py-10 flex flex-col items-center bg-gray-100 rounded-xl">
        <div className="flex flex-row">
            <img className="" src={avatarGrp} />
        </div>
        <div className="mt-4 text-lg font-semibold">
            Still have questions?
        </div>
        <div className="w-3/5 mt-4 text-gray-500 text-center">Can't find the answer you're looking for? Please chat to our friendly team.</div>
        <div className="mt-4">
            <PurpleButton text="Get in touch" />
        </div>
    </div>
}