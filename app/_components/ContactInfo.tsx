import ThemeIcon from "@/app/_components/ThemeIcon";

const ContactInfo = () => {
  return (
    <section className="flex flex-wrap gap-2 sm:gap-3">
      <button
        type="button"
        className="rounded-xl bg-zinc-100 p-3 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <a
          href="https://www.github.com/petar-stojanovic"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <ThemeIcon
              iconName="github"
              alt="Github"
              width={24}
              height={24}
              className="h-8 w-8"
            />
          </div>
        </a>
      </button>

      <button
        type="button"
        className="rounded-xl bg-zinc-100 p-3 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <a
          href="https://www.linkedin.com/in/petar-stojanovikj"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <ThemeIcon
              iconName="linkedin"
              alt="Linkedin"
              width={24}
              height={24}
              className="h-8 w-8"
            />
          </div>
        </a>
      </button>

      <button
        type="button"
        className="rounded-xl bg-zinc-100 p-3 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <a
          href="mailto:2001petarstojanovic@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center ">
            <ThemeIcon
              iconName="email"
              alt="Email"
              width={24}
              height={24}
              className="h-8 w-8"
            />
          </div>
        </a>
      </button>

      <button
        type="button"
        className="rounded-xl bg-zinc-100 p-3 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <a
          href="https://drive.google.com/file/d/1RSrJhWM5Giz8p8FcGhjCJkm82UMS_-vJ/view"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center gap-1">
            <ThemeIcon iconName="resume" alt="Resume" width={30} height={30} />
            <span>Resume</span>
          </div>
        </a>
      </button>
    </section>
  );
};

export default ContactInfo;
