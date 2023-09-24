import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    fallback: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto Flex',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
    ],
    display: 'swap',
});

declare module '@mui/material/styles' {
    interface TypographyVariants {
        header: React.CSSProperties;
        footerHeading: React.CSSProperties;
        footerText: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        header: React.CSSProperties;
        footerHeading?: React.CSSProperties;
        footerText?: React.CSSProperties;
    }
}

export const typography = {
    fontFamily: 'inherit',
    secondaryFontFamily: inter.style.fontFamily,

    h1: {
        fontSize: '5rem',
        fontWeight: 700,
    },

    h2: {
        fontSize: '4rem',
        fontWeight: 700,
    },

    h3: {
        fontSize: '3.5rem',
        fontWeight: 700,
    },

    h4: {
        fontSize: '3rem',
        fontWeight: 700,
    },

    h5: {
        fontSize: '2rem',
        fontWeight: 700,
    },

    h6: {
        fontSize: '1.5rem',
        fontWeight: 700,
    },

    header: {
        fontSize: '1.25rem',
        fontWeight: 700,
    },

    footerHeading: {
        fontFamily: inter.style.fontFamily,
        fontSize: '1rem',
        fontWeight: 700,
    },

    footerText: {
        fontFamily: inter.style.fontFamily,
        fontSize: '1rem',
        fontWeight: 400,
    },
};
