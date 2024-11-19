import Image from "next/image";

const SkillsInfo = () => {
  const skills = [
    {name: "Angular", iconName: "angular", description: "Angular"},
    {name: "HTML", iconName: "html", description: "HTML"},
    {name: "CSS", iconName: "css", description: "CSS"},
    {name: "Ionic", iconName: "ionic", description: "Ionic"},
    {name: "Tailwind", iconName: "tailwind", description: "Tailwind"},
    {name: "Typescript", iconName: "typescript", description: "Typescript"},
    {name: "Firebase", iconName: "firebase", description: "Firebase"},
    {name: "Git", iconName: "git", description: "Git"},
    {name: "Java", iconName: "java", description: "Java"},
    {name: "Kotlin", iconName: "kotlin", description: "Kotlin"},
    {name: "Postgres", iconName: "postgres", description: "Postgres"},
    {name: "React", iconName: "react", description: "React"},
    {
      name: "Spring",
      iconName: "spring",
      description: "Spring Framework",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center font-semibold text-2xl sm:text-left lg:text-3xl">
        Skills
      </h2>

      <div className="mx-auto mt-4 mb-12 grid grid-cols-3 gap-6 sm:mx-0 sm:grid-cols-5 md:grid-cols-6">
        {skills.map((skill) => (
          <div key={skill.name} className="group relative">
            <div className="flex aspect-square h-full items-center justify-center rounded-xl border border-neutral-300 bg-zinc-100 p-1 duration-200 ease-in-out hover:border-neutral-400 hover:bg-zinc-200 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <div className="m-1 flex flex-col items-center justify-center gap-2">
                <Image
                  src={`/skills/${skill.iconName}.svg`}
                  width={48}
                  height={48}
                  alt={skill.description}
                />
                <span>{skill.name}</span>
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 text-background opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-foreground">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsInfo;
