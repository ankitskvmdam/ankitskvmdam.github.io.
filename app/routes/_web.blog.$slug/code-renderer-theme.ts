export const lightTheme = {
  plain: {
    color: "#d66a05ff",
  },
  styles: [
    {
      types: ['tag'],
      style: {
        color: '#1d64e8',
      },
    },
    {
      types: ['prolog', 'constant', 'builtin', 'number', 'boolean'],
      style: {
        color: '#1976D2',
      },
    },
    {
      types: ['parameter'],
      style: {
        color: '#334155',
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'selector'],
      style: {
        color: '#22863A',
      },
    },
    {
      types: ['literal-property'],
      style: {
        color: '#1976D2',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#22863A',
      },
    },
    {
      types: ['css-html-elements'],
      style: {
        color: '#2ac3de',
      },
    },
    {
      types: ['module'],
      style: {
        color: '#1976D2',
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: '#6F42C1',
      },
    },
    {
      types: ['keyword', 'attr-name', 'operator'],
      style: {
        color: '#D32F2F',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#1976D2',
      },
    },
    {
      types: ['script', 'spread'],
      style: {
        color: '#334155',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#212121',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#8d94a1',
      },
    },
  ],
};

export const darkTheme = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 153, 85)",
      },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)",
      },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "rgb(206, 145, 120)",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)",
      },
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "rgb(78, 201, 176)",
      },
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)",
      },
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080",
      },
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(78, 201, 176)",
      },
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)",
      },
    },
  ],
}