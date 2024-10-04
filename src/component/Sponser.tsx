import FadeText from "./Page1/FadeText";
import Company1 from "../assets/company1.svg";
import Company2 from "../assets/company2.svg";
import Company3 from "../assets/company3.svg";
import Company4 from "../assets/company4.svg";
import Company5 from "../assets/company5.svg";
import Company6 from "../assets/company.svg"
export default function Sponser() {
  const companies = [Company6, Company1, Company2, Company3, Company4, Company5];

  return (
    <div className="w-screen mt-8 border-b pb-12 flex flex-col items-center">
      <FadeText children="Join 4,000+ companies already growing" />
      <div className="w-4/5 mt-5 grid-cols-2 grid md:grid-cols-6 gap-5 flex flex-row w-4/5 justify-between">
        {companies.map((company, index) => {
          return (
            <div key={index}>
              <img src={company} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
