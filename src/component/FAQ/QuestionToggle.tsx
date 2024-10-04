import { useState } from "react";

export default function QuestionToggle({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="transition-all flex flex-row justify-between w-full px-3 py-4 border-b">
      <div>
        <div className="text-lg">{question}</div>
        {show && <div className="text-gray-500 w-[90%]">{answer}</div>}
      </div>
      <div  onClick={()=>{setShow(!show)}}>
        {show?<Hide/>:<Show />}
      </div>
    </div>
  );
}

function Show() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#6b7280"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function Hide() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#6b7280"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
