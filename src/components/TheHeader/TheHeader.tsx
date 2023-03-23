import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './TheHeader.module.scss';


export const TheHeader = () => (
  <header className={styles.header} data-testid="TheHeader">
    <div className={styles.logo}>
      dev.finder
    </div>
    <ThemeSwitcher />
  </header>
);
