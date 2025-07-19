import Image from "next/image";

const SkillsInfo = () => {
  const skills = [
    {
      category: "Advanced",
      items: [
        {name: "Angular", iconName: "angular", description: "Angular"},
        {name: ".NET", iconName: "dotnet", description: ".NET"},
        {name: "Typescript", iconName: "typescript", description: "Typescript"},
        {name: "C#", iconName: "csharp", description: "C#"},
        {
          name: "SQL Server",
          iconName: "microsoft-sql-server",
          description: "Microsoft SQL Server",
        },
        {name: "Git", iconName: "git", description: "Git"},
      ],
    },
    {
      category: "Intermediate",
      items: [
        {name: "Spring", iconName: "spring", description: "Spring Framework"},
        {name: "Java", iconName: "java", description: "Java"},
        {name: "Kotlin", iconName: "kotlin", description: "Kotlin"},
        {name: "Postgres", iconName: "postgres", description: "Postgres"},
        {name: "Tailwind", iconName: "tailwind", description: "Tailwind"},
        {name: "Firebase", iconName: "firebase", description: "Firebase"},
      ],
    },
    {
      category: "Beginner",
      items: [
        {name: "Ionic", iconName: "ionic", description: "Ionic"},
        {name: "React", iconName: "react", description: "React"},
        {name: "Docker", iconName: "docker", description: "Docker"},
        {name: "Vue", iconName: "vue", description: "Vue"},
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-4 text-center font-light text-2xl uppercase tracking-wider sm:text-left sm:text-3xl">
        Skills / Technologies
      </h2>

      <div className="mx-auto sm:mx-0">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="mt-5 first:mt-0">
            <h3 className="mb-2.5 font-semibold leading-6">
              {skillCategory.category}
            </h3>

            <div className="grid grid-cols-3 gap-5 sm:grid-cols-6 sm:gap-6 md:grid-cols-6 md:gap-7">
              {skillCategory.items.map((skill) => (
                <div key={skill.name} className="group relative text-center">
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-neutral-200 bg-zinc-100 p-1 duration-200 ease-in-out hover:border-neutral-400 hover:bg-zinc-200 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
                    <div className="m-1 flex flex-col items-center justify-center gap-1">
                      <Image
                        src={`/skills/${skill.iconName}.svg`}
                        width={48}
                        height={48}
                        alt={skill.description}
                        className="h-10 w-10 p-0.5"
                      />
                      <span className="text-[0.85rem]">{skill.name}</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 text-background opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-foreground">
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsInfo;
