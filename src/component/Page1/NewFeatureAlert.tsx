import RightIcon from "../../assets/rightIcon.svg";

export default function NewFeatureAlert(){
    return <div className="text-sm mt-10 w-fit px-1 pr-2 bg-purple-200 flex flex-row items-center rounded-full border border-purple-500">
    <div className="text-nowrap my-1 bg-white border border-purple-500 rounded-full px-3 text-semibold text-purple-500">New Feature</div>
    <div className="text-nowrap flex flex-row font-semibold text-purple-500 ml-2">Check Out the team dashboard
        <img className="ml-2 w-3" src={RightIcon}/>
    </div>
</div>
}