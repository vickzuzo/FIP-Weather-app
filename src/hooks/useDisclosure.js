import React from "react";

export const useDisclosure = () => {
  const [state, setState] = React.useState(false);

  const isOpen = state === true;

  const onOpen = () => setState(true);

  const onClose = () => setState(false);

  return {
    isOpen,
    onClose,
    onOpen,
  };
};
