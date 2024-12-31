import React from 'react'

const OffersSection = () => {

    const offers = [
        {
            id: 1,
            image: 'https://img.freepik.com/free-vector/internet-lessons-searching-remote-university-educational-programs-online-classes-website-high-school-student-with-magnifying-glass-cartoon-character_335657-3269.jpg?uid=R23202017&ga=GA1.1.1584573546.1729940327&semt=ais_hybrid',
            title: '1-on-1 lessons',
            description:
                'Find teachers from all over the world sharing their languages, dialects, and cultures.',
            link: { text: 'Find my teacher', url: '#' },
        },
        {
            id: 2,
            image: 'https://img.freepik.com/free-vector/group-therapy-illustrated_23-2148654878.jpg?uid=R23202017&ga=GA1.1.1584573546.1729940327&semt=ais_hybrid',
            title: 'Group Class',
            description:
                'Fun and engaging online group classes designed and led by expert teachers.',
            link: { text: 'View all classes', url: '#' },
        },
        {
            id: 3,
            image: 'https://img.freepik.com/free-vector/professional-development-teachers-abstract-concept-illustration-school-authority-initiative-training-teachers-conference-seminar-qualification-programme_335657-3477.jpg?uid=R23202017&ga=GA1.1.1584573546.1729940327&semt=ais_hybrid',
            title: 'Practice for free',
            description:
                'Meet and share experiences with millions of language learners from more than 190 countries.',
            link: { text: 'Explore the community', url: '#' },
        },
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    See what Tutor Lagbe offers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-32 h-32 object-contain mb-6"
                            />
                            <h3 className="text-xl font-bold mb-4">{offer.title}</h3>
                            <p className="text-gray-600 mb-4">{offer.description}</p>
                            <a
                                href={offer.link.url}
                                className="text-teal-600 font-semibold hover:underline"
                            >
                                {offer.link.text} &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OffersSection
