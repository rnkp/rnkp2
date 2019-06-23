import React from 'react';
import { Helmet } from 'react-helmet';
import logoColorBig from '../images/logo-color-big.png';

const About = () => (
  <section className="about-page wrapper">
    <Helmet>
      <title>РНКП - О нас</title>
    </Helmet>
    <div className="box">
      <figure className="left">
        <img src={logoColorBig} alt="Российская народная концептуальная программа" />
      </figure>
      <h2>Добро пожаловать на сайт партии <span className="title">Российская народная концептуальная программа</span></h2>
      <p>
          Создана для ликвидации пропасти между российским народом и властью,<br/> и достижения целей более высокого порядка общественной значимости.<br/>
      </p>
      <div className="clear"></div>
      <div className="underline">
          <p>Основная идея партии РНКП состоит в том, что Россия является великим государством с великой историей с неограниченным потенциалом развития. Поэтому и власть в России должна быть развивающейся, высокоинтеллектуальной, учитывающей исключительно интересы собственного народа в русле постоянного, качественного развития и процветания страны — для этого есть как материальные, так и человеческие ресурсы, а так же великий опыт наших предков.</p>
          <p>Российская народная концептуальная Программа является единственной партией созданной народом и для народа. Курс развития партии основан на научных принципах и опыте прошлого применительно к будущему. Концептуально состоятельная программа, без пустых обещаний и пустых слов — отличительная черта РНКП, выгодно отличающая ее от всех других партий в России.</p>
          <p>Основной принцип партии РНКП состоит в том, что задача правительства — делать для общества людей все то, что им нужно, но что сами они, выступая каждый в своем индивидуальном качестве, не могут сделать совсем или не могут сделать хорошо.</p>
          <hr/>
          <p>Партия РНКП использует самые современные достижения научно-технического прогресса не только для выполнения Программы, но и для функционирования самой партии.</p>
          <p>Если Вы нашли ошибку в тексте или в верстке сайта партии РНКП, пожалуйста сообщите нам об этом в нашем репозитории в <a href="https://github.com/rnkp/rnkp2/issues/new" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p>Обсудить Программу и задать вопросы можно в группе в <a href="https://t.me/rnkp_chat" target="_blank" rel="noopener noreferrer">Telegram</a></p>
          <p>Поддержать работу партии РНКП Вы можете через сервис <a href="https://www.patreon.com/rnkp" target="_blank" rel="noopener noreferrer">Patreon</a></p>
      </div>
    </div>
  </section>
);

export default About;
