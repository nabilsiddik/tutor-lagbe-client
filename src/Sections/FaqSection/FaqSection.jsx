import React from 'react'

const FaqSection = () => {

  const faqs = [
    {
      id: 1,
      question: 'How does Tutor Lagbe work?',
      answer:
        'Tutor Lagbe helps you achieve your language learning ambitions. Find your ideal teacher and book a 1-on-1 lesson. There\'s no subscription or rigid schedule. Learn when you want, as much as you want. If you\'d prefer to learn without a teacher, you can use Tutor Lagbe\'s handy learning tools. Improve your vocabulary, train your ear with podcasts, and put your knowledge to the test with quizzes. The Tutor Lagbe Community is always sharing new content with language lovers.',
    },
    {
      id: 2,
      question: 'How many Tutor Lagbe lessons a week can I take?',
      answer: 'You can take as many lessons as you want, depending on your schedule and your teacher’s availability.',
    },
    {
      id: 3,
      question: 'Is Tutor Lagbe worth it for learning a language?',
      answer: 'Absolutely! Tutor Lagbe offers personalized lessons with experienced teachers to help you achieve your language learning goals.',
    },
    {
      id: 4,
      question: 'How do I become a teacher on Tutor Lagbe',
      answer: 'To become a teacher on Tutor Lagbe, you can apply through their website by providing your qualifications and teaching experience.',
    },
  ];

  return (
    <section className="my-20 dark:bg-dark dark:text-white bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">Frequently asked questions</h2>
        <div className="bg-white rounded-lg p-6 md:p-8 dark:bg-dark dark:text-white">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow mb-4 dark:bg-darklight dark:text-white bg-white text-black shadow-lg border">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">{faq.question}</div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
