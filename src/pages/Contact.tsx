import { Badge } from "../components/common/Badge";
import { Heading } from "../components/common/Heading";
import { ContactForm } from "../components/contact/ContactForm";

export const Contact = () => {
  return (
    <section id="contact" aria-label="contact-section" className="bg-zinc-950 border-t border-dark-borders pt-8">
      {/* heading */}
      <div className="flex justify-center items-center">
        <Badge title="Drop a message and I'll get back to you." />
      </div>
      {/* Heading */}
      <div className="flex justify-center items-center mt-4">
        <Heading title="Contact me" />
      </div>
      {/* contact */}
      <ContactForm />
    </section>
  );
};
