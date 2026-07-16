"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface IndiaFAQAccordionProps {
    faqs: FAQItem[];
}

export default function IndiaFAQAccordion({ faqs }: IndiaFAQAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                    <div
                        key={index}
                        className="border border-[#eee] rounded-lg overflow-hidden bg-white"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-4 text-left bg-[#f9f9f9] border-b border-[#eee] focus:outline-none transition-colors hover:bg-gray-100"
                        >
                            <span className="text-base md:text-lg font-semibold text-[#1a1a1a]">
                                {faq.question}
                            </span>
                            {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 shrink-0 ml-2" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 ml-2" />
                            )}
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-4 bg-white text-[#555] text-[15px] leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
