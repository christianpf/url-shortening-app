import useMediaQuery from "@/hooks/useMediaQuery";
import useShortener from "@/hooks/useShortener";
import useUrlInput from "@/hooks/useUrlInput";
import { ShortenedUrl } from "@/types/types";
import ListOfUrls from "./listOfUrls";
import ShortenButton from "./shortenButton";

type Props = {};

const Shortener = (props: Props) => {
  const [linkInput, setLinkInput, error, setError] = useUrlInput();
  const [listOfUrl, shortUrl] = useShortener("");

  const isDesktopScreen = useMediaQuery("(min-width:768px)");

  const errorStyles = {
    input: "border-red-400 placeholder:text-red-400",
    message: "md:absolute text-red-400 md:pt-1 italic",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.urlInput.value === "") {
      setError("Please add a link");
      return;
    }
    shortUrl(e.target.urlInput.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setLinkInput(e.target.value);
  };

  return (
    <>
      <div className="w-5/6 2xl:w-4/6 mx-auto  bg-shorten-mobile bg-no-repeat bg-right-top md:bg-shorten-desktop bg-violet-700 p-6 md:p-6 lg:p-10 rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 md:gap-8 md:flex-row justify-between w-full mx-auto"
        >
          <input
            className={`flex-1 md:px-7 md:py-1 p-4 rounded-lg outline-none border-2 font-bold placeholder:opacity-50 ${
              error !== "" ? `${errorStyles.input}` : "border-transparent"
            }`}
            onChange={handleChange}
            type="text"
            name="urlInput"
            placeholder="Shorten a link here..."
          />
          {!isDesktopScreen && <p className={errorStyles.message}>{error}</p>}
          <ShortenButton content="Shorten It!" />
        </form>
        {isDesktopScreen && <p className={errorStyles.message}>{error}</p>}
      </div>
      <ListOfUrls list={listOfUrl} />
    </>
  );
};

export default Shortener;
