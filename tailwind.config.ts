import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";

type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type FallbackColors = Record<string, ColorShades>;

const baseColors = ["gray", "zinc"];

// Define the shade mapping for light to dark mode
const shadeMapping: Record<string, string> = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const fallbackColors: FallbackColors = {
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
};

const generateLightShades = (color: keyof FallbackColors) => ({
  50: `var(--${color}-50, ${fallbackColors[color]["50"]})`,
  100: `var(--${color}-100, ${fallbackColors[color]["100"]})`,
  200: `var(--${color}-200, ${fallbackColors[color]["200"]})`,
  300: `var(--${color}-300, ${fallbackColors[color]["300"]})`,
  400: `var(--${color}-400, ${fallbackColors[color]["400"]})`,
  500: `var(--${color}-500, ${fallbackColors[color]["500"]})`,
  600: `var(--${color}-600, ${fallbackColors[color]["600"]})`,
  700: `var(--${color}-700, ${fallbackColors[color]["700"]})`,
  800: `var(--${color}-800, ${fallbackColors[color]["800"]})`,
  900: `var(--${color}-900, ${fallbackColors[color]["900"]})`,
});

// Define a function to generate dark mode shades using the shade mapping
const generateDarkShades = (color: keyof FallbackColors) => ({
  50: `var(--${color}-${shadeMapping["50"]}, ${fallbackColors[color]["900"]})`,
  100: `var(--${color}-${shadeMapping["100"]}, ${fallbackColors[color]["800"]})`,
  200: `var(--${color}-${shadeMapping["200"]}, ${fallbackColors[color]["700"]})`,
  300: `var(--${color}-${shadeMapping["300"]}, ${fallbackColors[color]["600"]})`,
  400: `var(--${color}-${shadeMapping["400"]}, ${fallbackColors[color]["500"]})`,
  500: `var(--${color}-${shadeMapping["500"]}, ${fallbackColors[color]["400"]})`,
  600: `var(--${color}-${shadeMapping["600"]}, ${fallbackColors[color]["300"]})`,
  700: `var(--${color}-${shadeMapping["700"]}, ${fallbackColors[color]["200"]})`,
  800: `var(--${color}-${shadeMapping["800"]}, ${fallbackColors[color]["100"]})`,
  900: `var(--${color}-${shadeMapping["900"]}, ${fallbackColors[color]["50"]})`,
});

const lightModeColors = baseColors.reduce(
  (acc: Record<string, any>, color: string) => {
    acc[color] = generateLightShades(color);
    return acc;
  },
  {}
);

const darkModeColors = baseColors.reduce(
  (acc: Record<string, any>, color: string) => {
    acc[color] = generateDarkShades(color);
    return acc;
  },
  {}
);

const config: Config = {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        ...lightModeColors,
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    fluid,
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
