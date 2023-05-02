import { useCallback, useRef, useState } from "react";
import { Greeting } from "./components/Greeting/Greeting";
import { TravelSteps } from "./components/TravelSteps/TravelSteps";
import { MobileOnlyPlaceholder } from "./components/MobileOnlyPlaceholder/MobileOnlyPlaceholder";
import { Practic } from "./components/TravelSteps/Practic/Practic";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isTravelCompleted, setIsTravelCompleted] = useState(false);

  const stepOneRef = useRef<HTMLDivElement>(null);
  const practicRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(() => {
    setIsStarted(true);

    setTimeout(() => {
      stepOneRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);

    fetch(
      `https://functions.yandexcloud.net/d4ej111639ramkup2ett?event=TravelStarted&date=${new Date()}`
    ).then(response => {console.log("Event sent. Response: " + response)});

  }, []);

  const handleGoPractic = useCallback(() => {
    console.log("handleGoPractic");
    setIsTravelCompleted(true);

    setTimeout(() => {
      practicRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);

    console.log("Scrolling to practicRef");
  }, []);

  return (
    <div className="app">
      <main>
        <Greeting handleStart={handleStart} />

        {isStarted && (
          <TravelSteps
            stepOneRef={stepOneRef}
            handleComplete={handleGoPractic}
            practicRef={practicRef}
          />
        )}


        {isTravelCompleted && <Practic practicRef={practicRef} />}
      </main>
      <MobileOnlyPlaceholder />
    </div>
  );
}

export default App;
