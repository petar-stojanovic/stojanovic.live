import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center gap-10 py-4">
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
      </div>
    </div>
  );
}
