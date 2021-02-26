import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const fixedFooter = router.pathname === '/'
    || router.pathname === '/404'
    || router.pathname === '/privacy';

  return (
    <footer className={ fixedFooter ? 'fixed' : '' }>
      <div className="box flex">
        <div className="logo-text">
          <img src="../images/logo-color-min.png" alt="Logo" className="img" />

          <p>Российская народная концептуальная программа<br /><small>© РНКП, 2011–2021</small></p>
        </div>
        <p className="links links-center">
          <a href="https://www.patreon.com/rnkp" target="_blank" title="Patreon" rel="noopener noreferrer"><img src="/images/patreon_logo.png" alt="patreon" /></a>
          <a href="https://t.me/rnkp_chat" target="_blank" title="Telegram канал" rel="noopener noreferrer"><img src="/images/tg_logo.png" alt="telegram" /></a>
          <a href="https://www.youtube.com/channel/UCBvaHX3Ci3JNYC1Idd4NiAg" target="_blank" title="Youtube канал" rel="noopener noreferrer"><img src="/images/youtube_logo.png" alt="youtube" /></a>
          <a href="https://github.com/rnkp" target="_blank" title="Github" rel="noopener noreferrer"><img src="/images/github_logo.png" alt="github" /></a>
        </p>
        <p>
          <Link href="/privacy">
            <a>Правила использования</a>
          </Link>
        </p>
      </div>

      <div className="box text-2">
        <p className="links">
          <a href="https://www.patreon.com/rnkp" target="_blank" title="Patreon" rel="noopener noreferrer"><img src="/images/patreon_logo.png" alt="patreon" /></a>
          <a href="https://t.me/rnkp_chat" target="_blank" title="Telegram канал" rel="noopener noreferrer"><img src="/images/tg_logo.png" alt="telegram" /></a>
          <a href="https://www.youtube.com/channel/UCBvaHX3Ci3JNYC1Idd4NiAg" target="_blank" title="Youtube канал" rel="noopener noreferrer"><img src="/images/youtube_logo.png" alt="youtube" /></a>
          <a href="https://github.com/rnkp" target="_blank" title="Github" rel="noopener noreferrer"><img src="/images/github_logo.png" alt="github" /></a>
        </p>
      </div>

    </footer>
  )
};

export default Footer;
