import React from 'react';
import App from './app';
import HeadComponent from '../components/Head';

const Privacy = () => (
  <App>
    <section className="privacy-page">
      <HeadComponent />
      <div className="box">
        <p>Материалы, статьи и программа партии РНКП являются следствием исторического развития российского народа и государства.</p>
        <p>Материалы, статьи и программа партии РНКП являются собственностью и достоянием российского народа и могут свободно использоваться, изменяться или применяться.</p>
        <p>Если Вы нашли ошибку в тексте или в верстке сайта партии РНКП, пожалуйста сообщите нам об этом в нашем репозитории в <a href="https://github.com/rnkp/rnkp2/issues/new" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p>Написать нам можно по адресу <a href="mailto:rnk.program@gmail.com" target="_blank" rel="noopener noreferrer">rnk.program@gmail.com</a></p>
        <p>Поддержать работу партии РНКП Вы можете через сервис <a href="https://www.patreon.com/rnkp" target="_blank" rel="noopener noreferrer">Patreon</a></p>
      </div>
    </section>
  </App>
);

export default Privacy;
