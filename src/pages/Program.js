import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Point from './Point';
import ScrollToTopOnMount from '../components/ScrollToTop';

const ListProgram = ({ match }) => (
  <section className="program-page">
    <Helmet>
      <title>РНКП - Программа</title>
    </Helmet>
    <ScrollToTopOnMount />
    <div className="box program">
      <h2>Программа партии <span className="title">Десять пунктов партии РНКП</span></h2>
        <h4><span className="title">1.</span> Экономическая реформа</h4>
        <p>Создание благоприятных условий для укрепления национальной валюты и экономического развития. Создание Госбанка и Госплана. <Link to={`${match.url}/1`}>Подробнее о пункте 1</Link></p>

        <h4><span className="title">2.</span> Антикоррупционная реформа</h4>
        <p>Искоренение коррупции, как одного из основных факторов препятствующих прогрессу и развитию государства. <Link to={`${match.url}/2`}>Подробнее о пункте 2</Link></p>

        <h4><span className="title">3.</span> Реформа недропользования</h4>
        <p>Создание условий при которых будет отдан приоритет на переработку ресурсов на территории России, а не продажа за рубеж. Направление прибыли от добычи и продажи ресурсов в бюджет государства и, как следствие, искоренение олигархата. <Link to={`${match.url}/3`}>Подробнее о пункте 3</Link></p>

        <h4><span className="title">4.</span> Реформа науки и образования</h4>
        <p>Развитие науки и образования на мировом уровне. <Link to={`${match.url}/4`}>Подробнее о пункте 4</Link></p>

        <h4><span className="title">5.</span> Реформа МВД и гражданского права</h4>
        <p>Искоренение коррупции и произвола в полиции и в судах. Искоренение возможности принятия судами заангажированных решений. Реформирование права. Избавление от глупых, тормозящих прогресс законов. <Link to={`${match.url}/5`}>Подробнее о пункте 5</Link></p>

        <h4><span className="title">6.</span> Реорганизация и перекомплектация вооруженных сил</h4>
        <p>Уход от милитаристской политики. Отмена обязательного призыва в армию. Создание малочисленной, но высокотехнологичной армии. <Link to={`${match.url}/6`}>Подробнее о пункте 6</Link></p>

        <h4><span className="title">7.</span> Реформа государственного управления</h4>
        <p>Увеличение качества государственного управления при уменьшении издержек. Реформирование избирательного права. Принятие новой конституции. Перенос столицы России. Изменение административно-территориального деления. <Link to={`${match.url}/7`}>Подробнее о пункте 7</Link></p>

        <h4><span className="title">8.</span> Медицинская реформа</h4>
        <p>Увеличение качества медицинского обслуживания. Внедрение бюджетной модели здравоохранения. Уменьшение уровня смертности. <Link to={`${match.url}/8`}>Подробнее о пункте 8</Link></p>

        <h4><span className="title">9.</span> Программа развития промышленности, сельского хозяйства и инфраструктуры</h4>
        <p>Новая индустриализация, возрождение сельского хозяйства и восстановление инфраструктуры. <Link to={`${match.url}/9`}>Подробнее о пункте 9</Link></p>

        <h4><span className="title">10.</span> Идеологическая программа и международные принципы</h4>
        <p>Разработка государственной идеологии на основе всеобщей справедливости. Позиционирование России исключительно как миротворца в международных вопросах. <Link to={`${match.url}/10`}>Подробнее о пункте 10</Link></p>
    </div>
  </section>
);

const Program = () => (
  <Switch>
    <Route exact path='/program' component={ListProgram}/>
    <Route path='/program/:number' component={Point}/>
  </Switch>
);

export default Program;
