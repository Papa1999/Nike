import Button from "../components/Button";
export default function SpecialOffers() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-palanquin  capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span>
          &nbsp;Offers
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="Shop Now" />
        </div>
      </div>
      {/* <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          width={570}
          height={522}
          alt="Shoe8"
          className="object-contain"
        />
      </div> */}
    </section>
  );
}
