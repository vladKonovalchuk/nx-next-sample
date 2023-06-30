import styles from './page.module.css';
import { Banner } from '@myorg/common-ui';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Banner text="Testing packages" />
    </div>
  );
}
