import { styled } from "@stitches/react";

export const Switch = styled('label', {
    cursor: 'pointer',
    width: '100px',
    height: '22px',
    background: '#fff',
    position: 'relative',
    transition: 'background-color 0.2s',
    borderRadius: '16px',
    color: '#000',
    fontSize: '12px',

    '&:checked + .react-switch-button':{
        left: 'calc(100% - 2px)',
        transform: 'translateX(-100%)',
    },

    '&:active + .react-switch-button':{
        width: '60px'
    }
})

export const SwitchCheckbox = styled('input', {
    height: '0',
    width: '0',
    position: 'absolute',
    visibility: 'hidden',
})

export const SwitchButton = styled('div', {
    position: 'absolute',
    zIndex: '1',
    top: '2px',
    left: '2px',
    width: '45px',
    height: '18px',
    transition: '0.2s',
    background: '#000',
    boxShadow: '0 0 2px 0 rgba(10, 10, 10, 0.29)',
    borderRadius: '16px',
})

export const SwitchLabels = styled('div', {
    display: 'relative',
    zIndex: '0',
    height: '100%',
    font: '14pt "Segoe UI", Verdana, sans-serif',

    'span': {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        fontSize: '14px',
    },

    'span:first-child': {
        left: '0',
    },

    'span:last-child': {
        right: '0',
    }
})