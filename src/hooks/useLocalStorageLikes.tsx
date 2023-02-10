import { useEffect, useState } from 'react';

/**
 * Help to sync likes in local storage
 */
export const useLocalStorageLikes = (id: string, likes: number) => {
  const [localLikes, setLocalLikes] = useState(likes);
  const [localStorageLikes, setLocalStorageLikes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('likes') ?? '{}');
    setLocalStorageLikes(likes);
  }, []);

  const locallyLike = () => {
    const newLocalStorageLikes = { ...localStorageLikes, [id]: true };
    setLocalStorageLikes(newLocalStorageLikes);
    localStorage.setItem('likes', JSON.stringify(newLocalStorageLikes));
    setLocalLikes(localLikes + 1);
  };

  const locallyUnlike = () => {
    const newLocalStorageLikes = { ...localStorageLikes, [id]: false };
    setLocalStorageLikes(newLocalStorageLikes);
    localStorage.setItem('likes', JSON.stringify(newLocalStorageLikes));
    setLocalLikes(localLikes - 1);
  };

  const liked = localStorageLikes[id];

  return { localLikes, liked, locallyLike, locallyUnlike };
};
