const ExperienceInfo = () => {
  const experiences = [
    {
      id: 1,
      title: "Microsoft Dynamics Intern",
      company: "AXo solutions",
      url: "https://axosolutions.com/",
      location: "Skopje",
      duration: "March 2024 - June 2024",
      summary:
        "Developed ERP solutions using X++ and Dynamics 365. Configured data models and optimized database transactions and queries.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Sorsix",
      url: "https://sorsix.com/",
      location: "Skopje",
      duration: "September 2023 - January 2024",
      summary:
        "Refactored modules and redesigned a ticketing system platform using Angular and Spring Boot. Optimized queries for PostgreSQL, and gained experience with Ionic and Capacitor.",
    },
    {
      id: 3,
      title: "Web Programming Intern",
      company: "Sorsix",
      url: "https://sorsix.com/",
      location: "Skopje",
      duration: "June 2023 - September 2023",
      summary:
        "Developed 'Courseify' an online course platform using Spring Boot (Kotlin), Angular, and PostgreSQL, with JWT-based authentication and Flyway for schema management.",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center font-semibold text-2xl sm:text-left">
        Experience
      </h2>
      <div>
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col gap-2 border-b pb-4 mb-4">
            <h3 className="font-bold text-lg">{exp.title}</h3>
            <p className="text-gray-600">
              {exp.company} - {exp.location}
            </p>
            <p className="text-gray-500">{exp.duration}</p>
            <p>{exp.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceInfo;
