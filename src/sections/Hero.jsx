import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
// import ShoeCard from "../components/ShoeCard";

export default function Hero() {
  return (
    <section
      id="Home"
      className="w-full p-2 flex xl:flex-row flex-col min-h-screen justify-center gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82] font-bold capitalize">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The new arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          &nbsp;Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start w-full flex-wrap gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map((shoe) => (
            <div>
              {/* <ShoeCard
                imgURL={shoe}
                bigShoeImg={bigShoe1}
                changeBigShoeImg={() => {}}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
