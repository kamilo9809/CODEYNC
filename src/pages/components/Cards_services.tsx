import enlace from "./../../assets/icons/enlace.svg";


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
  title_1:string;
  title_2:string;
  content_1:string;
  content_2:string;
}) => {
  return (
    <div className="flex flex-col gap-20">
      <div className={className_1}>
        <img src={icon_1} alt="icono" />
        <div>
          <h2 className="w-full text-center font-bold py-6" >{title_1}</h2>
          <p className="text-center mb-10" >{content_1}</p>
        </div>
        <a href="#">
            <img src={enlace} alt="" />
        </a>
      </div>
      <div className={className_2}>
        <img className="absolute -top-6 left-40" src={icon_2} alt="icono" />
        <div>
          <h2 className="font-bold text-center py-5 pt-20" >{title_2}</h2>
          <p className="text-center">{content_2}</p>
        </div>
        <a href="#">
            <img src={enlace} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Cards_services;
