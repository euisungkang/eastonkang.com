import logo from '$lib/assets/media/logo.png';
import soap from '$lib/assets/media/soap.jpg';
import spacep from '$lib/assets/media/space.png';
import mine from '$lib/assets/media/mine.png';
import ericko from '$lib/assets/media/ericko.jpg';
import blind from '$lib/assets/media/blind.jpg'
import limina from '$lib/assets/media/limina.jpg';
import hh from '$lib/assets/media/hh.webp';
import v1 from '$lib/assets/media/v1.jpg';

export type Image = {
  image: string,
  backgroundColor: string,
  overlayColor: string,
  path: string,
};

export const images: Array<Image> = [
  {
    image: logo,
    backgroundColor: '#ffc5e7',
    overlayColor: '#382a6c',
    path: '/wavy'
  },
  {
    image: ericko,
    backgroundColor: '#bebebe',
    overlayColor: '#1e1e1e',
    path: '/ericko'
  },
  {
    image: limina,
    backgroundColor: '#0a0a0a',
    overlayColor: '#D72638',
    path: '/lamina'
  },
  {
    image: spacep,
    backgroundColor: '#010919',
    overlayColor: '#e6e6e6',
    path: '/spacep'
  },
  {
    image: mine,
    backgroundColor: '#d5d5d5',
    overlayColor: '#2a2a2a',
    path: '/military'
  },
  {
    image: blind,
    backgroundColor: '#778279',
    overlayColor: '#cabba6',
    path: '/blindfold'
  },
  {
    image: hh,
    backgroundColor: '#223061',
    overlayColor: '#D06A66',
    path: '/hh'
  },
];
