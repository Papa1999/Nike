import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

export default function SpecialOffers() {
  return (
    <section
      id="about-us"
      className="flex items-center max-xl:flex-col-reverse gap-10 p-2 max-container"
    >
      <div className="flex flex-1 justify-center items-center">
        <img
          src={offer}
          width={773}
          height={687}
          alt="offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-palanquin  capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span>
          &nbsp;Offers
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with unbeateable deals. From premier selections to incredible savings, we offer unparalleled value that set us appart. 
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Navigate a realm of possibillities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional. 
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
}
