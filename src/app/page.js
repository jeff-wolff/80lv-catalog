import styles from './page.module.css';
import Carousel from './components/Carousel';
import CatalogController from './components/CatalogController';

export default function Home() {

  return (
    <div className={styles.container}>
      <Carousel />
      <CatalogController />
    </div>
  );
}
