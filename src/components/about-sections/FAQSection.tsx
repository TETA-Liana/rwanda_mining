import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: 'How long has Mining Indaba been contributing to the African mining industry?',
    answer: 'Since 1994, Investing in African Mining Indaba has been the #1 place for deal sourcing and corporate matchmaking for the African mining industry. It has and continues to serve as the most comprehensive gathering for investment, finance, innovation, and transformation to support end-to-end value creation.',
  },
  {
    question: 'What sets Mining Indaba apart from other mining conferences?',
    answer: 'At Mining Indaba, we stand out from other mining conferences by providing an unrivalled platform that brings together the most influential stakeholders in the industry. With 30 years of experience, the event offers a prestigious gathering of mining leaders, investors, government officials, and service providers from across the globe. The focus is to foster meaningful dialogue, showcasing cutting-edge technologies, and addressing key challenges makes Mining Indaba the definitive event for industry professionals looking to stay at the forefront of the sector. The commitment to sustainable development and responsbile mining practices further distinguishes Mining Indaba, making the event the ideal destination for forging lasting partnerships and seizing valuable investment opportunities.',
  },
  {
    question: 'How does Mining Indaba contribute to the sustainable development of the mining industry?',
    answer: 'Mining INdaba is dedicated to promoting sustainable development in the mining industry through a diverse range of content streams, panel dicussions, exhibition showfloow, and networking opportunities. Focusing on addressing key environmental, social, and governance (ESG) challenges, exploring innovative technologies for responsible mining practices, and fostering meaningful discussions on community engagement and stakeholder inclusion. Mining Indaba serves as a catalyst for sharing best practices, fostering collaboration, and driving positive change. By bringing together industry leaders, investors, mining companies, and government officials to build a sustainable future that balances economic growth with environmental protection and social progress.',
  },
  // Add more FAQs as needed based on content
]

const FAQSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 shadow-lg">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently asked questions</h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={`h-6 w-6 transform ${open ? '-rotate-180' : 'rotate-0'} transition-transform duration-200`}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <Disclosure.Panel as="p" className="text-base leading-7 text-gray-600">
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