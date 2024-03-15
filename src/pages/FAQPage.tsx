import React, { useState } from "react";
import { toLocalTranslation } from "../i18n/toLocalTranslation";


export function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="container mx-auto py-8 bg-opacity-72">
      <h1 className="text-2xl font-cinzel text-center  mb-8 text-white">{toLocalTranslation("faq_page_title")}</h1>
      <div>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-zinc-900 bg-opacity-95 bg-op my-2 shadow-2xl">
            <h2
              onClick={() => toggleFAQ(index)}
              className="flex flex-row justify-between items-center font-bitterRegular p-3 cursor-pointer text-zinc-400 shadow"
            >
              <span>{toLocalTranslation(`faq_question_${index}`)}</span>
              <svg
                className={`fill-current text-white hover:scale-105 h-6 w-6 transform transition-transform duration-00 ${expandedIndex === index ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div className={`border-l-2 bg-zinc-950 border-orange-700 overflow-hidden max-h-0 duration-75 transition-all ${expandedIndex === index ? 'max-h-full' : ''}`}>
              <p className="p-3 text-white font-bitterRegular">{toLocalTranslation(`faq_answer_${index}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
