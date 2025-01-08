type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
};

export default function InputField({
  label,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 "
      />
    </div>
  );
}
