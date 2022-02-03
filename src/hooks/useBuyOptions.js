import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useBuyOptions (defaultBuyOption) {
  const locationState = useLocation().state;
  const selectedBuyOption = typeof locationState !== 'undefined' ? locationState.buyOption : defaultBuyOption;
  const [buyOption, setBuyOption] = useState(selectedBuyOption);

  function handleBuyOptionChange(event) {
    setBuyOption(event.target.value);
  }

  return [buyOption, handleBuyOptionChange];
}