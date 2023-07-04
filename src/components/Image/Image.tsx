import React, { type DetailedHTMLProps } from 'react';
// import image from '../../images/img_wine.png';

// eslint-disable-next-line max-len
interface Props extends DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string,
  alt: string,
}

export const Image: React.FC<Props> = ({ src, alt, ...props }) => (
  <img
    src={src}
    alt={alt}
    {...props}
  />
);
