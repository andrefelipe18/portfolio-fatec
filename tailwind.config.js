module.exports = {
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["forest"],
  },

  //Faz um breakpoint abaixo de 530px
  theme: {
    screens: {
      xs: "530px",
    },
  },
};
