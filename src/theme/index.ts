import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: "#1f01b9",
        _dark: "#340bfe",
      },
      secondary: {
        default: "#09a129",
        _dark: "#0de73d",
      },
      tertiary: {
        default: "#8d89a6",
        _dark: "#b0aec2",
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("#333333", "#eaf2ef")(props),
        bg: mode("#eaf2ef", "#333333")(props),
      },
    }),
  },
  shadows: {
    outline: '0 0 0 3px rgba(246, 173, 85, 0.6)',
  },
});

export default theme;
