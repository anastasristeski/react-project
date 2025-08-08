export default function InputField({ labelText, placeHolderText, isEmail , name}) {
  return (
    <div className="input-field">
      <label className="input-label">{labelText}</label>
      <input
        className="input-field"
        type={isEmail ? "email" : "text"}
        name={name}
        placeholder={placeHolderText}
      />
    </div>
  );
}
