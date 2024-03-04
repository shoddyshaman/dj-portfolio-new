import React from 'react';
import Image from 'next/image';

function MdxImage(props) {
  return <Image {...props} alt={props.alt} />;
}

export {MdxImage};