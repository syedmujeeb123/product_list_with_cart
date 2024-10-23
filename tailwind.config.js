module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backdropBlur: {
        extreme: "100px", // You can adjust this value for more blur
      },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
      },
      fontFamily: {
        "red-hat": ['"Red Hat Text"', "sans-serif"],
      },
      fontSize: {
        product: "16px", // Custom font size for product names
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
        // You can also add other breakpoints if needed
        sm: "640px", // sm: 640px
        md: "768px", // md: 768px
        lg: "1024px", // lg: 1024px
        xl: "1280px", // xl: 1280px
        "2xl": "1536px", // 2xl: 1536px
      },
    },
  },
  plugins: [],
};
