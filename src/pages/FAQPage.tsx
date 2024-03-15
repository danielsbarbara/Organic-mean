import React from "react";
import { FAQItem } from "../components/FAQItem";


const faqs = [
  {
    question: "Têm anéis de noivado?",
    answer: "Sim, tenho alguns modelos disponíveis para amostra, e também é possível fazer por encomenda."
  },
  {
    question: "Têm alianças de casamento?",
    answer: "Sim, tenho alguns modelos disponíveis para amostra, e também é possível fazer por encomenda.",
  },
  {
    question: "Fazem arranjos em peças?",
    answer: "Faço arranjos em peças de joalharia, o orçamento para o arranjo é dado após avaliação da peça.",
  },
  {
    question: "Fazem jóias por encomenda?",
    answer: "Sim, é possível fazer jóias por encomenda. Para mais informações, por favor contacte-nos através do email organicmean@gmail.com",
  }
//

];

export function FAQPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-8">Perguntas Frequentes</h1>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
