import { ref, uploadBytes } from 'firebase/storage';
import { useStorage } from '~/lib/firebase';
import { v4 as uuidv4 } from 'uuid';

export const uploadImages = async (files: (File | undefined)[]) => {
  const storage = useStorage();
  const definedFiles = files.filter((file) => file !== undefined) as File[];
  const responses = await Promise.all(
    definedFiles.map((file) => uploadBytes(ref(storage, `images/${file.name}-${uuidv4()}`), file))
  );

  const imgFullPaths = responses.map((response) => response.metadata.fullPath);

  return imgFullPaths;
};
