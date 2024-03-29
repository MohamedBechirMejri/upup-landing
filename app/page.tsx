import RocketSVG from "./components/RocketSVG";

export default function Home() {
  return (
    <div className="h-full grid grid-cols-[minmax(0,1fr),50vw] overflow-hidden">
      <div></div>
      <div className="overflow-hidden relative">
        <div className="bg-gradient-to-tr from-sky-500 to-blue-700 h-full -skew-x-12 translate-x-24"></div>

        <RocketSVG className="absolute top-1/2 left-1/2 h-1/2 -translate-x-[37%] -translate-y-1/2" />
      </div>
    </div>
  );
}
