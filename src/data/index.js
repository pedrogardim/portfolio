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
  {
    title: 'Bless',
    picture: '../assets/images/projects/bless.png',
    description:
      'A dating app intended for Christians. It has a card swiping system, which matches users based on their preferences. Also features a complete chat and videocall system',
    url: 'https://play.google.com/store/apps/details?id=io.virtualcase.bless',
  },
  {
    title: 'Modulab',
    picture: '../assets/images/projects/modulab.png',
    url: 'https://modulab-ee0e0.web.app',
    description:
      'Simulation of modular syntesis on the web. Combine different audio processing modules to create unique sounds.',
  },
  {
    title: 'Musabeat',
    picture: '../assets/images/projects/musabeat.png',
    description:
      'A collaborative music creation web app, which combines most features of a DAW (Digital Audio Workstation), with social network aspects',
    url: 'https://github.com/pedrogardim/musabeat',
  },
  {
    title: 'Leukos',
    picture: '../assets/images/projects/leukos.png',
    description:
      'Songbook system for liturgical music. The mobile app features chord transpose and song playback, while the desktop app will project the lyrics',
  },
  {
    title: 'Petr',
    picture: '../assets/images/projects/petr.png',
    description: 'A virtual pet on the web',
  },
  {
    title: 'Web DAW',
    picture: '../assets/images/projects/webdaw.png',
    description: 'A ',
    url: 'https://github.com/pedrogardim/daw_prototype',
  },
  {
    title: 'Metrono',
    picture: '../assets/images/projects/metrono.png',
    description: 'Web metronome with a minimalist design',
  },
  {
    title: 'Plumb',
    picture: '../assets/images/projects/pumblr.png',
    description: 'Clone of the classic game using JS',
    url: 'https://github.com/pedrogardim/plumb',
  },
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
