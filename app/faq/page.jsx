import { faqData } from "@/lib/data";

const Faq = () => {
  return (
    <div className="container mt-[48px]">
      <h1 className="text-xl md:text-2xl font-medium text-center mt-6 mb-2">
        Frequently Asked Questions For Ekoebrand
      </h1>
      <ul>
        {faqData.map((faq, index) => {
          return (
            <li key={`faq_${index}`}>
              <h4 className="font-semibold text-xl my-2">{faq.question}</h4>
              <p>{faq.answer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
