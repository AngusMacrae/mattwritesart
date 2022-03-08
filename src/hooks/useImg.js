import { useState } from "react";

export default function useImg() {
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
