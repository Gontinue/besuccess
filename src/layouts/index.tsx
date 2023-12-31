import { Link, Outlet } from 'umi';
import React from 'react';
import styles from './index.less';

export default function Layout() {
  const testFunc = () => {
    console.info('test');
  };

  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
