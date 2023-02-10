import React, { ChangeEvent, FC, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import ImageSlider from '~/components/shared/ImageSlider';
import { Report } from '~/types/reports';
import { useLocalStorageLikes } from '~/hooks/useLocalStorageLikes';
import { commentOnReport, likeReport, unlikeReport } from '~/api/reports';
import BxLike from '~/components/icons/BxLike';
import BxLikeS from '~/components/icons/BxLikeS';
import Comment from './Comment';
import { useLocalStorageUsername } from '~/hooks/useLocalStorageUsername';
import BxSend from '~/components/icons/BxSend';
import BxComment from '~/components/icons/BxComment';

type Props = {
  report: Report;
};

const SingleReport: FC<Props> = ({ report }) => {
  const { details, locationDescription, id, likes, comments } = report;
  const toast = useToast();
  const [localComments, setLocalComments] = useState(comments);
  const [currentComment, setCurrentComment] = useState('');
  const { localLikes, liked, locallyLike, locallyUnlike } = useLocalStorageLikes(id, likes);
  const { username, updateUsername } = useLocalStorageUsername(toast);
  const [isUsernameModalOpen, setIsUsernameModalOpen] = useState(false);
  const [modalUsername, setModalUsername] = useState('');

  const handleClickLike = async () => {
    if (!liked) {
      locallyLike();
      await likeReport(id);
    } else {
      locallyUnlike();
      await unlikeReport(id);
    }
  };

  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentComment(event.target.value);
  };

  const handleComment = async () => {
    if (!username) {
      handleOpenModal();
      return;
    }
    const comment = await commentOnReport(id, { content: currentComment, author: username });
    setLocalComments((localComments) => [...localComments, comment]);
    setCurrentComment('');
  };

  const handleOpenModal = () => setIsUsernameModalOpen(true);

  const handleCloseModal = () => setIsUsernameModalOpen(false);

  const handleModalUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModalUsername(event.target.value);
  };

  const handleSetUsername = () => {
    handleCloseModal();
    updateUsername(modalUsername);
    setModalUsername('');
  };

  return (
    <>
      <Modal isOpen={isUsernameModalOpen} onClose={handleCloseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb="0">What is your username?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textStyle="caption-2" mb="12px">
              This will be the name that others see you by
            </Text>
            <Input
              value={modalUsername}
              onChange={handleModalUsernameChange}
              placeholder="e.g. Friendly neighbourhood reporter"
            />
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              isDisabled={!modalUsername}
              color="primary"
              w={{ base: 'full', md: 'fit-content' }}
              onClick={handleSetUsername}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <ImageSlider imgFullPaths={report.imgFullPaths} maxW="400px" mb="24px" />
        <Box display="flex" flexDir="column" gap="16px">
          <Box>
            <Text textStyle="subhead-1" mb="8px">
              Location description
            </Text>
            <Text textStyle="body-1">{locationDescription}</Text>
          </Box>
          <Box>
            <Text textStyle="subhead-1" mb="8px">
              Details
            </Text>
            <Text noOfLines={4} textStyle="body-1" whiteSpace="pre-wrap" mb="12px">
              {details}
            </Text>
          </Box>
        </Box>
        <Box display="flex" gap="8px" mt="24px">
          <Button
            onClick={handleClickLike}
            size="sm"
            flex="0 0 fit-content"
            leftIcon={liked ? <BxLikeS /> : <BxLike />}
            variant={liked ? 'solid' : 'outline'}
            colorScheme="primary"
          >
            {`${localLikes} like${localLikes !== 1 ? 's' : ''}`}
          </Button>
          <Button size="sm" isDisabled leftIcon={<BxComment />}>{`${localComments.length} comment${
            localComments.length !== 1 ? 's' : ''
          }`}</Button>
        </Box>
        <Box display="flex" flexDir="column" my="16px" gap="12px" p="12px" rounded="md" bg="primary.100">
          {localComments && localComments.length ? (
            localComments.map((comment, idx) => (
              <Comment key={comment.createdAt} comment={comment} isLast={localComments.length - 1 === idx} />
            ))
          ) : (
            <Box>
              <Text textStyle="subhead-2" textAlign="center">
                No comments found. Why not start a discussion to create a solution?
              </Text>
            </Box>
          )}
        </Box>
        <Box display="flex" gap="8px">
          <Input
            value={currentComment}
            onChange={handleCommentChange}
            placeholder="e.g. I can provide a ramp to improve wheelchair access!"
          />
          <IconButton icon={<BxSend />} onClick={handleComment} aria-label="Comment" colorScheme="primary" />
        </Box>
        {username ? (
          <Text textStyle="caption-2" color="gray.800" mt="12px">
            Commenting as{' '}
            <Link color="blue" textDecoration="underline" cursor="pointer" onClick={handleOpenModal}>
              {username}
            </Link>
          </Text>
        ) : null}
      </Box>
    </>
  );
};

export default SingleReport;
