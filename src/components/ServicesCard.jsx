export default function ServicesCard({ imgURL, subtext, label }) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className="bg-coral-red h-11 w-11 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} />
      </div>

      <h3 className="text-3xl font-bold mt-5 leading-normal font-palanquin">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-slate-gray text-lg break-words leading-normal">
        {subtext}
      </p>
    </div>
  );
}
