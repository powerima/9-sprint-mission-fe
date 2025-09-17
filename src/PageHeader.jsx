/*
  PageHeader.jsx

  2025. 09. 16

  Pageheader 판다마켓 웹 상단의 헤더 컴포넌트 

*/


import styles from './PageHeader.module.css';
import logoImg from './assets/logo.svg';

function PageHeader() {
  const menuList = [
    {
      id: 'free', 
      name: '자유게시판',
      link: '/',
    },
    {
      id: 'used',
      name: '중고마켓',
      link: '/'
    }
  ];

  return (
    <header className={styles.pageHeader}>
      <div className={styles.gnb}>
        <a href="/" aria-label="홈으로 이동">
          <img className={styles.logoImg} src={logoImg} alt="판다마켓 로고"/>
        </a>
        <ul className={styles.menuList}>
          {menuList.map((menuItem) => (
            <li key={menuItem.id} className={styles.menuItem}>
              <a href={menuItem.link}>{menuItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href="/" className={styles.loginButton}>로그인</a>
    </header>
  )
}

export default PageHeader;