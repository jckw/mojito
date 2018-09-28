export const colors = {
    black: '#2B2B2B',
    grey: ['#717070', '#A2A0A0', '#E7F2EE', '#5A5A5A', '#ADABAB'],
    white: '#fff',
    green: {
        pale: '#69D4AE',
        grey: '#a2bbb2',
        dark: '#7C827B',
        normal: '#39BF8F'
    },
    teal: '#2a7f8e'
}

const theme = {
    breakpoints: ['600px', '900px', '1200px', '1800px'],
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
        heavy: 800,
        black: 900
    },
    colors,
    radii: [0, 2, 4, 8, 12, 16],
    lineHeights: {
        heading: '1.1em'
    },
    shadows: {
        normal: '0px 2px 7px -1px rgba(0, 0, 0, 0.5)',
        light: '0px 2px 7px -1px rgba(0, 0, 0, 0.2)'
    },
    buttons: {
        plainUnselected: {
            color: colors.grey[4],
            borderRadius: '99px',
            padding: '8px 16px',
            fontWeight: 600,
            textTransform: 'uppercase',
            backgroundColor: 'white',
            fontSize: '12px'
        },
        plainSelected: {
            color: colors.green.normal,
            borderRadius: '99px',
            padding: '8px 16px',
            fontWeight: 600,
            textTransform: 'uppercase',
            backgroundColor: 'white',
            fontSize: '12px'
        },
        outline: {
            color: colors.green.grey,
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
        outlineLarge: {
            color: colors.green.normal,
            backgroundColor: 'transparent',
            borderRadius: '6px',
            boxShadow: `inset 0 0 0 1px ${colors.green.normal}`,
            fontWeight: 500,
            padding: '14px 18px',
            letterSpacing: '-0.02em'
        },
        transparent: {
            color: colors.grey[1],
            backgroundColor: 'transparent',
            borderRadius: '6px',
            boxShadow: 'none',
            fontWeight: 400,
            padding: 0
        },
        roundedFilled: {
            backgroundColor: '#39bf8f',
            borderRadius: '99px'
        }
    }
}

export default theme
