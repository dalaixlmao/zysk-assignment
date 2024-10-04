import { footers } from "../store";
import Logo from "../assets/Content.svg";

export default function Footer() {
  return (
    <div className="mt-12 w-screen flex flex-col items-center pb-10">
      <div className="w-4/5">
        <div className="grid md:grid-cols-6 grid-cols-2 border-b pb-5">
          {footers.map((f, index) => {
            return (
              <div className="mt-4" key={index}>
                <div className="font-semibold text-gray-500">{f[0]}</div>
                <div>
                  {f.map((ff, index) => {
                    if (index != 0) return <div className="text-gray-700 transition-all cursor-pointer hover:font-black text-lg font-semibold" key={index}>{ff}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between">
            <div className="flex flex-row items-center">
                <img src={Logo}/>
                <div className="text-2xl font-semibold ml-3">Untitled UI</div>
            </div>
            <div className="text-gray-500 text-lg">© 2077 Untitled UI. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
