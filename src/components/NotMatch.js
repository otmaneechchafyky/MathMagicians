import React from 'react';
import styles from './NotMatch.module.css';

function NotMatch() {
  return (
    <div className={styles.container}>
      <p className={styles.msg}>Error 404</p>
      <p className={styles.invalid}>Invalid link ...</p>
    </div>
  );
}

export default NotMatch;
