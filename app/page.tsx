import Particles from "./components/Particles";
import RocketSVG from "./components/RocketSVG";
import TitleAndShit from "./components/TitleAndShit";

export default function Home() {
  return (
    <div className="h-full grid grid-cols-[minmax(0,1fr),50vw] overflow-hidden">
      {/* <div className="flex flex-col items-center justify-center">
        <h1>Upup and Away</h1>
        <p>The most powerful file uploader for your react projects</p>
        <button>Try it now</button>
      </div> */}

      <TitleAndShit />

      <div className="overflow-hidden relative bg-gradient-to-tr from-sky-500 via-blue-700 to-blue-950 ">
        <div
          className="size-0 "
          style={{
            borderLeft: "20rem solid transparent",
            borderRight: "0 solid transparent",
            borderBottom: "100vh solid white",
            transform: "rotateX(180deg) rotateY(180deg)",
          }}
        ></div>

        <RocketSVG className="absolute top-1/2 left-1/2 h-1/2 z-20" />
        <Particles />
      </div>
    </div>
  );
}
