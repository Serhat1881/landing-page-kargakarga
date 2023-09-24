/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Location: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M61.09 60.2349L60.28 54.9449L59.515 49.9449L56.15 27.9449C56.1226 27.7682 56.033 27.6072 55.8973 27.4907C55.7616 27.3743 55.5888 27.3102 55.41 27.3099H41.61C43.785 23.9099 45.5 20.0799 45.5 16.3899C45.5 12.8095 44.0777 9.37569 41.5459 6.84395C39.0142 4.31221 35.5804 2.88989 32 2.88989C28.4196 2.88989 24.9858 4.31221 22.4541 6.84395C19.9223 9.37569 18.5 12.8095 18.5 16.3899C18.5 20.0799 20.205 23.8899 22.38 27.2949H8.59C8.41121 27.2952 8.2384 27.3593 8.10272 27.4757C7.96704 27.5922 7.87741 27.7532 7.85 27.9299L4.5 49.9249L3.735 54.9249L2.91 60.2349C2.89342 60.3417 2.90014 60.4509 2.92969 60.5549C2.95925 60.6589 3.01094 60.7553 3.08122 60.8375C3.15151 60.9196 3.23873 60.9856 3.3369 61.0309C3.43507 61.0762 3.54188 61.0997 3.65 61.0999H60.35C60.4581 61.0997 60.5649 61.0762 60.6631 61.0309C60.7613 60.9856 60.8485 60.9196 60.9188 60.8375C60.9891 60.7553 61.0408 60.6589 61.0703 60.5549C61.0999 60.4509 61.1066 60.3417 61.09 60.2349ZM5.87 50.7949H12.5C12.6989 50.7949 12.8897 50.7159 13.0303 50.5752C13.171 50.4346 13.25 50.2438 13.25 50.0449V28.7949H16.75V50.0449C16.75 50.2438 16.829 50.4346 16.9697 50.5752C17.1103 50.7159 17.3011 50.7949 17.5 50.7949H46.5C46.6989 50.7949 46.8897 50.7159 47.0303 50.5752C47.171 50.4346 47.25 50.2438 47.25 50.0449V28.7949H50.75V50.0449C50.75 50.2438 50.829 50.4346 50.9697 50.5752C51.1103 50.7159 51.3011 50.7949 51.5 50.7949H58.13L58.665 54.2949H5.335L5.87 50.7949ZM57.9 49.2949H52.25V28.7949H54.75L57.9 49.2949ZM32 4.39989C35.1826 4.39989 38.2348 5.66417 40.4853 7.91461C42.7357 10.165 44 13.2173 44 16.3999C44 24.6249 34.33 34.1149 32 36.2699C29.68 34.1149 20 24.6249 20 16.3999C20 13.2173 21.2643 10.165 23.5147 7.91461C25.7652 5.66417 28.8174 4.39989 32 4.39989ZM31.5 37.8399C31.637 37.9639 31.8152 38.0326 32 38.0326C32.1848 38.0326 32.363 37.9639 32.5 37.8399C35.5146 35.1222 38.2301 32.0899 40.6 28.7949H45.75V49.2949H18.25V28.7949H23.405C25.7734 32.0897 28.4871 35.1219 31.5 37.8399ZM9.235 28.7949H11.735V49.2949H6.1L9.235 28.7949ZM4.525 59.5999L5.105 55.7949H58.895L59.5 59.5999H4.525Z"
                fill="currentColor"
            />
            <path
                d="M38.755 16.0349C38.754 14.6991 38.357 13.3936 37.6141 12.2834C36.8713 11.1732 35.816 10.3082 34.5816 9.79768C33.3472 9.28717 31.9891 9.15411 30.6791 9.41532C29.3691 9.67653 28.1659 10.3203 27.2217 11.2652C26.2775 12.2101 25.6347 13.4137 25.3744 14.7239C25.1142 16.0341 25.2483 17.3921 25.7597 18.6261C26.2711 19.8601 27.1369 20.9148 28.2476 21.6568C29.3584 22.3989 30.6642 22.7949 32 22.7949C33.792 22.7936 35.5101 22.0808 36.7768 20.8132C38.0435 19.5456 38.755 17.8269 38.755 16.0349ZM26.755 16.0349C26.756 14.9954 27.0653 13.9795 27.6438 13.1157C28.2222 12.252 29.0439 11.5792 30.0048 11.1825C30.9657 10.7859 32.0226 10.6831 33.0419 10.8872C34.0613 11.0914 34.9971 11.5933 35.7311 12.3294C36.4652 13.0655 36.9644 14.0028 37.1656 15.0227C37.3668 16.0426 37.261 17.0993 36.8616 18.059C36.4622 19.0188 35.7871 19.8385 34.9217 20.4145C34.0563 20.9905 33.0396 21.2969 32 21.2949C30.6058 21.2936 29.2692 20.7388 28.2839 19.7525C27.2985 18.7662 26.745 17.4291 26.745 16.0349H26.755Z"
                fill="currentColor"
            />
        </SvgIcon>
    );
};