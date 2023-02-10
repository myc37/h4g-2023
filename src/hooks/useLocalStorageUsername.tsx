import { Box, CreateToastFnReturn } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

/**
 * Help to sync likes in local storage
 */
export const useLocalStorageUsername = (toast: CreateToastFnReturn) => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setUsername(username);
  }, []);

  const updateUsername = (username: string) => {
    setUsername(username);
    localStorage.setItem('username', username);
  };

  return { username, updateUsername };
};
