import Map from "../ui/Map";
import ContactForm from "./contactForm";

const Contact = () => {
    return(
        <section id="contact" className="section pt-24 sm:pt-16 lg:pt-0">
            <div className="w-full h-full flex flex-col md:flex-row justify-between md:gap-12">
                <div className="flex lg:flex-1 justify-center lg:justify-end lg:items-center">
                    <ContactForm />
                </div>
                <div className="hidden lg:flex flex-1 justify-center items-center">
                    <Map />
                </div>
            </div>
        </section>
    )
}

export default Contact;