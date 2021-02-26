import React from 'react';
import Link from 'next/link';
import App from './app';
import HeadComponent from '../components/Head';

const Program = () => (
  <App>
    <section className="program-page">
      <HeadComponent title={ 'Программа' } />
      <div className="box program">
        <h2>Программа партии <span className="title">Десять пунктов партии РНКП</span></h2>
        <h4><span className="title">1.</span> Экономическая реформа</h4>
        <p>
          Выпустить новые казначейские билеты Госбанка.
          Постепенно снижать ставку рефинансирования до 0%.
          Отказаться от стабилизационных фондов.
          Освободить бедных от налогов и ввести прогрессивную шкалу налогообложения и налог на роскошь.
          Создать крупные государственные предприятия.
          Постепенно вводить безусловный базовый доход.
          Отменить обязательную прописку.
          <br />
          <Link href={ `/program/1` }>Подробнее о пункте 1</Link>
        </p>

        <h4><span className="title">2.</span> Антикоррупционная реформа</h4>
        <p>
          Искоренить коррупцию, как одно из основных факторов препятствующих прогрессу и развитию государства.
          Ратифицировать 20-ю статью Конвенции ООН против коррупции.
          Установить зарплату государственных чиновников равную двум средним зарплатам высококвалифицированных специалистов по стране.
          Разработать единую систему автоматизации документооборота.
          Ввести видеофиксацию рабочего процесса чиновников.
          <br />
          <Link href={ `/program/2` }>Подробнее о пункте 2</Link>
        </p>

        <h4><span className="title">3.</span> Реформа недропользования</h4>
        <p>
          Национализировать природные ресурсы.
          Создать крупнейшую в мире нефтегазодобывающую компанию.
          Создать условия при которых будет отдан приоритет на переработку ресурсов на территории России.
          Направить прибылиь от добычи и продажи ресурсов в бюджет государства и, как следствие, искоренить олигархат.
          Запретить приватизировать добывающее производство.
          <br />
          <Link href={ `/program/3` }>Подробнее о пункте 3</Link>
        </p>

        <h4><span className="title">4.</span> Реформа науки и образования</h4>
        <p>
          Увеличить расходы на образование и науку до 14% ВВП.
          Отменить обязательную сдачу ЕГЭ.
          Отменить платное образование в государственных учебных учреждениях.
          Отделить церковь от государства и науки.
          Отправлять студентов на учебу в иностранные университеты за счет государства.
          <br />
          <Link href={ `/program/4` }>Подробнее о пункте 4</Link>
        </p>

        <h4><span className="title">5.</span> Реформа МВД и гражданского права</h4>
        <p>
          Искоренить коррупцию и произвол в полиции и в судах.
          Ввести уголовную ответственность за попытку дачи взятки.
          Отменить несоответствующие прогрессу законы.
          Ограничить срок службы сотрудинков полиции до 15 лет.
          Отменить мораторий на смертную казнь.
          Ввести высшую меру наказания за тяжкие и особо тяжкие преступления и за трехкратный рецидивизм.
          Ввести обязательное присутствие в судах присяжных.
          Ввести прецедентную судебную систему.
          Легализовать предоставление интимных услуг.
          Легализовать наркотические вещества не представляющих общественной опасности.
          <br />
          <Link href={ `/program/5` }>Подробнее о пункте 5</Link>
        </p>

        <h4><span className="title">6.</span> Реорганизация и перекомплектация вооруженных сил</h4>
        <p>
          Отменить милитаристскую политику.
          Отменить обязательный призыв в армию.
          Создать малочисленную, но высокотехнологичную армию.
          Выйти из всех договоров с США об ограничении вооружений.
          <br />
          <Link href={ `/program/6` }>Подробнее о пункте 6</Link>
        </p>

        <h4><span className="title">7.</span> Реформа государственного управления</h4>
        <p>
          Принять новую пожизненную конституцию.
          Перенести столицу России.
          Изменить административно-территориальное деление.
          Ввести возможность снять с должности любого чиновника при утрате доверия к нему граждан.
          Внедрить единую государственную автоматизированную систему управления.
          Сократить количество министерств и ведомств.
          Отказаться от разделения паспортов на внутренний и заграничный.
          Переименовать Российскую Федерацию в Россию.
          <br />
          <Link href={ `/program/7` }>Подробнее о пункте 7</Link>
        </p>

        <h4><span className="title">8.</span> Медицинская реформа</h4>
        <p>
          Улучшить качество медицинского обслуживания за счет увеличения зарплат врачей и применения высокотехнологичного оборудования.
          Внедрить бюджетную модель здравоохранения и отказаться от страховой.
          Ввести обязательную диспансеризацию граждан. Усилить борьбу с распространением ВИЧ.
          Внедрить заместительную терапию для наркозависимых.
          <br />
          <Link href={ `/program/8` }>Подробнее о пункте 8</Link>
        </p>

        <h4><span className="title">9.</span> Программа развития промышленности, сельского хозяйства и инфраструктуры</h4>
        <p>
          Начать новую индустриализацию совместно с увеличением производительности сельского хозяйства и качественным улучшением инфраструктуры.
          Полностью обновить сеть автомобильных дорог в стране с применением современных материалов, позволяющих увеличить время эксплуатации дорог без необходимости ремонта на срок не менее 30 лет.
          <br />
          <Link href={ `/program/9` }>Подробнее о пункте 9</Link>
        </p>

        <h4><span className="title">10.</span> Идеологическая программа и международные принципы</h4>
        <p>
          Разработать государственную идеологию на основе идеи всеобщей справедливости.
          Позиционировать Россию только как миротворца в международных вопросах и конфликтах.
          <br />
          <Link href={ `/program/10` }>Подробнее о пункте 10</Link>
        </p>
      </div>
    </section>
  </App>
);

export default Program;
