import s from "./Practic.module.css";
// import { useState } from "react";
import { CustomImage } from "../../CustomImage/CustomImage";
import targetImg from "../../../assets/targetImg.png";


type Props = {
    practicRef: React.RefObject<HTMLDivElement>;
  };

export const Practic = ({ 
    practicRef
}: Props) => {
  // const [answerNumber, setAnswerNumber] = useState(-1);

  return (
    <div ref={practicRef} className={s.wrapper}>
      <div className={s.top}>
        <p className={s.desc}>
        <p>1. Возьмите чистый лист бумаги и запишите 10 целей, которых вы хотели бы достичь в течение ближайших двенадцати месяцев</p>
              <p>2. Выберите одну цель, которая, на ваш взгляд, окажет самое мощное положительное влияние на вашу жизнь, и обведите ее кружком</p>
              <p>3. В письменном виде составьте план по достижению этой цели, руководствуясь изложенными выше рекомендациями</p>
        </p>

        {/* Картинка человека смотрящего в цель*/}
        <CustomImage src={targetImg}/>
      </div>
{/* 
      {stepsDone > currentStep && (
        <p>
          Теперь ты лучше понимаешь, что такое интернет-маркетинг. Но чтобы
          решить реальные задачи, нужно глубже разобраться в этой теме. Поэтому
          сейчас поговорим о классическом маркетинге и расскажем, чем он
          отличается от интернет-маркетинга.
        </p>
      )} */}
    </div>
  );
};
