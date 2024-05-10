import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page__container}>
      <div className={styles.page__content}>
        <h1 className={styles.page__heading}>Suddenly</h1>
        <p>
          <strong>Ericson 41</strong> | <strong>1968</strong> | <strong>Hull #2</strong><br/>
          Solidly built, this early Bruce King design has stood the test of time
        </p>
      </div>
    </main>
  );
}
