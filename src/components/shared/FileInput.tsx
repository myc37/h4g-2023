import { Box, Button, Input, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import BxPlus from '../icons/BxPlus';
import BxX from '../icons/BxX';

type Props = { setFile: (file: File | undefined) => void };

const FileInput: FC<Props> = ({ setFile }) => {
  const [filePreview, setFilePreview] = useState('');
  const [fileName, setFileName] = useState('');
  return (
    <Box>
      {filePreview ? (
        <Box display="flex" height="100px" bg="primary.50" p="8px" gap="16px">
          <img src={filePreview} alt={filePreview} key={filePreview} />
          <Text alignSelf="center">{fileName}</Text>
          <BxX
            cursor="pointer"
            _hover={{ color: 'red.500' }}
            alignSelf="center"
            fontSize="x-large"
            onClick={() => {
              setFile(undefined);
              setFilePreview('');
              setFileName('');
            }}
          />
        </Box>
      ) : (
        <Button as="label" cursor="pointer" leftIcon={<BxPlus />} variant="outline" colorScheme="primary">
          <Input
            hidden
            type="file"
            name="image upload"
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : undefined;
              if (file) {
                setFile(file);
                setFilePreview(URL.createObjectURL(file));
                setFileName(file.name);
              }
            }}
            accept="image/*"
          />
          Add Image
        </Button>
      )}
    </Box>
  );
};
export default FileInput;
