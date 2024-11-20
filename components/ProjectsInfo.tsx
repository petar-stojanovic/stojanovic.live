const ProjectsInfo = () => {
  const _projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Project 1 description",
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center font-semibold text-2xl sm:text-left">
        Projects
      </h2>
    </section>
  );
};

export default ProjectsInfo;
