import { ReactEventHandler, useState } from "react";

type TImgStatus = "loading" | "ready" | "hidden";

type TReturn = [
  imgStatus: TImgStatus,
  onLoad: ReactEventHandler<HTMLImageElement>,
  onError: ReactEventHandler<HTMLImageElement>
];

export default function useImg(): TReturn {
  const [imgStatus, setImgStatus] = useState<TImgStatus>("loading");

  function onLoad() {
    setImgStatus("ready");
  }

  function onError(event) {
    setImgStatus("hidden");
    console.log(
      `%cImage error: %c${event.target.src.split("/").pop()}`,
      "color: red",
      ""
    );
  }

  return [imgStatus, onLoad, onError];
}
