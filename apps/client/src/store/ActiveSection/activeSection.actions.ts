import { SectionName } from "@/types";
import { useActiveSectionStore } from ".";

const setActiveSection = (section: SectionName) =>
  useActiveSectionStore.setState((state) => {
    state.activeSection = section;
  });

const setTimeOfLastClick = (time: number) =>
  useActiveSectionStore.setState((state) => {
    state.timeOfLastClick = time;
  });

export { setActiveSection, setTimeOfLastClick };
