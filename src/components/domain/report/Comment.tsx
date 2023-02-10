import { Box, Divider, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Comment as CommentType } from '~/types/reports';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

type Props = { comment: CommentType; isLast: boolean };

const Comment: FC<Props> = ({ comment, isLast }) => {
  const { content, author, createdAt } = comment;
  const timeDiff = timeAgo.format(createdAt);

  return (
    <>
      <Box>
        <Box display="flex" gap="8px" alignItems="baseline" mb="4px">
          <Text textStyle="subhead-1">{author}</Text>
          <Text textStyle="caption-2" color="gray.700">
            {timeDiff}
          </Text>
        </Box>

        <Text textStyle="body-2">{content}</Text>
      </Box>
      {isLast ? null : <Divider border="1px" color="primary.200" />}
    </>
  );
};
export default Comment;
