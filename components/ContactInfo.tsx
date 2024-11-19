import ThemeIcon from "@/app/_components/ThemeIcon";

const ContactInfo = () => {
  return (
    <section className="flex flex-wrap gap-2 sm:gap-3">
      <div className="group relative">
        <button
          type="button"
          className="rounded-xl border border-neutral-200 bg-zinc-100 p-3 hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-900 dark:bg-zinc-900 dark:hover:border-neutral-800 dark:hover:bg-zinc-800 "
        >
          <a
            href="https://www.github.com/petar-stojanovic"
            target="_blank"
            rel="noreferrer"
          >
            <ThemeIcon
              iconName="github"
              alt="Github"
              width={24}
              height={24}
              className="h-8 w-8"
            />
          </a>
        </button>
        <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          Github
        </div>
      </div>

      <div className="group relative">
        <button
          type="button"
          className="rounded-xl border border-neutral-200 bg-zinc-100 p-3 hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-900 dark:bg-zinc-900 dark:hover:border-neutral-800 dark:hover:bg-zinc-800 "
        >
          <a
            href="https://www.linkedin.com/in/petar-stojanovikj"
            target="_blank"
            rel="noreferrer"
          >
            <ThemeIcon
              iconName="linkedin"
              alt="Linkedin"
              width={24}
              height={24}
              className="h-8 w-8"
            />
          </a>
        </button>
        <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          Linkedin
        </div>
      </div>

      <div className="group relative">
        <button
          type="button"
          className="rounded-xl border border-neutral-200 bg-zinc-100 p-3 hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-900 dark:bg-zinc-900 dark:hover:border-neutral-800 dark:hover:bg-zinc-800 "
        >
          <a
            href="mailto:2001petarstojanovic@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <ThemeIcon
              iconName="email"
              alt="Email"
              width={24}
              height={24}
              className="h-8 w-8"
            />
          </a>
        </button>
        <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          Email
        </div>
      </div>

      <div className="group relative">
        <button
          type="button"
          className="rounded-xl border border-neutral-200 bg-zinc-100 p-3 hover:border-neutral-300 hover:bg-zinc-200 dark:border-neutral-900 dark:bg-zinc-900 dark:hover:border-neutral-800 dark:hover:bg-zinc-800 "
        >
          <a
            href="https://drive.google.com/file/d/1RSrJhWM5Giz8p8FcGhjCJkm82UMS_-vJ/view"
            target="_blank"
            rel="noreferrer"
          >
            <ThemeIcon iconName="resume" alt="Resume" width={32} height={32} />
          </a>
        </button>
        <div className="pointer-events-none absolute right-0 left-0 z-10 mt-1 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          Resume
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
