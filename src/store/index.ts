import icon1 from "../assets/message-chat-circle.svg";
import icon5 from "../assets/message-heart-circle.svg";
import icon4 from "../assets/message-smile-circle.svg";
import icon6 from "../assets/command.svg";
import icon2 from "../assets/zap.svg";
import icon3 from "../assets/chart-breakout-square.svg";
import Company1 from "../assets/company1.svg";
import Company2 from "../assets/company2.svg";
import Company3 from "../assets/company3.svg";
import Company4 from "../assets/company4.svg";
import Company5 from "../assets/company5.svg";
import Company6 from "../assets/company.svg";
import cover1 from "../assets/Image.svg";
import cover2 from "../assets/Image-1.svg";
import cover3 from "../assets/Image-2.svg";
import avatar from "../assets/Avatar.svg";
import avatar2 from "../assets/Avatar(1).svg";
import avatar3 from "../assets/Avatar(2).svg";

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

const questions = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 30-day free trial to new users, allowing you to explore our features without any commitment. If you decide to continue after the trial, you can choose from various subscription plans that best suit your needs.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your subscription plan at any time. Simply log in to your account, navigate to the billing section, and select the plan that suits you best. Changes take effect at the end of your current billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription anytime before the next billing cycle. Once canceled, you will still have access to your account and its features until the end of the current billing period. We value your feedback and would appreciate knowing your reasons for cancellation.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, our invoicing system allows you to customize your invoices. You can add extra information such as purchase orders, account numbers, and other relevant details. This customization helps ensure that your invoices meet your accounting needs and are tailored to your business requirements.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is straightforward. You can choose to be billed monthly or annually, depending on your selected plan. Once your billing period starts, you’ll receive an invoice, and payments will be automatically charged to your registered payment method. You can view your billing history at any time.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Changing your account email is simple. Log in to your account and go to the account settings section. There, you will find an option to update your email address. After making the change, a confirmation email will be sent to verify the new address.",
  },
];

const blogs = [
  {
    cover: cover1,
    type: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "20 Jan 2024",
    authorName: "Olivia Rhye",
    avatar: avatar,
  },
  {
    cover: cover2,
    type: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    date: "19 Jan 2024",
    authorName: "Phoenix Baker",
    avatar: avatar2,
  },
  {
    cover: cover3,
    type: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    date: "18 Jan 2024",
    authorName: "Lana Steiner",
    avatar: avatar3,
  },
];

const product = [
  "Product",
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
];

const resource = [
  "Resources",
  "Blog",
  "Newsletter",
  "Events",
  "Help centre",
  "Tutorials",
  "Support",
];

const usecases = [
  "Use cases",
  "Startups",
  "Enterprise",
  "Government",
  "SaaS centre",
  "Marketplaces",
  "Ecommerce",
];

const social = [
  "Social",
  "Twitter",
  "LinkedIn",
  "Facebook",
  "GitHub",
  "AngelList",
  "Dribbble",
];

const legal = [
  "Legal",
  "Terms",
  "Privacy",
  "Cookies",
  "Licenses",
  "Settings",
  "Contact",
];

const company = [
  "Company",
  "About us",
  "Careers",
  "Press",
  "News",
  "Media kit",
  "Contact",
];

const footers = [product, company, resource, usecases, social, legal];



type FeatureType = (typeof features)[0];

const companies = [Company6, Company1, Company2, Company3, Company4, Company5];

export { companies, features, questions, blogs, footers };
export default FeatureType;
