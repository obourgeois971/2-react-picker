import { useState } from "react";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constant";

export function MenuList({ difficulty, onItemClickTest }) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((diff) => {
        console.log("DIFFICULTIES");
        return (
          <MenuListItem
            onClicks={onItemClickTest}
            difficulty={diff}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
}
