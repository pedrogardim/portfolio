export const links = {};

export const wordColorMap = {
  darkBlue: ['const', 'new'],
  blue: ['pedroGardim', 'i'],
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

export const projects = [
  { title: 'Bless', picture: '../assets/images/projects/bless.png' },
  { title: 'Modulab', picture: '../assets/images/projects/modulab.png' },
  { title: 'Musabeat', picture: '../assets/images/projects/musabeat.png' },
  { title: 'Leukos', picture: '../assets/images/projects/leukos.png' },
  { title: 'Petr', picture: '../assets/images/projects/petr.png' },
  { title: 'Web DAW', picture: '../assets/images/projects/webdaw.png' },
  { title: 'Metrono', picture: '../assets/images/projects/metrono.png' },
  { title: 'Pumblr', picture: '../assets/images/projects/pumblr.png' },
];

export const education = [
  { title: 'Bless' },
  { title: 'Leukos' },
  { title: 'Modulab' },
  { title: 'Musabeat' },
  { title: 'Kat' },
  { title: 'Web DAW' },
  { title: 'Metrono' },
  { title: 'Pumblr' },
];
