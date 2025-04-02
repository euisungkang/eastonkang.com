import logo from '$lib/assets/media/logo.png';
import casino from '$lib/assets/media/casino.png';
import currency from '$lib/assets/media/currency.png';
import receipt from '$lib/assets/media/receipt.png';
import music from '$lib/assets/media/music.png';
import spacep from '$lib/assets/media/space.png';
import raffle from '$lib/assets/media/raffle.png';
import market from '$lib/assets/media/market.png';
import ericko from '$lib/assets/media/ericko.png';

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
    backgroundColor: '#d5d5d5',
    overlayColor: '#2a2a2a' 
  },
  { 
    image: spacep,
    backgroundColor: '#010919',
    overlayColor: '#e6e6e6' 
  },
  { image: currency, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { image: receipt, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { image: raffle, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { image: market, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
];
