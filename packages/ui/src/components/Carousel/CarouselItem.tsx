import React from 'react';
import styled, { css, InterpolationFunction } from 'styled-components';
import type { SnapAlign, AsProps } from '@salutejs/plasma-core/types';

import { useCarouselItem } from './Carousel.hooks';

interface ScrollSnapProps {
    scrollSnapAlign?: SnapAlign;
}

export const applyScrollSnap: InterpolationFunction<ScrollSnapProps> = ({ scrollSnapAlign }) =>
    scrollSnapAlign &&
    css`
        scroll-snap-align: ${scrollSnapAlign};
    `;

const StyledCarouselItem = styled.div`
    ${applyScrollSnap};
`;

export interface CarouselItemProps extends ScrollSnapProps, AsProps, React.HTMLAttributes<HTMLDivElement> {}

/**
 * Элемент списка. Используется для каруселей без сетки.
 */
export const CarouselItem: React.FC<CarouselItemProps> = ({ children, ...rest }) => {
    const itemRef = useCarouselItem<HTMLDivElement>();

    return (
        <StyledCarouselItem ref={itemRef} {...rest}>
            {children}
        </StyledCarouselItem>
    );
};
