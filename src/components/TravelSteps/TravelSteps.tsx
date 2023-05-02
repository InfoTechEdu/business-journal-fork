import s from "./TravelSteps.module.css";
import { useRef, useState } from "react";
import { DinnerChat } from "./Chats/DinnerChat";
// import { Practic } from "./Practic/Practic";
import { ChatWithWorkers } from "./Chats/ChatWithWorkers";

type Props = {
  practicRef: React.RefObject<HTMLDivElement>;
  stepOneRef: React.RefObject<HTMLDivElement>,
  handleComplete: () => void;
};

export const TravelSteps = ({ stepOneRef, handleComplete }: Props) => {
// export const TravelSteps = ({ stepOneRef, practicRef, handleComplete }: Props) => {
  const [stepsDone, setStepsDone] = useState(0);

  const meetingRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <DinnerChat
          currentStep={1}
          stepsDone={stepsDone}
          setStepsDone={setStepsDone}
          meetingRef={meetingRef}
        />
      </section>
      {stepsDone > 1 && (
        <ChatWithWorkers
          currentStep={2}
          stepsDone={stepsDone}
          setStepsDone={setStepsDone}
          handleComplete={handleComplete}
          meetingRef={meetingRef}
        />
      )}
    </>
  );
};
