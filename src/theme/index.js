export const colors = {
    black: '#3D3D3D',
    grey: ['#717070', '#A2A0A0', '#E7F2EE'],
    white: '#fff',
    green: {
        pale: '#EDF1EE',
        grey: '#DDDFDD',
        dark: '#7C827B',
        normal: '#39BF8F'
    }
}

const theme = {
    breakpoints: [32, 48, 64, 80],
    space: [0, 4, 8, 12, 16, 24, 32, 64, 128],
    fonts: {
        sans: 'Open Sans',
        mono: 'Menlo, monospace'
    },
    fontSizes: [10, 12, 14, 16, 20, 24, 32, 38, 48, 64, 72, 96],
    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 900
    },
    colors,
    radii: [0, 2, 4, 8, 16],
    lineHeights: {
        heading: '1.1em'
    },
    shadows: {
        normal: '0px 2px 7px -1px rgba(0, 0, 0, 0.5)',
        light: '0px 2px 7px -1px rgba(0, 0, 0, 0.2)'
    },
    buttons: {
        outline: {
            color: colors.grey[1],
            backgroundColor: 'transparent',
            borderRadius: '6px',
            boxShadow: `inset 0 0 0 1px ${colors.grey[2]}`,
            fontWeight: 400,
            padding: '10px 14px'
        },
        outlineSelected: {
            color: colors.green.normal,
            backgroundColor: 'transparent',
            borderRadius: '6px',
            boxShadow: `inset 0 0 0 1px ${colors.green.normal}`,
            fontWeight: 400,
            padding: '10px 14px'
        },
        transparent: {
            color: colors.grey[1],
            backgroundColor: 'transparent',
            borderRadius: '6px',
            boxShadow: 'none',
            fontWeight: 400,
            padding: 0
        }
    }
}

export default theme
