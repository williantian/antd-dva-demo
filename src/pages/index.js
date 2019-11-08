import styles from './index.css';
import { Button } from 'antd';
import CommentApp from './CommentApp';
import React from 'react';


export default function() {
  return (
    <div className={styles.normal}>
      {/*<div className={styles.welcome} />*/}
      {/*<ul className={styles.list}>*/}
      {/*  <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>*/}
      {/*  <li>*/}
      {/*    <a href="https://umijs.org/guide/getting-started.html">*/}
      {/*      Getting Started*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
      <CommentApp/>
    </div>
  );
}
