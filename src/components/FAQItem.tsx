import React from "react";

interface IFAQItem {
  question?: string;
  answer?: string;
}

export function FAQItem({ question, answer }: IFAQItem) {
  return (
    <div className="border-b border-gray-200 py-4">
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
