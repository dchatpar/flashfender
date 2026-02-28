"use client";

import { useEffect, useState } from "react";

interface WistiaVideoProps {
  videoId: string;
  className?: string;
}

export function WistiaVideo({ videoId, className = "" }: WistiaVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ((window as unknown as { Wistia: any }).Wistia) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`wistia-wrapper relative w-full overflow-hidden rounded-2xl ${className}`} style={{ paddingTop: "56.25%" }}>
      {isLoaded ? (
        <div className="wistia_embed" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <iframe
            src={`https://fast.wistia.com/embed/iframe/${videoId}?videoFoam=true&autoPlay=false&muted=true&controls=true`}
            allow="autoplay; fullscreen"
            className="w-full h-full border-0"
            title="Wistia video"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="animate-pulse text-slate-400">Loading...</div>
        </div>
      )}
    </div>
  );
}
