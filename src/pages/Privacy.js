import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => (
  <section className="privacy-page">
    <Helmet>
      <title>РНКП - Российская народная концептуальная программа</title>
    </Helmet>
    <div className="box">
      <p>Материалы, статьи и программа партии РНКП являются следствием исторического развития российского народа и государства.</p>
      <p>Материалы, статьи и программа партии РНКП являются собственностью и достоянием российского народа и могут свободно использоваться, изменяться или применяться.</p>
      <p>Если Вы нашли ошибку в тексте или в верстке сайта партии РНКП, пожалуйста сообщите нам об этом в нашем репозитории в <a href="https://github.com/rnkp/rnkp2/issues/new" target="_blank" rel="noopener noreferrer">Github</a></p>
      <p>Обсудить Программу и задать вопросы можно в группе в <a href="https://t.me/rnkp_chat" target="_blank" rel="noopener noreferrer">Telegram</a></p>
      <p>Поддержать работу партии РНКП Вы можете через сервис <a href="https://www.patreon.com/rnkp" target="_blank" rel="noopener noreferrer">Patreon</a></p>
    </div>
  </section>
);

export default Privacy;
