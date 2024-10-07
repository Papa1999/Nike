import { star } from "../assets/icons";

export default function ReviewCard({ imgURL, rating, feedback, customerName }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-center font-bold text-3xl font-palanquin">{customerName}</h3>
    </div>
  );
}
