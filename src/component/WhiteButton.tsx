import { ReactElement } from "react";

export default function WhiteButton({text, icon}:{text:string, icon:ReactElement}){
    return <button className="font-semibold flex flex-row px-3 py-2 border border-gray-400 rounded-md">
        {icon}
        {text}
    </button>
}