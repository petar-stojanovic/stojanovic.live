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
      techStack: ["X++", "Dynamics 365", "SQL"],
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
      techStack: [
        "Angular",
        "Spring Boot",
        "Kotlin",
        "PostgreSQL",
        "Ionic",
        "Capacitor",
      ],
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
      techStack: [
        "Angular",
        "Spring Boot",
        "Kotlin",
        "PostgreSQL",
        "JWT",
        "Flyway",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-4 text-center font-light text-2xl uppercase tracking-wider sm:text-left sm:text-3xl">
        Experience
      </h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="flex flex-col space-y-6">
          <h3 className="mb-2.5 font-semibold text-xl tracking-tight">
            {exp.title}
          </h3>
          <div className="flex flex-col gap-2 border-zinc-600 border-l-2 py-1 pl-4">
            <div className="flex justify-between">
              <a
                href={exp.url}
                className="font-medium text-lg underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {exp.company}
              </a>
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

            <p className="mb-1 leading-[1.4rem]">{exp.summary}</p>

            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-2xl border border-neutral-200 bg-zinc-100 px-2.5 py-1 font-semi text-xs hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:border-neutral-700 dark:hover:bg-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceInfo;
