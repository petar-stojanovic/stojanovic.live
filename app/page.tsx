import Image from "next/image";

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
          <p className="mt-2 text-zinc-500 flex items-center gap-2 dark:text-zinc-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width={20}
              height={20}
              stroke="currentColor"
            >
              <title>Location</title>
              <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86
           298 0 192 0S0 86 0 192c0 87.4 117 243 168.3
            307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64
             64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            Kumanovo, North Macedonia
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
            className="flex items-center justify-center rounded-3xl border border-neutral-800 bg-background py-4 hover:border-neutral-700"
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
            className="flex items-center justify-center rounded-3xl border border-foreground border-neutral-800 bg-background py-4 hover:border-neutral-700"
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
            className="col-span-3 flex items-center justify-center rounded-3xl border border-neutral-800 bg-background hover:border-neutral-700"
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
