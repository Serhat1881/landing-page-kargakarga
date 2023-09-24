import type { Theme } from '@mui/material';

import theme from '.';

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        header: true;
        footerHeading: true;
        footerText: true;
        white: true;
    }
}

declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        white: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        faint: true;
        white: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}

declare module '@mui/material/InputBase' {
    interface InputBasePropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}
declare module '@mui/material/FormLabel' {
    interface FormLabelPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}

declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}
declare module '@mui/material/FormControl' {
    interface FormControlPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}
declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        subtitle: true;
        surface: true;
        transparent: true;
        white: true;
    }
}

export const components = {
    MuiTypography: {
        variants: [
            {
                props: { color: 'tertiary' },
                style: (props: { theme: Theme }) => ({
                    color: props.theme.palette.tertiary.main,
                }),
            },
            {
                props: { color: 'quaternary' },
                style: (props: { theme: Theme }) => ({
                    color: props.theme.palette.quaternary.main,
                }),
            },
            {
                props: { color: 'subtitle' },
                style: (props: { theme: Theme }) => ({
                    color: props.theme.palette.subtitle.main,
                }),
            },
        ],
        styleOverrides: {
            h1: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
            }),
            h2: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
            }),
            h3: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
            }),
            h4: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
                marginBlock: theme.spacing(3),
            }),
            h5: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
                marginBlock: theme.spacing(2),
            }),
            h6: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
                marginBlock: theme.spacing(2),
            }),
            body1: (props: { theme: Theme }) => ({
                color: props.theme.palette.secondary.main,
            }),
            body2: (props: { theme: Theme }) => ({
                color: props.theme.palette.subtitle.main,
            }),
            header: (props: { theme: Theme }) => ({
                color: props.theme.palette.quaternary.main,
            }),
            footerHeading: (props: { theme: Theme }) => ({
                color: props.theme.palette.white.main,
            }),
            footerText: (props: { theme: Theme }) => ({
                color: props.theme.palette.faint.main,
            }),
        },
    },

    MuiPaper: {
        defaultProps: {
            variant: "outlined",
        },
        styleOverrides: {
            root: {
                borderRadius: 8,
            },
            outlined: (props: { theme: Theme }) => ({
                borderColor: props.theme.palette.surface.dark,
            }),
        },
    },

    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: (props: { theme: Theme }) => ({
                borderRadius: 8,
                padding: '1rem 1.5rem',
                textTransform: 'none',

                '&.Mui-disabled': {
                    backgroundColor: props.theme.palette.white.light,
                },
            }),
            sizeSmall: {
                padding: '0.5rem 1rem',
            },
            contained: {
                borderRadius: 0,
            },
        },
    },

    MuiTextField: {
        styleOverrides: {
            root: (props: { theme: Theme }) => ({
                '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                },

                label: {
                    color: props.theme.palette.form.light,

                    '&.MuiFormLabel-filled:not(.Mui-error)': {
                        color: props.theme.palette.form.dark,

                        '& + .MuiInputBase-root': {
                            fieldset: {
                                borderColor: props.theme.palette.form.main,
                            },

                            '& > .MuiInputBase-input': {
                                color: props.theme.palette.form.dark,
                            },
                        },
                    },
                },

                '&:hover': {
                    label: {
                        color: props.theme.palette.form.dark,
                    },
                },

                '.MuiInputBase-root': {
                    fieldset: {
                        borderColor: props.theme.palette.form.light,
                        transition: 'border-color 0.2s ease-in-out',
                    },

                    '.MuiInputBase-input': {
                        color: props.theme.palette.form.light,
                        transition: 'color 0.2s ease-in-out',
                    },

                    '&:hover': {
                        fieldset: {
                            borderColor: props.theme.palette.form.dark,
                        },

                        '.MuiInputBase-input': {
                            color: props.theme.palette.form.main,
                        },
                    },
                },
            }),
        },
    },

    MuiSelect: {
        styleOverrides: {
            root: (props: { theme: Theme }) => ({
                borderRadius: 0,

                '&:hover': {
                    '& ~ label': {
                        color: props.theme.palette.primary.light,
                    },

                    'fieldset.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        borderColor: props.theme.palette.form.main,
                    },

                    '.MuiInputBase-input': {
                        color: props.theme.palette.form.main,
                    },
                },

                fieldset: {
                    borderColor: props.theme.palette.form.light,
                    transition: 'border-color 0.2s ease-in-out',
                },

                '.MuiInputBase-input': {
                    color: props.theme.palette.form.light,
                    transition: 'color 0.2s ease-in-out',
                },
            }),
        },
    },

    MuiFormLabel: {
        styleOverrides: {
            root: (props: { theme: Theme }) => ({
                color: props.theme.palette.form.light,

                '&.Mui-focused': {
                    color: props.theme.palette.form.dark,
                },

                '&.MuiFormLabel-filled:not(.Mui-error)': {
                    color: props.theme.palette.form.main,

                    '& + .MuiInputBase-root': {
                        fieldset: {
                            borderColor: props.theme.palette.form.main,
                        },

                        '& > .MuiInputBase-input': {
                            color: props.theme.palette.form.main,
                        },
                    },
                },
            }),
        },
    },

    MuiInputLabel: {
        styleOverrides: {
            root: (props: { theme: Theme }) => ({
                fontSize: '0.875rem',
                color: props.theme.palette.form.light,
            }),
        },
    },

    MuiMenuItem: {
        styleOverrides: {
            root: (props: { theme: Theme }) => ({
                '&.Mui-selected': {
                    backgroundColor: props.theme.palette.linkHover.main,

                    '&:hover': {
                        backgroundColor: props.theme.palette.linkHover.dark,
                    },
                },
            }),
        },
    },
};
