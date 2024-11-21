import ThemeIcon from "@/app/_components/ThemeIcon";
import Image from "next/image";

const ProjectsInfo = () => {
  const projects = [
    {
      id: 1,
      title: "Agromak",
      image: "/projects/agromak.png",
      description:
        "Mobile application for classified ads integrated with OpenAI.",
      techStack: ["Angular", "Firebase", "Ionic", "Capacitor", "OpenAI"],
      githubLink: "https://github.com/petar-stojanovic/agromak",
      demoLink: null,
    },
    {
      id: 2,
      title: "Courseify",
      image: "/projects/courseify.png",
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
      image: "/projects/socialnetwork.png",
      description:
        "Web application for sharing tweets, making friends and chatting.",
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
      image: "/projects/myeducation.png",
      description:
        "Web application that lets you search for information about educational institutions in Macedonia.",
      techStack: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Bootstrap"],
      githubLink:
        "https://github.com/petar-stojanovic/EducationUnitsWebApplication",
      demoLink:
        "https://drive.google.com/file/d/1v-9pvhcfkA58YaBxg7EX54FCqvVe2nHD/view?usp=sharing",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-4 text-center font-light text-2xl uppercase tracking-wider sm:text-left sm:text-3xl">
        Projects
      </h2>
      <p className="text-center sm:text-left">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="mx-auto grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 rounded-md border border-zinc-300 p-5 dark:border-zinc-700"
          >
            <div className="">
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className="aspect-video rounded-md object-cover"
              />
            </div>

            <div className="flex h-full flex-col justify-between space-y-4">
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-2xl border border-neutral-200 bg-zinc-100 px-2.5 py-1 font-semi text-xs hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:border-neutral-700 dark:hover:bg-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2 text-background text-sm">
                <button
                  type="button"
                  className="group h-8 rounded-lg bg-zinc-900 px-3 font-medium text-xs hover:border-neutral-300 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-300"
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 underline-offset-2 group-hover:underline "
                  >
                    <ThemeIcon
                      iconName={"github"}
                      reverse={true}
                      width={16}
                      height={16}
                    />
                    <span>Github</span>
                  </a>
                </button>
                {project.demoLink && (
                  <button
                    type="button"
                    className="group h-8 rounded-lg bg-zinc-900 px-3 font-medium text-xs hover:border-neutral-300 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-300"
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 underline-offset-2 group-hover:underline"
                    >
                      <ThemeIcon
                        iconName={"link"}
                        reverse={true}
                        width={16}
                        height={16}
                      />
                      <span>Demo</span>
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsInfo;
