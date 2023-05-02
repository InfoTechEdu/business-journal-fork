import { useRef, useState } from "react";
import { BlackButton } from "../../BlackButton/BlackButton";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";

import s from './Chat.module.css';
import s2 from '../Practic/Practic.module.css';
import { CustomImage } from "../../CustomImage/CustomImage";
import coffeeNotepadImg from "../../../assets/coffeeNotepadImg.png";

type Props = {
  currentStep: number;
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
  handleComplete: React.Dispatch<React.SetStateAction<number>>;
  meetingRef: React.RefObject<HTMLDivElement>
};

export const ChatWithWorkers = ({
  currentStep,
  stepsDone,
  setStepsDone,
  handleComplete,
  meetingRef
}: Props) => {
  const scrollTimeout = 300;

  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);
  const [showContent7, setShowContent7] = useState(false);
  const [showContent8, setShowContent8] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);
  const contentRef4 = useRef<HTMLDivElement>(null);
  const contentRef5 = useRef<HTMLDivElement>(null);
  const contentRef6 = useRef<HTMLDivElement>(null);
  const contentRef7 = useRef<HTMLDivElement>(null);
  const contentRef8 = useRef<HTMLDivElement>(null);

  const handleClick1 = () => {
    setShowContent(true);

    setTimeout(() => {
      contentRef2.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleClick2 = () => {
    setShowContent2(true);

    setTimeout(() => {
      contentRef3.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleClick3 = () => {
    setShowContent3(true);

    setTimeout(() => {
      contentRef4.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleClick4 = () => {
    setShowContent4(true);

    setTimeout(() => {
      contentRef5.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleClick5 = () => {
    setShowContent5(true);

    setTimeout(() => {
      contentRef6.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleClick6 = () => {
    setShowContent6(true);

    setTimeout(() => {
      contentRef7.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleClick7 = () => {
    setShowContent7(true);

    setTimeout(() => {
      contentRef8.current?.scrollIntoView({ behavior: 'smooth' });
    }, scrollTimeout)
  };

  const handleCompleteClick = () => {
    setStepsDone(currentStep + 1)
    handleComplete(0);
  };


  return (
    <div className={s.wrapper} ref={meetingRef}>
      <h1>Часть 2. Встреча</h1>
      <p>
        В поисках совета Алекс решил встретиться со своим бывшим коллегой Беном, коллегой-предпринимателем, который прошел через испытания и невзгоды запуска стартапа. Они встретились в своей любимой кофейне и устроились в уютном уголке, потягивая горячие напитки. Алекс рассказал о своей дилемме.
      </p>

      <UserTwoMessage text="Алекс, слушай. Назови мне некоторые из своих целей" />
      <MyMessage text="Ну, эм. Быть счастливым." />
      <MyMessage text="Иметь спокойную семейную жизнь" />
      <MyMessage text="Жить в достатке 🙂" />
      <UserTwoMessage text="Но это не цели, а твои фантазии и иллюзии. Это твои надежды и мечты. Они бывают у каждого" />
      <BlackButton handleClick={handleClick1} text="Хм" shouldDisappear />

      {showContent && (
        <div ref={contentRef2}>
          <MyMessage text="Хм" />
          <UserTwoMessage text="Кто по сказанному тобой сможет определить, насколько близко ты подошел к исполнению своих желаний?" />
          <UserTwoMessage text="Цели должны быть такими ясными, чтобы ты мог донести их шестилетнему ребенку" />
          <UserTwoMessage text="А тот в свою очередь другому шестилетнему ребенку" />
          
          <p>
            Приятель Алекса достал свой блокнот и начал что-то быстро чертить и писать. Через мгновение он поднял голову и посмотрел на товарища.
          </p>
          {/* Картинка в кофейне + блокнот*/}
          <CustomImage src={coffeeNotepadImg}/>

          <UserTwoMessage text="Покажу на примере распределения богатств. Слышал ли ты о том, что меньшая часть населения обладает бОльшими богатствами, чем другая часть?" />
          <BlackButton handleClick={handleClick2} text="Было дело" shouldDisappear />
        </div>
      )}

      {showContent2 && (
        <div ref={contentRef3}>
          <MyMessage text="Было дело. 1 процент богачей против 99" />
          <UserTwoMessage text="Почти. На самом деле 3 процента против 97" />
          <UserTwoMessage text="Какая одна из особенностей выделяет эти 3 процента среди остальных? " />
          <BlackButton handleClick={handleClick3} text="?" shouldDisappear />
        </div>
      )}

      {showContent3 && (
        <div ref={contentRef4}>
          <MyMessage text="?" />
          <UserTwoMessage text="У этих 3 процентов людей имеются ясные, изложенные в письменном виде цели и планы" />
          <UserTwoMessage text="И над их претворением они трудятся изо дня в день" />
          <UserTwoMessage text="Им точно известно, что они собой представляют, чего хотят и в каком направлении движутся" />
          <MyMessage text="Не припомню, чтобы я таким занимался" />

          <UserTwoMessage text="Для реализации ясных и оформленных в письменном виде целей требуется меньше времени. Люди, имеющие такие цели и планы зарабатывают в среднем в 10 раз больше, чем другие" />
          <p>
            Алекс уставился на блокнот в руках приятеля, потом перевел взгляд на своего приятеля
          </p>

          <UserTwoMessage text="Наверняка ты хочешь спросить меня об этом" />
          <BlackButton handleClick={handleClick4} text="Задать вопрос" shouldDisappear />
        </div>
      )}

{showContent4 && (
        <div ref={contentRef5}>
          <MyMessage text="Конечно. Как верно составлять эти цели и планы?" />
          <MyMessage text="Ты сообщал об иллюзиях в моих словах" />
          <UserTwoMessage text="Да, мой друг. Ошибка была допущена в самом начале. Давай разобьем этот процесс на шаги" />
          <p>
          Перелистнув отмеченную страницу, Приятель взял на себя роль лектора, жаждущего поделиться своими знаниями со своим коллегой. Алекс, с другой стороны, сидел с восторженным вниманием, как ученик, впитывающий мудрость опытного учителя.
          </p>
          <p className={s2.desc}>
            *БЛОК С ОПИСАНИЕ ШАГОВ*
          </p>
          <UserTwoMessage text="Не забывай о самом главном" />
          <BlackButton handleClick={handleClick5} text="Весь во внимании" shouldDisappear />
        </div>
      )}

{showContent5 && (
        <div ref={contentRef6}>
          <MyMessage text="Весь во внимании" />
          <UserTwoMessage text="Наполеон Хилл, 22 года изучавший жизнь самых богатых людей Америки,  писал, что большой успех всегда начинается с определения человеком своего главного предназначения" />
          <UserTwoMessage text="Взгляни на свой список целей и задай себе вопрос: “Если бы мне нужно было выбрать всего одну цель, то какая из них, оказала бы самое большое влияние на мою жизнь?”" />
          <UserTwoMessage text="Ты должен найти эту самую цель. И, просыпаясь каждое утро, задумываться над своим предназначением, над своей великой целью." />
          
          <p>
          Алекс принимал советы приятеля, словно повеления царя.
          </p>
          <UserTwoMessage text="При постановке целей и личной стратегии не забудь отстраниться от повседневных дел, найти свободное время." />
          <UserTwoMessage text="И уж точно убедись, что твои дела соответствуют характеру твоей личности и твоим мечтам" />
          <BlackButton handleClick={handleClick6} text="Как же они могут этому не соответствовать?" shouldDisappear />
        </div>
      )}

{showContent6 && (
        <div ref={contentRef7}>
          <MyMessage text="Как же они могут этому не соответствовать?" />
          <UserTwoMessage text="Ха-ха. Порой, мы занимаем свое время целями, которые на самом деле не наши…" />
          <UserTwoMessage text="Но об этом как-нибудь в другой раз" />
          
          <p>
          Для двух приятелей их сосредоточенный разговор превратил оживленное кафе во временный класс          
          </p>
          <UserTwoMessage text="На этом, пожалуй, оставлю тебя один на один со своими мыслями" />
          <UserTwoMessage text="Оу, кофе. Увлекшись беседой, я даже перестал чувствовать его восхитительный аромат" />
          <MyMessage text="Да, мой коллега. Пора допивать и возвращаться к семье." />
          <UserTwoMessage text="Как-то мой учитель сказал: “Хорошо, что у нас есть обязанности, к которым нужно возвращаться”" />
          
          <BlackButton handleClick={handleClick7} text="👍🏻" shouldDisappear />
        </div>
      )}

{showContent7 && (
        <div ref={contentRef8}>
          <MyMessage text="👍🏻" />
          <BlackButton handleClick={handleCompleteClick} text="Практическое задание" />
        </div>
      )}

    </div>
  );
};
