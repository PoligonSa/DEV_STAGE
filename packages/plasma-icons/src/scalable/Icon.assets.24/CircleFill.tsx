import React from 'react';

import { IconProps } from '../IconRoot';

export const CircleFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
);
