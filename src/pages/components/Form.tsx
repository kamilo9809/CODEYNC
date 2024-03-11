import data from "./../../utilities/json/form.json";


type FormDataType = {
    dato: string;
    value: string;
  };

const Form = ({
  className,
  formData,
  setFormData,
  initialFormData
}: {
  className: string;
  formData: FormDataType[];
  setFormData: React.Dispatch<React.SetStateAction<FormDataType[]>>;
  initialFormData:FormDataType[];
}) => {


  return (
    <div className={className}>
      {data.map((form, index) => (
        <div key={index}>
          <input
            className="bg-transparent border-b-2 border-[#E0D9D9CC] w-full"
            type="text"
            name={form.dato}
            id={form.dato}
            placeholder={form.dato}
            value={formData[index].value}
            onChange={(e)=>{
                const newFormData = [... formData]
                newFormData[index].value = e.target.value
                setFormData(newFormData)
            }}
            
          />
        </div>
      ))}
    </div>
  );
};

export default Form;
