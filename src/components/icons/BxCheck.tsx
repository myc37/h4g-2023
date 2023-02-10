import React from 'react';
import { chakra } from '@chakra-ui/react';

const BxCheck = chakra((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
    </svg>
  );
});

export default BxCheck;
