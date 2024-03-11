import { useState } from 'react';
import data from "./../../utilities/json/ButtonActive.json";

const ButtonActive = ({ className }: { className: string }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleButtonClick = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((idx) => idx !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };
  

  return (
    <div className={className}>
      {data.map((content, id) => (
        <button
          key={id}
          className={`border rounded-3xl px-5 py-2 ${activeIndices.includes(id) ? 'bg-gradient-to-b from-[#C293FF] to-[#755899]' : ''}`}
          onClick={() => handleButtonClick(id)}
        >
          {content.data}
        </button>
      ))}
    </div>
  );
};

export default ButtonActive;
