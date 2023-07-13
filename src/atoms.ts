import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: isDarkPersistAtom } = recoilPersist({
  key: "isDarkPersistAtom",
  storage: localStorage,
  converter: JSON,
});

export const isDarkState = atom<boolean[]>({
  key: "isDarkState",
  default: [false],
  effects_UNSTABLE: [isDarkPersistAtom],
});
