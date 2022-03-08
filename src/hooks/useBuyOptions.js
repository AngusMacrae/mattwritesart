import { useState } from "react";
import { useRouter } from "next/router";

export default function useBuyOptions(defaultBuyOption) {
  const { query } = useRouter();

  const selectedBuyOption = query.buyOption || defaultBuyOption;
  const [buyOption, setBuyOption] = useState(selectedBuyOption);

  function handleBuyOptionChange(event) {
    setBuyOption(event.target.value);
  }

  return [buyOption, handleBuyOptionChange];
}
