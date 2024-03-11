import icon_ubication from './../../assets/icons/icon_ubication.svg'
import icon_world from './../../assets/icons/icon_world.svg'
import icon_phone from './../../assets/icons/icon_phone.svg'
import icon_email from './../../assets/icons/icon_email.svg'




const Contact = ({className}:{className:string;}) => {

  const contactOptions = [
    {
        "image":icon_ubication,
        "text" :"Cra 39 a calle 39c 04 interior 109"
    },
    {
        "image":icon_world,
        "text" :"Medellin, Colombia"
    },
    {
        "image":icon_phone,
        "text" :"+57 323 8554708"
    },
    {
        "image":icon_email,
        "text" :"codeync.booking@gmail.com"
    }
]


  return (
    <div className={className}>
      {contactOptions.map((options, index) => (
        <div key={index} className="flex gap-4">
          <img className='w-5' src={`${options.image}`} alt="image icon" />
          <p>{options.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
