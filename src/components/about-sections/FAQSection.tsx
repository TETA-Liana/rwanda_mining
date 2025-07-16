import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "What is Rwanda Mining Week?",
    answer:
      "Rwanda Mining Week is an annual event that brings together mining industry leaders, government officials, investors, and other stakeholders to discuss opportunities, challenges, and innovations in Rwanda’s mining sector. The event features conferences, exhibitions, and networking sessions.",
  },
  {
    question: "When and where is Rwanda Mining Week held?",
    answer:
      "Rwanda Mining Week is typically held in December at the Kigali Convention Center and the Kigali Conference and Exhibition Village. Please check the official event website for the latest dates and venue details.",
  },
  {
    question: "Who should attend Rwanda Mining Week?",
    answer:
      "The event is ideal for mining professionals, investors, government representatives, academics, civil society organizations, and anyone interested in the development and sustainability of Rwanda’s mining sector.",
  },
  {
    question: "What are the main objectives of Rwanda Mining Week?",
    answer:
      "The main objectives are to showcase Rwanda’s mineral potential, promote responsible and sustainable mining practices, foster partnerships and investment, and encourage knowledge sharing among stakeholders.",
  },
  {
    question: "How can I register for Rwanda Mining Week?",
    answer:
      "You can register for Rwanda Mining Week through the official event website. Early registration is recommended as spaces may be limited.",
  },
];

const FAQSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 shadow-lg">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={`h-6 w-6 transform ${
                            open ? "-rotate-180" : "rotate-0"
                          } transition-transform duration-200`}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <Disclosure.Panel
                      as="p"
                      className="text-base leading-7 text-gray-600"
                    >
                      {faq.answer}
                    </Disclosure.Panel>
                  </dd>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQSection;
