import Title from "./Title";
import QuestionToggle from "./FAQ/QuestionToggle";
import { questions } from "../store";
import GetInTouch from "./FAQ/GetInTouch";

export default function FAQ() {
  return (
    <div className="w-screen mt-24 flex flex-col items-center">
      <Title
        text="Frequently asked Question"
        description="Everything you need to know about the product and billing."
      />
      <div className="flex flex-col mt-12 items-center w-4/5">
        {questions.map((q, index)=>{
            return <div className="w-full" key={index}>
                <QuestionToggle question={q.question} answer={q.answer} />
                </div>
        })}
      </div>
      <GetInTouch/>
    </div>
  );
}
