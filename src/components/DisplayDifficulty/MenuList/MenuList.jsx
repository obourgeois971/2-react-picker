import { useState } from "react";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
export function MenuList({ difficulty, onItemClickTest }) {
  return (
    <div className={s.container}>
      <MenuListItem
        onClicks={onItemClickTest}
        difficulty="Low"
        isSelected={difficulty === "Low"}
      />
      <MenuListItem
        onClicks={onItemClickTest}
        difficulty="Medimum"
        isSelected={difficulty === "Medimum"}
      />
      <MenuListItem
        onClicks={onItemClickTest}
        difficulty="High"
        isSelected={difficulty === "High"}
      />
      <MenuListItem
        onClicks={onItemClickTest}
        difficulty="Insane"
        isSelected={difficulty === "Insane"}
      />
    </div>
  );
}
