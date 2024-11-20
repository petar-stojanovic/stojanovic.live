import ThemeIcon from "@/app/_components/ThemeIcon";

const ContactInfo = () => {
  const contactData = [
    {
      id: 1,
      href: "https://www.github.com/petar-stojanovic",
      iconName: "github",
      alt: "Github",
      label: "Github",
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/petar-stojanovikj",
      iconName: "linkedin",
      alt: "Linkedin",
      label: "Linkedin",
    },
    {
      id: 3,
      href: "mailto:2001petarstojanovic@gmail.com",
      iconName: "email",
      alt: "Email",
      label: "Email",
    },
    {
      id: 4,
      href: "https://drive.google.com/file/d/1RSrJhWM5Giz8p8FcGhjCJkm82UMS_-vJ/view",
      iconName: "resume",
      alt: "Resume",
      label: "Resume",
    },
  ];

  return (
    <section className="flex flex-col">
      <h2 className="mb-4 text-center font-semibold text-2xl sm:text-left">
        Contact
      </h2>

      <div className=" mx-auto flex flex-wrap gap-4 sm:gap-6">
        {contactData.map((it) => (
          <div key={it.id} className="group relative">
            <button
              type="button"
              className="rounded-xl border border-neutral-200 bg-zinc-100 p-3 hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:border-neutral-700 dark:hover:bg-zinc-800 "
            >
              <a href={it.href} target="_blank" rel="noreferrer">
                <ThemeIcon
                  iconName={it.iconName}
                  alt={it.alt}
                  width={24}
                  height={24}
                  className="h-8 w-8"
                />
              </a>
            </button>
            <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 text-background opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:text-foreground">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
