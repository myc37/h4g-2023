import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useStorage } from '~/lib/firebase';

export const useImages = (imgFullPaths: string[]) => {
  const storage = useStorage();
  const [downloadUrls, setDownloadUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchDownloadUrls = async () => {
      const downloadUrls = await Promise.all(imgFullPaths.map((path) => getDownloadURL(ref(storage, path))));
      setDownloadUrls(downloadUrls);
    };
    fetchDownloadUrls();
  }, [imgFullPaths]);

  return { downloadUrls };
};
