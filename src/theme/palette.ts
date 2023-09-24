import type { PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: PaletteColor;
        quaternary: PaletteColor;
        subtitle: PaletteColor;
        surface: PaletteColor;
        cardBackground: PaletteColor;
        form: PaletteColor;
        faint: PaletteColor;
        transparent: PaletteColor;
        linkHover: PaletteColor;
        white: PaletteColor;
    }
    interface PaletteOptions {
        tertiary?: PaletteColorOptions;
        quaternary?: PaletteColorOptions;
        subtitle?: PaletteColorOptions;
        surface?: PaletteColorOptions;
        cardBackground: PaletteColorOptions;
        form: PaletteColor;
        faint?: PaletteColorOptions;
        transparent?: PaletteColorOptions;
        linkHover?: PaletteColorOptions;
        white?: PaletteColorOptions;
    }
}

export const palette = {
    primary: {
        main: '#4A4A4A',
        dark: '#0C0E0F',
    },
    secondary: {
        main: '#294DFA',
        dark: '#F5F5F5',
    },
    tertiary: {
        main: '#0B1519',
    },
    quaternary: {
        main: '#101D37',
        dark: '#294DFA',
    },
    subtitle: {
        light: '#0B1519',
    },
    surface: {
        main: '#12192E',
    },
    cardBackground: {
        main: '#EEF1F8',
    },
    form: {
        light: '#F6F8FF',
        main: '#BBBBBB',
        dark: '#DDDDDD',
    },
    faint: {
        main: '#8B95B2',
    },
    transparent: {
        main: 'rgba(0,0,0,0)',
    },
    border: {
        main: '#2f3b5c',
    },
    footer: {
        main: '#1D284A',
    },
    footerText: {
        main: '#636C8B',
    },
    linkHover: {
        main: '#CED5DE',
        dark: '#C3CAD3',
    },
    white: {
        light: '#FFFFFF80',
        main: '#FFFFFF',
    },
};
