import React, { type DetailedHTMLProps } from 'react';
import { BASE_URL } from '../../utils/fetchClient';

// eslint-disable-next-line max-len
interface Props extends DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string,
  alt: string,
}

export const Image: React.FC<Props> = ({ src, alt, ...props }) => (
  <img
    src={`${BASE_URL}${src}`}
    alt={alt}
    {...props}
  />
);
// import React, { type DetailedHTMLProps } from 'react';
// import { API_URL } from '../../../api/constants';

// // eslint-disable-next-line max-len
// interface Props extends DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
//   src: string,
// }

// export const Image: React.FC<Props> = ({ src, ...props }) => (
//   <img
//     src={`${API_URL}/${src}`}
//     {...props}
//   />
// );