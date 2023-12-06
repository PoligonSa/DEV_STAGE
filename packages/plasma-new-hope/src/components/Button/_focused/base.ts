import { css } from '@linaria/core';

import { classes, tokens } from '../tokens';

// TODO: focus-visible #711

export const base = css`
    .${String(classes.buttonRoot)} {
        :focus {
            outline: none;
        }

        ::before {
            content: '';
            position: absolute;
            display: block;
            box-sizing: content-box;
            pointer-events: none;

            inset: calc(-1 * var(--plasma_private-btn-outline-size));
            border: var(--plasma_private-btn-outline-size) solid transparent;
            border-radius: var(--plasma_private-btn-br);

            /* NOTE: 
                --plasma_private-btn-outline-size is defined in _size 
                --plasma_private-btn-br is defined in Button.styles.ts 
            */

            transition: box-shadow 0.2s ease-in-out 0s;
        }
    }

    .${String(classes.buttonRoot)}:focus-visible::before {
        box-shadow: 0 0 0 var(--plasma_private-btn-outline-size) var(${tokens.buttonFocusColor});
    }
`;
