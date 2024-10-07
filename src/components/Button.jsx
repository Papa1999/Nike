export default function Button({
  label,
  iconURL,
  textColor,
  backgroundColor,
  borderColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border rounded-full ${
        fullWidth && "w-full"
      } text-lg leading-none ${
        backgroundColor
          ? `${textColor} ${borderColor} ${backgroundColor}`
          : "bg-coral-red border-coral-red text-white"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="rounded-full ml-2 h-5 w-5"
        />
      )}
    </button>
  );
}
