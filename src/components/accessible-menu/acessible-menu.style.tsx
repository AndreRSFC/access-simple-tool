import { styled } from '@stitches/react';

export const AcessibleMenuContainer = styled('section', {
    position: 'fixed',
    bottom: '8px',
    right: '8px',
    backgroundColor: '#18191a',
    maxWidth: '447px',
    filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.5))',
    borderRadius: '8px',
    padding: '24px',
    color: '#fff',
    zIndex: '10000',
    minWidth: '300px',
})

export const AcessibleMenuHeader = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',

    '.title': {
        fontSize: '22px'
    },

    '.subtitle': {
        fontSize: '18px',
        marginBottom: '8px',
        textAlign: 'start',
    }
})



export const AcessibleMenuButtonOpen = styled('button', {
    backgroundColor: '#18191a',
    border: '0',
    color: '#fff',
    display: 'flex',
    width: '100%',
    fontSize: '32px',
    maxHeight: '50px',
    alignItems: 'center',
    cursor: 'pointer',

    'svg': {
        width: '44px',
        marginRight: '10px',
    }
})

export const AcessibleMenuButtonClose = styled('button', {
    border: '0',
    backgroundColor: 'transparent',
    cursor: 'pointer',
})