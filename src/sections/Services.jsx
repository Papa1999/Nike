import { services } from "../constants";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  return (
    <section className="flex flex-wrap max-container justify-center gap-9">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  );
}
