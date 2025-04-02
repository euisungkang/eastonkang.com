import logo from '$lib/assets/media/logo.png';
import casino from '$lib/assets/media/casino.png';
import currency from '$lib/assets/media/currency.png';
import receipt from '$lib/assets/media/receipt.png';
import music from '$lib/assets/media/music.png';
import raffle from '$lib/assets/media/raffle.png';
import market from '$lib/assets/media/market.png';

export type Image = {
  image: string,
  backgroundColor: string,
  overlayColor: string,
};

export const images: Array<Image> = [
  { 
    image: logo,
    backgroundColor: '#ffb7e1',
    overlayColor: '#382a6c' 
  },
  { image: casino, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { image: currency, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { image: receipt, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { 
    image: 'https://ik.imagekit.io/easton/home-bg.svg',
    backgroundColor: '#095afd',
    overlayColor: '#e6e6e6' 
  },
  { image: raffle, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
  { image: market, backgroundColor: '#4850a4', overlayColor: '#f7a4f6' },
];
