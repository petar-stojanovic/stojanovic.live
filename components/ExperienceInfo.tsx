import ThemeIcon from "@/app/_components/ThemeIcon";

const ExperienceInfo = () => {
  const experiences = [
    {
      id: 1,
      title: "Microsoft Dynamics Intern",
      company: "AXo solutions",
      url: "https://axosolutions.com/",
      location: "Skopje, North Macedonia",
      duration: "Mar 2024 - Jun 2024",
      summary:
        "Developed ERP solutions using X++ and Dynamics 365. Configured data models and optimized database transactions and queries.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Sorsix",
      url: "https://sorsix.com/",
      location: "Skopje, North Macedonia",
      duration: "Sep 2023 - Jan 2024",
      summary:
        "Refactored modules and redesigned a ticketing system platform using Angular and Spring Boot. Optimized queries for PostgreSQL, and gained experience with Ionic and Capacitor.",
    },
    {
      id: 3,
      title: "Web Programming Intern",
      company: "Sorsix",
      url: "https://sorsix.com/",
      location: "Skopje, North Macedonia",
      duration: "Jun 2023 - Sep 2023",
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
          <div key={exp.id} className="mb-6 flex flex-col gap-1 pb-4">
            <h3 className="mb-2.5 font-semibold text-xl tracking-tight ">
              {exp.title}
            </h3>
            <div className="flex flex-col gap-2 border-zinc-600 border-l-2 py-1 pl-4">
              <div className="flex justify-between">
                <span className="font-semibold text-lg">{exp.company}</span>
                <span className="font-light text-neutral-600 dark:text-neutral-400">
                  {exp.duration}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
                <ThemeIcon
                  iconName="location"
                  alt="Location"
                  width={10}
                  height={10}
                />
                {exp.location}
              </div>
              <p className="leading-[1.4rem]">{exp.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceInfo;
