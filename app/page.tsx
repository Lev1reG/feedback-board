import { twJoin } from "tailwind-merge";

export default function Home() {
  return (
    <main
      className={twJoin(
        "md:max-w-2xl",
        "mx-auto md:mt-8",
        "bg-white",
        "md:shadow-lg",
        "md:rounded-lg",
        "overflow-hidden",
      )}
    >
      <div
        className={twJoin("p-8", "bg-gradient-to-r from-cyan-400 to-blue-400")}
      >
        <h1 className="font-bold text-xl">Feedback Platform by Deren</h1>
        <p className="text-opacity-90 text-slate-700">
          Collaborative platform for gathering, discussing, and sharing ideas.
        </p>
      </div>
      <div className={twJoin("flex", "px-8 py-2", "bg-gray-100", "border-b")}>
        <div className={twJoin("grow")}></div>
        <div>
          <button
            className={twJoin(
              "px-4 py-1",
              "bg-blue-500",
              "rounded-md",
              "text-white text-opacity-90",
            )}
          >
            Make a suggestion
          </button>
        </div>
      </div>
      <div className={twJoin("px-8 py-4")}>
        <div className={twJoin("flex", "items-center", "gap-8")}>
          <div>
            <h2>Please Post more videos and post more often</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dignissim leo sit amet sem egestas, non fermentum nisl euismod.
              Curabitur ac dapibus purus. Ut blandit tincidunt purus quis
              suscipit. Sed porttitor ac nisl vel elementum. Sed non sem
              consequat dui lobortis egestas sit amet et tortor. Nulla et neque
              at ipsum blandit cursus. Aenean nec felis aliquam nisl lacinia
              fringilla.
            </p>
          </div>
          <div>
            <button
              className={twJoin(
                "px-4 py-1",
                "shadow-sm shadow-gray-200",
                "border",
                "rounded-md",
              )}
            >
              ^80
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
