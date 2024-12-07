interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}

export function Input({ type, placeholder, label }: InputProps) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className="block mt-2 font-light mb-5 bg-slate-50 border-gray-100 rounded-md w-full mx-auto focus:ring-2 focus:ring-black focus:border-transparent focus:outline-transparent"
        placeholder={placeholder}
        type={type}
      />
    </>
  );
}

interface TextAreaProps {
  placeholder: string;
  label: string;
}

export function TextArea({ placeholder, label }: TextAreaProps) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        rows={9}
        className="block min mt-2 font-light mb-5 bg-slate-50 border-gray-100 rounded-md w-full mx-auto focus:ring-2 focus:ring-black focus:border-transparent focus:outline-transparent"
        placeholder={placeholder}
      ></textarea>
    </>
  );
}
