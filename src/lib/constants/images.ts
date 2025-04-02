import logo from '$lib/assets/media/logo.png';
import soap from '$lib/assets/media/soap.jpg';
import spacep from '$lib/assets/media/space.png';
import mine from '$lib/assets/media/mine.png';
import market from '$lib/assets/media/market.png';
import ericko from '$lib/assets/media/ericko.png';
import jumpkey from '$lib/assets/media/jumpkey.png';
import v1 from '$lib/assets/media/v1.png';

export type Image = {
  image: string,
  backgroundColor: string,
  overlayColor: string,
};

export const images: Array<Image> = [
  { 
    image: logo,
    backgroundColor: '#ffc5e7',
    overlayColor: '#382a6c' 
  },
  { 
    image: ericko,
    backgroundColor: '#bebebe',
    overlayColor: '#1e1e1e' 
  },
  { 
    image: spacep,
    backgroundColor: '#010919',
    overlayColor: '#e6e6e6' 
  },
  { 
    image: mine,
    backgroundColor: '#d5d5d5',
    overlayColor: '#2a2a2a' 
  },
  {
    image: v1,
    backgroundColor: '#121212',
    overlayColor: '#f0f0f0' 
  },
  { 
    image: soap,
    backgroundColor: '#b1beac',
    overlayColor: '#2f2524' 
  },
  {
    image: jumpkey,
    backgroundColor: '#121212',
    overlayColor: '#f0f0f0' 
  },
];
