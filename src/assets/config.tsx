const config = {
  fonts: {
    family: [
      'Century Gothic',
      '微軟正黑體',
      'Noto Sans TC',
      'Noto Sans SC',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    weights: {
      bold: 900,
      normal: 500,
    },
    lineHeight: '1.5em',
    letterSpacing: '1px',
    sizes: {
      tag: {
        h1: '4.9rem',
        h2: '2.9rem',
        h3: '2.3rem',
        h4: '1.5rem',
        span: '0.9rem',
        button: '1.4rem',
      },
      root: {
        large: '18px',
        medium: '16px',
        small: '10px',
      },
    },
  },
  colors: {
    main: ['#F6F61A', '#F3B206'], // yello
    item: [
      ['#5BB1F6', '#207BED'], // bule
      ['#FD0001', '#AF0000'], // red
      ['#9670C5', '#583198'], // violet
      ['#84C43D', '#44970F'], // green
      ['#FBA604', '#FEE216'], // orange
    ],
    dark: '#000',
    light: '#fff',
  },
  borderRadius: {
    large: '100%',
    medium: '15px',
    small: '12px',
  },
  screenSize: {
    tablet: '900px',
    mobile: '420px',
  },
  hoverShadow:`:hover{
      box-shadow: 6px 6px 5px rgba(0,0,0,.3);
  }`
};

export default config;
