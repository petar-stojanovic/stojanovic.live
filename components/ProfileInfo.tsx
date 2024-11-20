import ThemeIcon from "@/app/_components/ThemeIcon";
import Image from "next/image";

const ProfileInfo = () => {
  return (
    <section className="flex flex-col items-center gap-8 py-4 sm:flex-row">
      <Image
        src={"/profile.jpg"}
        width={100}
        height={100}
        alt="Profile Picture"
        className="h-36 w-36 rounded-full border"
      />
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <h1 className="mb-2 font-bold text-4xl md:text-5xl">
          Petar Stojanović
        </h1>
        <p className="text-pretty text-lg leading-6 md:text-xl">
          I am a passionate Software Engineer who enjoys building web and mobile
          apps.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-neutral-600 sm:justify-start dark:text-neutral-400">
          <ThemeIcon
            iconName="location"
            alt="Location"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <span>Kumanovo, North Macedonia</span>
        </p>
      </div>
    </section>
  );
};

export default ProfileInfo;
