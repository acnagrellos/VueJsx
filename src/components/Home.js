import image from '@/assets/logo.png';
import { HelloWorld } from './Home/HelloWorld';

const HomeComponent = {
  name: 'home',
  render() {
    return (
      <div className="home">
        <img alt="Vue logo" src={image} />
        <HelloWorld msg={'Esto es un mensaje'} />
      </div>
    );
  },
};

export { HomeComponent };
