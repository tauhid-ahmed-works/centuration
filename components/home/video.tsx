import { useEffect, useState } from "react";
import * as Icons from "@/components/icons";

export default function Video() {
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 1000);
    }
  }, [show]);
  return (
    <div className="relative min-h-screen bg-gray-950 grid place-items-center py-16">
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh]">
        <div
          className="absolute w-full h-full bg-black flex items-center justify-between"
          onPointerEnter={() => setShow(true)}
          onPointerLeave={() => setShow(false)}
          onPointerMove={() => setShow(true)}
        >
          {!play && (
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/154820895?autoplay=0&background=1"
              className="absolute w-full h-full aspect-video"
            ></iframe>
          )}
          {play && (
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/154820895?autoplay=1&background=1"
              className="absolute w-full h-full aspect-video"
            ></iframe>
          )}
          <div className="flex items-center justify-center z-30 absolute inset-0">
            {show && (
              <button
                className="size-20 border border-brand-500 text-brand-500 bg-gray-100 rounded-full flex items-center justify-center"
                onClick={() => setPlay(!play)}
              >
                <span className="size-12">
                  {play ? <Icons.Pause /> : <Icons.Play />}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
