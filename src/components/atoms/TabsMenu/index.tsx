import type { ReactNode, FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

export interface TabsData {
  label: string;
  content: ReactNode;
}

type TabsProps = {
  items: TabsData[];
  isBetween?: boolean;
};

export const Tabs: FC<TabsProps> = ({ items, isBetween = false }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<Array<HTMLButtonElement>>([]);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const contents = useMemo(
    () => items[activeTabIndex].content,
    [activeTabIndex, items]
  );

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div>
      <div className="relative">
        <div
          className={`flex ${
            isBetween ? "items-center justify-between" : "gap-4"
          } rounded-lg  p-1 px-1`}
        >
          {items.map((tab, idx) => (
            <button
              key={idx}
              type="button"
              ref={(el: HTMLButtonElement | null) =>
                (tabsRef.current[idx] = el as HTMLButtonElement)
              }
              className={`text-center py-2 text-xs rounded px-4 font-semibold ${
                activeTabIndex === idx
                  ? "bg-primary text-white"
                  : "text-soft bg-[#5D636F1A]"
              }`}
              onClick={() => handleTabClick(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span
          className="absolute bottom-3 block h-1 rounded-lg bg-primary-1 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      {typeof contents === "string" ? (
        <div className="mt-10">{contents}</div>
      ) : (
        contents
      )}
    </div>
  );
};
