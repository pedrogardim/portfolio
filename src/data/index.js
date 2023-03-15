export const links = {};

export const wordColorMap = {
  darkBlue: ['const', 'new'],
  blue: ['pedroGardim'],
  yellow: [
    'hire',
    '16beats',
    'modulab',
    'bless',
    'kat',
    'webDaw',
    'metrono',
    'pumblr',
    'musabeat',
    'leukos',
    'gitHub',
  ],
  green: ['Date'],
  lightBlue: ['now'],
  salmon: [`'`],
};

export const colorPalette = {
  yellow: '#DCDCAA',
  darkBlue: '#569cd6',
  lightBlue: '#9CDCFE',
  blue: '#4FC1FF',
  green: '#4EC9B0',
  lime: '#b5cea8',
  salmon: '#ce9178',
  gray: '#777',
};

export const colorMap = {};

Object.entries(wordColorMap).map((color) =>
  color[1].map((word) => {
    colorMap[word] = colorPalette[color[0]];
  })
);
