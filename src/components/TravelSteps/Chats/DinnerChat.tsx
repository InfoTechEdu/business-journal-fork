import { useRef, useState } from "react";
import { BlackButton } from "../../BlackButton/BlackButton";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";
import { CustomImage } from "../../CustomImage/CustomImage";

import s from "./Chat.module.css";

export const DinnerChat = () => {
  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);
  const contentRef4 = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setShowContent(true);

    setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  };

  const handleStart2 = () => {
    setShowContent2(true);

    setTimeout(() => {
        contentRef2.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  };

  const handleStart3 = () => {
    setShowContent3(true);

    setTimeout(() => {
        contentRef3.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  };

  const handleStart4 = () => {
    setShowContent4(true);

    setTimeout(() => {
        contentRef4.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  };



  return (
    <div className={s.wrapper}>

      {/* Картинка входа в дом */}
      <CustomImage />
      <p>
      За ужином со своей женой Эммой, Алекс не смог скрыть ощущения, что что-то не так. Несмотря на неустанную работу изо дня в день, казалось, что ничего в его жизни не изменилось.
      </p>

      {/* Картинка за ужином*/}
      <CustomImage />
      <p>
      За ужином со своей женой Эммой, Алекс не смог скрыть ощущения, что что-то не так. Несмотря на неустанную работу изо дня в день, казалось, что ничего в его жизни не изменилось.
      </p>

      <UserOneMessage text="Эй, как жизнь?" />
      <UserOneMessage text="Ты размышляешь над новым изобретением человечества или вроде того?" />
      <BlackButton handleClick={handleStart} text="Как-нибудь, дорогая. Но не сейчас 🙂" />

      {showContent && (
        <div ref={contentRef}>
          <MyMessage text="Как-нибудь, дорогая. Но не сейчас 🙂" />
          <MyMessage text="Я просто думал о том, как усердно я работал, но мне кажется, что мы не движемся вперед по жизни. Я не знаю, что я делаю неправильно" />
          <UserOneMessage text="Ну-ка детальнее" />
          <MyMessage text="Помнишь тот тур, о котором я рассказывал и на который даже планировал поехать с тобой в прошлом году?" />
          <MyMessage text="Я не чувствую, что как-то приблизил нас к этой небольшой мечте? Будто застрял в петле и не знаю, как вырваться" />
          <MyMessage text="Настораживает и то, что это касается не только путешествия" />
          <UserOneMessage text="Ну, может быть, пришло время поискать какую-то точку зрения со стороны. " />
          <UserOneMessage text="Например, поговорить с кем-то знающим, который может помочь посмотреть на вещи по-другому" />
          
          <BlackButton handleClick={handleStart2} text="Согласиться" />
        </div>
      )}

      {showContent2 && (
        <div ref={contentRef2}>
          <MyMessage text="А если не знаешь, то спроси у знающего…" />
          <MyMessage text="Кажется, ты всегда находишь, что подсказать. Побеседуем с одним человеком 🙂" />
          <BlackButton handleClick={handleStart3} text="Сделать комплимент" />
        </div>
      )}

      {showContent3 && (
        <div ref={contentRef3}>
          <MyMessage text="А салат вкусный" />
          <UserOneMessage text="Думаю, повар хороший 🙂" />

          <BlackButton handleClick={handleStart4} text="Отправиться на встречу" />
        </div>
      )}
    </div>
  );
};
