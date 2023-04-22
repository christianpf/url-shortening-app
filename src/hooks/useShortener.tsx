import React, { useEffect, useRef, useState } from 'react'
import { shortenUrl } from "@/services/shortenUrl.js";
import { ShortenedUrl } from '@/types/types';
 

function useShortener(url: string) {

  const [listOfUrl, setListOfUrl] = useState<(ShortenedUrl | null)[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let storageValue = localStorage.getItem('generatedUrls')
    if(storageValue !== null){
      setListOfUrl(JSON.parse(storageValue))
    }
  }, [])

  const previousUrl = useRef(url);

  const shortUrl = async(url: string) => {
    if(url === previousUrl.current) return;

    try {
      setError(null);
      previousUrl.current = url;
      const shorterUrl = await shortenUrl(url);
      const newListOfUrl: (ShortenedUrl | null)[] = [shorterUrl, ...listOfUrl];
      setListOfUrl(newListOfUrl);
      localStorage.setItem('generatedUrls', JSON.stringify(newListOfUrl));
    }catch(err: any) {
      setError(err.message);
    }
  }
  
  return [listOfUrl, shortUrl] as const;
}

export default useShortener