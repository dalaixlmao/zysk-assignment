import Header2 from "./Page2/Header";
import icon1 from "../assets/message-chat-circle.svg";
import icon5 from "../assets/message-heart-circle.svg";
import icon4 from "../assets/message-smile-circle.svg";
import icon6 from "../assets/command.svg";
import icon2 from "../assets/zap.svg";
import icon3 from "../assets/chart-breakout-square.svg";
import Feature from "./Page2/Feature";

export default function Features() {
  const features = [
    {
      icon: icon1,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: icon2,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: icon3,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: icon4,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: icon5,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: icon6,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help",
    },
  ];

  return (
    <div className="w-screen mb-12 flex flex-col items-center">
      <div className="w-full pt-24 text-center text-purple-500 font-semibold">
        Features
      </div>
      <Header2 />

      <div className="md:w-4/5 grid md:grid-cols-3 grid-cols-1 mt-10">
        {features.map((feature, index) => {
          return (
            <div className="mt-10" key={index}>
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
