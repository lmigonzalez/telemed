import React, { useState } from 'react';

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: 'What is Square KDS?',
      answer:
        'Square KDS is a Kitchen Display System application that allows you to view, track, and fulfill orders via digital tickets in your back of house, replacing traditional paper tickets and kitchen printers.',
      isActive: false,
    },
    {
      id: 2,
      question: 'How much does Square KDS cost, and what comes included?',
      answer:
        'Square KDS is a Kitchen Display System application that allows you to view, track, and fulfill orders via digital tickets in your back of house, replacing traditional paper tickets and kitchen printers.',
      isActive: false,
    },
    {
      id: 3,
      question: 'What if I need multiple KDS stations?',
      answer:
        'Square KDS is a Kitchen Display System application that allows you to view, track, and fulfill orders via digital tickets in your back of house, replacing traditional paper tickets and kitchen printers.',
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
    <section className="w-[1200px] max-w-full flex flex-col justify-between items-center m-auto px-4 py-24">
      <h2 className="text-5xl font-bold mb-16">FAQ</h2>

      <ul className="w-full">
        {faq.map((item, index) => {
          return (
            <li key={item.id} className={`w-full py-4 border-solid ${index === 0 ? 'border-y-2' : 'border-b-2'}`}>
              <div className="flex justify-between items-start ">
                <p className="text-2xl">{item.question}</p>
                <div
                  className="text-[#656EB3] ml-4"
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
                        className="w-6 h-6"
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
                        className="w-6 h-6"
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
			  {
				item.isActive &&  <p className="text-base mt-3">{item.answer}</p>
			  }
             
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
