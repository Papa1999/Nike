export default function Button({ label, iconURL }) {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none bg-coral-red rounded-full border-coral-red text-white">
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
