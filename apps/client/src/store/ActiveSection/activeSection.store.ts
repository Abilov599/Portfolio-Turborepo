import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { SectionName } from "@/types";
import { setActiveSection, setTimeOfLastClick } from "./activeSection.actions";

interface IActiveSectionState {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: (section: SectionName) => void;
  setTimeOfLastClick: (time: number) => void;
}

const activeSectionInitialState: IActiveSectionState = {
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection,
  setTimeOfLastClick,
};

const useActiveSectionStore = create<IActiveSectionState>()(
  devtools(immer(() => ({ ...activeSectionInitialState }))),
);

export { useActiveSectionStore };
