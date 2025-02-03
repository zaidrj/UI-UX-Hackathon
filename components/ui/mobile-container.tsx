interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileContainer({ children, className = "" }: MobileContainerProps) {
  return (
    <div className={`px-4 md:px-0 text-center md:text-left ${className}`}>
      {children}
    </div>
  );
}