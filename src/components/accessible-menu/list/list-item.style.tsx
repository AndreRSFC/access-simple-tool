import { styled } from '@stitches/react'

export const ListItemTitle = styled('h3', {
    fontSize: '18px',
    marginBottom: '8px',
    textAlign: 'start',
})

export const ListItem = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
})

export const ListItemTextContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
})

export const ListItemText = styled('span', {
    fontSize: '16px',
    marginLeft: '10px',
})