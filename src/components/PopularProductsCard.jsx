import { star } from "../assets/icons";

export default function PopularProductsCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex gap-2.5 mt-8">
        <img src={star} alt="rating" className="w-[24px] h-[24px]" />
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          ( 4.5 )
        </p>
      </div>
      <h3 className="font-palanquin leading-normal font-bold text-2xl mt-2">{name}</h3>
      <p className="font-montserrat leading-normal text-coral-red font-semibold mt-2">{price}</p>
    </div>
  );
}
