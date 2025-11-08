const Card_work = ({
  image,
  title,
  type,
  work,
  href,
  stylebg,
}: {
  image: string;
  title: string;
  type: string;
  work: string;
  href: string;
  stylebg: string;
}) => {
  return (
    <div className="bg-[#58585869] rounded-3xl flex justify-center items-center">
      <div
        className={"w-full h-[500px]"}
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 360px",
          backgroundPosition: "center",
          opacity: "50px",
        }}
      >
        <a
          className={`w-full h-full relative z-20 ${stylebg}`}
          href={href}
          target="_blank"
        >
          <div className="uppercase w-full h-full flex flex-col justify-between items-center py-5 px-8 ">
            <h3>{title}</h3>
            <div className="flex">
              <p>{type}</p>
              <p>|</p>
              <p>{work}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card_work;
