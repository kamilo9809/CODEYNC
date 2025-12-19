import icon_world from './../../assets/icons/icon_world.svg'
import icon_phone from './../../assets/icons/icon_phone.svg'
import icon_email from './../../assets/icons/icon_email.svg'




const Contact = ({className}:{className:string;}) => {

  const contactOptions = [
    {
        "image":icon_world,
        "text" :"Medellin, Colombia"
    },
    {
        "image":icon_phone,
        "text" :"+57 3023060543"
    },
    {
        "image":icon_email,
        "text" :"info@codeync.co"
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
