import sysiphus from "../assets/sysiphus.svg";
import avatar from "../assets/Avatar.svg";
export default function Sysiphus(){
    return <div className="bg-gray-100 py-24 w-screen flex flex-col items-center">
        <div>
            <img src={sysiphus} />
        </div>
        <div className="text-2xl mt-3 md:text-4xl w-4/5 md:w-3/5 text-center">
        We&apos;ve been using Untitled to kick start every new project and can&apos;t imagine working without it.
        </div>
        <div className="mt-7 flex flex-col items-center text-center">
            <div><img src={avatar} /></div>
            <div className="text-lg font-semibold">Candice Wu</div>
            <div className="text-gray-500">Product Managet, Sysiphus</div>
        </div>
    </div>
}