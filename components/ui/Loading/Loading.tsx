import React from 'react';
import Image from 'next/image';

const Loading: React.FC = ({ ...props }) => {
  return (
    <div className="h-full flex justify-center items-center" {...props}>
      <Image src="/loading.gif" alt="onDP" width={100} height={100} priority />
    </div>
  );
};

export default Loading;
