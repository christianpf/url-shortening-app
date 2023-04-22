

export const shortenUrl = async (url: string) => {
  if (url === "") return null;

  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const json = await response.json();
    const shorturl = json.result;
    return {
      originalUrl: shorturl.original_link,
      shortenedUrl:  shorturl.full_short_link,
    };
  } catch (err) {
    throw new Error("Error shortening Url");
  }
};
