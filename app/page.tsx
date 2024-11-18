import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-14">
      <section className="flex items-center gap-10 py-4">
        <Image
          src={"/profile.jpg"}
          width={100}
          height={100}
          alt="Profile Picture"
          className="h-32 w-32 rounded-full border"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-3xl">Petar Stojanović</h1>
          <p className="text-xl">Software Engineer</p>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl">About Me</h2>
        <p className="mt-4 text-lg">
          I'm a Software Engineer who enjoys creating web and mobile apps. I
          love bringing ideas to life through code.
        </p>
      </section>

      <section>
        <h2 className="font-bold text-2xl">Contact</h2>
        <div className="mt-4 grid w-full grid-cols-4 gap-4">
          <a
            className="col-span-3 rounded-3xl border border-foreground bg-background hover:scale-[102%] "
            href="mailto:2001petarstojanovic@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex h-full items-center justify-center ">
              <Image
                src={"email.svg"}
                alt="Email"
                width={16}
                height={16}
                className="h-16 w-16"
              />
              <span>Contact</span>
            </div>
          </a>

          <a
            className="flex items-center justify-center rounded-3xl border border-foreground bg-background hover:scale-[102%] py-4"
            href="https://www.github.com/petar-stojanovic"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <Image
                src={"github.svg"}
                alt="Github"
                width={16}
                height={16}
                className="h-16 w-16"
              />
            </div>
          </a>

          <a
            className="flex items-center justify-center rounded-3xl border border-foreground bg-background hover:scale-[102%] py-4"
            href="https://www.linkedin.com/in/petar-stojanovikj"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <Image
                src={"linkedin.svg"}
                alt="LinkedIn"
                width={16}
                height={16}
                className="h-16 w-16"
              />
            </div>
          </a>

          <a
            className="col-span-3 rounded-3xl border border-foreground bg-background hover:scale-[102%]"
            href="mailto:2001petarstojanovic@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex h-full items-center justify-center ">
              <Image
                src={"email.svg"}
                alt="Email"
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
