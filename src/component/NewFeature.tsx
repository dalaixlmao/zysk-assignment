import NewFeatureAlert from "./Page1/NewFeatureAlert"
import Header from "./Page1/Header"
import FadeText from "./Page1/FadeText"
import WhiteButton from "./WhiteButton"
import PurpleButton from "./PurpleButton"
import Demo from "../assets/demoIcon.svg"
import Screen from "../assets/3_2 screen mockup.svg"
import Screen2 from "../assets/screenmockup1.svg"

export default function (){
    return <div
    className="mt-[60px] mb-10 w-full flex flex-col items-center"
    >
        <div className=" ">
            <NewFeatureAlert />
        </div>
        <div className="mt-4">
            <Header />
        </div>
        <div className="w-4/5 md:w-3/5 mt-4">
            <FadeText children="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."/>
        </div>
        <div className="flex flex-row mt-10">
            <div>
                <WhiteButton text="Demo" icon={<img src={Demo} className="mr-2"/>}/>
            </div>
            <div className="ml-2">
                <PurpleButton text="Sign Up"/>
            </div>
        </div>
        <div className="mt-10">
            <img className="hidden md:block" src={Screen} />
            <img className="md:hidden block" src={Screen2} />
         </div>
    </div>
}