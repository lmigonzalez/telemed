import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "What is Square KDS?",
      answer:
        "Square KDS is a Kitchen Display System application that allows you to view, track, and fulfill orders via digital tickets in your back of house, replacing traditional paper tickets and kitchen printers.",
      isActive: false,
    },
    {
      id: 2,
      question: "How much does Square KDS cost, and what comes included?",
      answer:
        "Square KDS is a Kitchen Display System application that allows you to view, track, and fulfill orders via digital tickets in your back of house, replacing traditional paper tickets and kitchen printers.",
      isActive: false,
    },
    {
      id: 3,
      question: "What if I need multiple KDS stations?",
      answer:
        "Square KDS is a Kitchen Display System application that allows you to view, track, and fulfill orders via digital tickets in your back of house, replacing traditional paper tickets and kitchen printers.",
      isActive: false,
    },
  ];

  const [faq, setFaq] = useState(questions);

  function handleAnswer(id) {
    setFaq((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      })
    );
  }
  return (
    <section className="m-auto flex w-[1200px] max-w-full flex-col items-center justify-between px-4 py-24">
      <motion.h2
        initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3 }}
        className="mb-16 text-5xl font-bold"
      >
        FAQ
      </motion.h2>

      <ul className="w-full">
        {faq.map((item, index) => {
          return (
            <motion.li
              initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.3 }}
              key={item.id}
              className={`w-full border-solid py-4 ${
                index === 0 ? "border-y-2" : "border-b-2"
              }`}
            >
              <div className="flex items-start justify-between ">
                <p className="text-2xl">{item.question}</p>
                <div
                  className="ml-4 text-[#656EB3]"
                  onClick={() => handleAnswer(item.id)}
                >
                  {item.isActive ? (
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              {item.isActive && <p className="mt-3 text-base">{item.answer}</p>}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
