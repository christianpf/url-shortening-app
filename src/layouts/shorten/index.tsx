import Shortener from "@/features/shortener";


type Props = {};

const ShortenerSection = (props: Props) => {
  return (
    <section
      className="mt-12 bg-no-repeat bg-gradient-to-r from-gray-100 to-gray-100"
      style={{ backgroundPosition: "0rem 5rem" }}
    >
      <Shortener/>
    </section>
  );
};

export default ShortenerSection;
