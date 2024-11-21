const ProjectsInfo = () => {
  const projects = [
    {
      id: 1,
      title: "Agromak",
      description:
        "Mobile application for classified ads integrated with OpenAI.",
      techStack: ["Angular", "Firebase", "Ionic", "Capacitor", "OpenAI"],
      githubLink: "https://github.com/petar-stojanovic/agromak",
      demoLink: null,
    },
    {
      id: 2,
      title: "Courseify",
      description:
        "A platform that allows creating online courses and quizzes for students and teachers.",
      techStack: [
        "Angular",
        "Spring Boot",
        "Kotlin",
        "PostgreSQL",
        "JWT",
        "Flyway",
      ],
      githubLink: "https://github.com/petar-stojanovic/courseify",
      demoLink: "https://www.youtube.com/watch?v=DphktvID968",
    },
    {
      id: 3,
      title: "SocialNetwork",
      description:
        "A web application for sharing tweets, making friends and chatting.",
      techStack: [
        "ASP.NET MVC",
        "C#",
        "jQuery",
        "Bootstrap",
        "SignalR",
        "LocalDB",
      ],
      githubLink: "https://github.com/petar-stojanovic/SocialNetwork",
      demoLink: "https://www.youtube.com/watch?v=p5bEOGw_SdA",
    },
    {
      id: 4,
      title: "MyEducation",
      description:
        "MyEducation is a web application where you can search for locations and other relevant information about different types of educational institutions across Macedonia.",
      techStack: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Bootstrap"],
      githubLink:
        "https://github.com/petar-stojanovic/EducationUnitsWebApplication",
      demoLink:
        "https://drive.google.com/file/d/1v-9pvhcfkA58YaBxg7EX54FCqvVe2nHD/view?usp=sharing",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center font-semibold text-2xl sm:text-left sm:text-3xl">
        Projects
      </h2>
      <p>
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      {projects.map((project) => (
        <div key={project.id}>
          <h3 className="mt-2.5 font-semibold text-xl tracking-tight">
            {project.title}
          </h3>
          <p className="mb-1 leading-[1.4rem]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-zinc-100 rounded-md dark:bg-zinc-900"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-pretty hover:underline"
              >
                View on GitHub
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="text-pretty hover:underline"
              >
                View Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsInfo;
