import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10">
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

      <section className="mt-10">
        <h2 className="font-bold text-2xl">About Me</h2>
        <p className="mt-2 text-lg">
          I'm a Software Engineer who enjoys creating web and mobile apps. I love bringing ideas to life through code.
        </p>
      </section>
    </div>
  );
}
