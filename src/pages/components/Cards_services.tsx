const Cards_services = ({
  className_1,
  className_2,
  icon_1,
  icon_2,
  title_1,
  title_2,
  content_1,
  content_2
}: {
  className_1: string;
  className_2: string;
  icon_1: string;
  icon_2: string;
  title_1: string;
  title_2: string;
  content_1: string;
  content_2: string;
}) => {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* CARD 1 */}
      <div className={`${className_1} text-center`}>
        <img src={icon_1} alt="icono" className="w-16 sm:w-20 mb-4" />
        <div>
          <h2 className="text-lg sm:text-xl font-bold py-4">{title_1}</h2>
          <p className="text-sm sm:text-base mb-6">{content_1}</p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className={`${className_2} text-center`}>
        <img
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 sm:w-20"
          src={icon_2}
          alt="icono"
        />
        <div>
          <h2 className="text-lg sm:text-xl font-bold py-6 pt-16">{title_2}</h2>
          <p className="text-sm sm:text-base">{content_2}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards_services;
