import * as React from "react";
import type { ToastProps } from "@/components/ui/toast";

interface ToastData extends ToastProps {
  id: string;
}

type ToastContextType = {
  toasts: ToastData[];
  toast: (toast: Omit<ToastData, "id">) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);

  const toast = ({ title, description }: Omit<ToastData, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toasts, toast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};
