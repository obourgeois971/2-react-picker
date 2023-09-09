import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/DisplayDifficulty/MenuList/MenuList";
import { MenuListItem } from "./components/DisplayDifficulty/MenuListItem/MenuListItem";
import s from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }
  return (
    <div>
      <h1 className={s.title}>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          onItemClickTest={updateDifficulty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
