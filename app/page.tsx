import Image from "next/image";
import ThemeIcon from "@/app/_components/ThemeIcon";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-14">
      <section className="flex items-center gap-8 py-4">
        <Image
          src={"/profile.jpg"}
          width={100}
          height={100}
          alt="Profile Picture"
          className="h-36 w-36 rounded-full border"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Petar Stojanović</h1>
          <p className="text-xl leading-6">
            I am a passionate Software Engineer who enjoys building web and
            mobile apps.
          </p>
          <p className="mt-2 text-zinc-500 flex items-center gap-2">
            <ThemeIcon
              iconName="location"
              alt="Location"
              width={16}
              height={16}
            />
            <span>Kumanovo, North Macedonia</span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl">Contact</h2>
        <div className="mt-4 grid w-full grid-cols-4 gap-6">
          <a
            className="col-span-3 flex items-center justify-center rounded-3xl border border-neutral-800 bg-background hover:border-neutral-700"
            href="mailto:2001petarstojanovic@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center ">
              <ThemeIcon
                iconName="email"
                alt="Email"
                width={16}
                height={16}
                className="h-16 w-16"
              />
              <span>Contact</span>
            </div>
          </a>

          <a
            className="flex items-center justify-center rounded-3xl border border-neutral-800 bg-background py-4 hover:border-neutral-700"
            href="https://www.github.com/petar-stojanovic"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <ThemeIcon
                iconName="github"
                alt="Github"
                width={16}
                height={16}
                className="h-16 w-16"
              />
            </div>
          </a>

          <a
            className="flex items-center justify-center rounded-3xl border border-foreground border-neutral-800 bg-background py-4 hover:border-neutral-700"
            href="https://www.linkedin.com/in/petar-stojanovikj"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <ThemeIcon
                iconName="linkedin"
                alt="Linkedin"
                width={16}
                height={16}
                className="h-16 w-16"
              />
            </div>
          </a>

          <a
            className="col-span-3 flex items-center justify-center rounded-3xl border border-neutral-800 bg-background hover:border-neutral-700"
            href="https://drive.google.com/file/d/1RSrJhWM5Giz8p8FcGhjCJkm82UMS_-vJ/view"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex h-full items-center justify-center ">
              <ThemeIcon
                iconName="resume"
                alt="Resume"
                width={16}
                height={16}
                className="h-16 w-16"
              />
              <span>Portfolio</span>
            </div>
          </a>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 gap-1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </section>
    </div>
  );
}
