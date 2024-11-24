import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const brandColor = {
  50: "#1A1A1A", // 薄い黒
  100: "#141414", // やや薄い黒
  200: "#101010", // ミディアムブラック
  300: "#0D0D0D", // 濃いブラック
  400: "#0A0A0A", // より濃いブラック
  500: "#080808", // 基本ブラック
  600: "#060606", // 深いブラック
  700: "#040404", // ほぼ完全な黒
  800: "#030303", // 非常に濃い黒
  900: "#020202", // 極濃ブラック
  950: "#010101", // 限界の黒
};

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.tsx",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // Add the ui package
  ],
  theme: {
    extend: {
      fontSize: {
        "3xs": "0.6875rem", //11px
        "2xs": "0.75rem", //12px
        xs: "0.8125rem", //13px
        sm: "0.875rem", //14px
        base: "0.9375rem", //15px
        lg: "1rem", // 16px
        xl: "1.125rem", // 18px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 24px
        "4xl": "1.875rem", // 30px
        "5xl": "2.25rem", // 36px
        "6xl": "3rem", //48px
        "7xl": "3.75rem", //60px
        "8xl": "4.5rem", //72px
        "9xl": "6rem", //96px
      },
      fontFamily: {
        sans: [
          '--apple-system, BlinkMacSystemFont, Hiragino Sans, Hiragino kaku Gothic ProN, "メイリオ", Meiryo, sans-serif',
        ],
      },
      colors: {
        // brand colors
        brand: { ...brandColor },
        // Semantaic colors
        // Primary
        primary: {
          DEFAULT: brandColor[500],
          continer: {
            DEFAULT: brandColor[50],
            on: brandColor[700],
          },
          inverse: brandColor[300],
        },
        // Surface and Background
        surface: {
          bright: colors.white,
          DEFAULT: colors.zinc[100],
          dim: colors.zinc[200],
          inverse: colors.zinc[700],
          disabled: colors.black,
        },
        background: colors.white,
        // Text and Icons
        text: {
          high: colors.black,
          medium: colors.black,
          disabled: colors.black,
          inverse: {
            high: colors.white,
            medium: colors.white,
            disabled: colors.white,
          },
        },
        icon: {
          active: colors.black,
          inactive: colors.black,
          disabled: colors.black,
          inverse: {
            high: colors.white,
            medium: colors.white,
            disabled: colors.white,
          },
        },
        state: {
          info: {
            DEFAULT: colors.sky[600],
            container: colors.sky[50],
          },
          success: {
            DEFAULT: colors.green[600],
            container: colors.green[50],
          },
          warning: {
            DEFAULT: colors.amber[600],
            container: colors.amber[50],
          },
          error: {
            DEFAULT: colors.rose[700],
            container: colors.rose[50],
          },
        },
        divider: {
          "focus-ring": colors.blue[600],
          DEFAULT: colors.black,
        },
      },
      opacity: {
        // Surface and Background
        scrim: "0.3",
        divider: "0.12",
        // Text and Icons
        "text-high": "0.87",
        "text-medium": "0.6",
        "text-disabled": "0.38",
        "icon-active": "0.87",
        "icon-inactive": "0.6",
        "icon-disabled": "0.38",
        "inverse-text-active": "1",
        "inverse-text-inactive": "0.7",
        "inverse-text-disabled": "0.5",
        "inverse-icon-active": "1",
        "inverse-icon-inactive": "0.7",
        "inverse-icon-disabled": "0.5",
        "surface-disabled": "0.08",
      },
      lineHeight: {
        120: "1.2",
        130: "1.3",
        150: "1.5",
        170: "1.7",
      },
      boxShadow: {
        "elevation-4": "0px 2px 4px 0px rgba(0, 0, 0, 0.24);",
        "elevation-1dp":
          "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 0px 2px 0px rgba(0, 0, 0, 0.07)",
        "elevation-2dp":
          "0px 1px 5px 0px rgba(0, 0, 0, 0.10), 0px 3px 4px 0px rgba(0, 0, 0, 0.06), 0px 0px 4px 0px rgba(0, 0, 0, 0.07)",
        "elevation-3dp":
          "0px 1px 8px 0px rgba(0, 0, 0, 0.10), 0px 3px 4px 0px rgba(0, 0, 0, 0.06), 0px 3px 3px 0px rgba(0, 0, 0, 0.07)",
        "elevation-4dp":
          "0px 1px 10px 0px rgba(0, 0, 0, 0.10), 0px 4px 5px 0px rgba(0, 0, 0, 0.06), 0px 2px 4px 0px rgba(0, 0, 0, 0.07)",
      },
      animation: {
        "scroll-in-with-height":
          "scroll-in-with-height 0.25s ease-out" /* Ark UIのスライドアニメーションに使うアニメーション */,
        "scroll-out-with-height":
          "scroll-out-with-height 0.2s ease-out" /* Ark UIのスライドアニメーションに使うアニメーション */,
        "scroll-in":
          "scroll-in 0.25s ease-out" /* <HeaderMenu />に使うアニメーション */,
        "scroll-out":
          "scroll-out 0.2s ease-in" /* <HeaderMenu />に使うアニメーション */,
        "slide-in":
          "slide-in 0.3s ease-in-out" /* <SPNavigation />に使うアニメーション */,
        "slide-out":
          "slide-out 0.3s ease-in-out" /* <SPNavigation />に使うアニメーション */,
      },
      keyframes: {
        "scroll-in": {
          from: {
            "clip-path": "inset(0 0 100% 0)",
          },
          to: {
            "clip-path": "inset(0)",
          },
        },
        "scroll-out": {
          from: {
            "clip-path": "inset(0)",
          },
          to: {
            "clip-path": "inset(0 0 100% 0)",
          },
        },

        "scroll-in-with-height": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--height)",
          },
        },
        "scroll-out-with-height": {
          from: {
            height: "var(--height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
} satisfies Config;
