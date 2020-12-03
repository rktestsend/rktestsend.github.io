import React from 'react';
import guide from "./EscapeRoomGuide.pdf";
import styles from './EmbeddedPdf.module.css';

const EmbeddedPdf = ({ src }) => (
  <div className={styles.bg}>
    <iframe src={guide} width="80%" height="80%"></iframe>
  </div>
);

export default EmbeddedPdf;
