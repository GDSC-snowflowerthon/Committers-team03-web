import {useState} from 'react';

const useRankingModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {isOpen, openModal, closeModal};
};

export default useRankingModal;
