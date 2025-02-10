import { useLangaugeStore } from "@/hooks/LanguageStore";
import TextRevealOnView from "./TextRevealOnView";
import { ContactTranslations } from "@/constants";

const ContactInfo = () => {

    const {langauge} = useLangaugeStore()
    
  return (
    <div className="space-y-10 w-full">
      <div>
        <TextRevealOnView text={ContactTranslations.contactTitle[0][langauge]} fontSize="text-6xl lg:text-8xl" />
        <TextRevealOnView text={ContactTranslations.contactTitle[1][langauge]} fontSize="text-6xl lg:text-8xl" />
      </div>
      <div className="flex flex-col gap-4">
        <a href="tel:+33000000000" className=" hover:font-normal w-fit transition-all duration-300 text-lg font-light">
          +33 (0) 00 00 00
        </a>
        <a
          href="mailto:contact@betharchitecture.com"
          className=" hover:font-normal w-fit transition-all duration-300 text-lg font-light"
        >
          contact@betharchitecture.com
        </a>
        <a
          href="https://maps.google.com/?q=68+rue+Paris+France"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:font-normal w-fit transition-all duration-300 text-lg font-light"
        >
          68, rue ____ ____ - 0000 Paris - France
        </a>
        <a
          href="https://maps.google.com/?q=68+rue+Rabat+Maroc"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:font-normal w-fit transition-all duration-300 text-lg font-light"
        >
          68, rue ____ ____ - 0000 Rabat - Maroc
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
