import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ActiveLink({ children, href }: { children: string; href: string }) {
  const router = useRouter();

  const isExact = href === '/' ? router.pathname === href : router.pathname.includes(href);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={ href }
      onClick={ handleClick }
      className={ isExact ? 'active' : 'notactive' }
    >{ children }</a>
  )
}

const Header = () => {
  return (
    <header>
      <div className="box">
        <h1>
          <Link href="/" legacyBehavior>
            Российская народная концептуальная программа
          </Link>
        </h1>
        <nav>
          <ActiveLink href="/">Главная</ActiveLink>
          <ActiveLink href="/about">О партии</ActiveLink>
          <ActiveLink href="/program">Программа</ActiveLink>
          <ActiveLink href="/evolution">Развитие партии</ActiveLink>
          <ActiveLink href="/articles">Статьи</ActiveLink>
        </nav>
      </div>
    </header>
  )
};

export default Header;
