import { Link } from "react-router-dom";
import { Logo } from "@/shared/ui/icons/logo/logo.tsx";

import styles from "./styles.module.css";
import MenuIcon from "@/shared/ui/icons/menu/menu-icon.tsx";
import { useState } from "react";
import { CloseIcon } from "@/shared/ui/icons/close/close-icon.tsx";

export const Header = () => {
  const [openAuthMenu, setOpenAuthMenu] = useState(false);
  const [options, SetOptions] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container} aria-label="Лого и основная навигация">
        <div className={styles.branding} aria-label="Лого и выбор раздела">
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>

          <button
            className={styles.btnToggle}
            onClick={() => SetOptions(!options)}
          >
            Подготовка
          </button>
        </div>

        <nav
          className={`${styles.mainNav} ${options && styles.showMainNav}`}
          aria-label="Основная навигация"
        >
          <Link to="/">База вопросов</Link>
          <Link to="/trainer">Тренажер</Link>
        </nav>
      </div>

      <MenuIcon className={styles.menu} onClick={() => setOpenAuthMenu(true)} />

      <nav
        className={`${styles.authNav} ${openAuthMenu && styles.showAuthNav}`}
        aria-label="Пользовательские действия"
      >
        <Link to="/auth">Вход</Link>
        <Link className={styles.registration} to="/registration">
          Регистрация
        </Link>
        <CloseIcon
          className={styles.closeBtn}
          onClick={() => setOpenAuthMenu(false)}
        />
      </nav>
    </header>
  );
};
