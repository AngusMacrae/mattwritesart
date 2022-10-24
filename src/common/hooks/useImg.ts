import { ReactEventHandler, useState } from "react";

type TReturn = [imgStatus: string, onLoad: ReactEventHandler<HTMLImageElement>, onError: ReactEventHandler<HTMLImageElement>];

export default function useImg(): TReturn {
  const [imgStatus, setImgStatus] = useState("img-loading");

  function onLoad() {
    setImgStatus("img-loaded");
  }

  function onError(event) {
    setImgStatus("img-hide");
    console.log(
      `%cImage error: %c${event.target.src.split("/").pop()}`,
      "color: red",
      ""
    );
  }

  return [imgStatus, onLoad, onError];
}
