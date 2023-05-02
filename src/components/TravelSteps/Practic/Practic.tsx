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
            *СПИСОК ПРАКТИЧЕСКИХ ЗАДАНИЙ*
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
