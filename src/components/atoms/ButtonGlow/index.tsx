import { cn } from "@/utils";

export const ButtonGlow = ({ children, onClick, className }: { children: string, onClick?: () => void, className?: string }) => {
  return (
    <>
      <div onClick={onClick} className={cn(`cursor-pointer border-animate-wrapper rounded-full w-[150px] min-w--[150px] min-h-[48px]`, className)}>
        <div className="border-animate-content text-white bg-gradient-to-l from-[#2F292B] to-[#040102] rounded-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};
