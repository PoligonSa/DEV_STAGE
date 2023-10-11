import React, { FC, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { DEFAULT_Z_INDEX } from '../PopupBase/PopupBaseRoot';
import { usePopupBaseContext } from '../PopupBase';

import { getIdFirstModal, getIdLastModal } from './ModalBaseContext';
import { ModalOverlayProps } from './types';

// TODO: новый отдельный оверлей #778
export const Overlay = styled.div<{
    transparent?: boolean;
    endAnimation?: boolean;
    $withBlur?: boolean;
    clickable?: boolean;
    zIndex?: string;
}>`
    position: fixed;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    ${({ zIndex }) => css`
        z-index: ${zIndex || DEFAULT_Z_INDEX};
    `}

    ${({ $withBlur }) => {
        return css`
            --background-color: ${$withBlur
                ? 'var(--plasma-modal-blur-overlay-color)'
                : 'var(--plasma-modal-overlay-color)'};
            --backdrop-filter: ${$withBlur ? 'blur(1rem)' : 'none'};
        `;
    }};

    background-color: ${({ transparent }) => (transparent ? 'transparent' : 'var(--background-color)')};
    backdrop-filter: var(--backdrop-filter);
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;

/**
 * ModalOverlay - подложка для ModalBase.
 */
export const ModalOverlay: FC<ModalOverlayProps> = ({
    id,
    withBlur,
    onOverlayClick,
    onClose,
    animationInfo,
    zIndex,
    closeOnOverlayClick = true,
    ...rest
}) => {
    const popupController = usePopupBaseContext();

    const onModalOverlayKeyDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (!closeOnOverlayClick) {
                return;
            }

            if (onOverlayClick) {
                onOverlayClick(event);
                return;
            }

            if (onClose) {
                onClose();
            }
        },
        [closeOnOverlayClick, onOverlayClick, onClose],
    );

    return (
        <Overlay
            className="modal-base-overlay"
            transparent={getIdLastModal(popupController.items) !== id}
            clickable={closeOnOverlayClick}
            endAnimation={getIdFirstModal(popupController.items) === id && animationInfo?.endAnimation}
            onClick={onModalOverlayKeyDown}
            zIndex={zIndex}
            $withBlur={withBlur}
            {...rest}
        />
    );
};
