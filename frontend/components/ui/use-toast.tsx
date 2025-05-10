"use client";

import * as React from "react";

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
}

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

  const toast = ({ title, description, variant }: Omit<ToastData, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, description, variant }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
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

// "use client";

// import * as React from "react";

// // Core toast props interface (title, description, variant)
// export interface ToastProps {
//   title?: React.ReactNode;
//   description?: React.ReactNode;
//   variant?: "default" | "destructive";
// }

// // Internal representation with ID
// interface ToastData extends ToastProps {
//   id: string;
// }

// type ToastContextType = {
//   toasts: ToastData[];
//   toast: (toast: Omit<ToastData, "id">) => void;
// };

// const ToastContext = React.createContext<ToastContextType | undefined>(
//   undefined
// );

// export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [toasts, setToasts] = React.useState<ToastData[]>([]);

//   const toast = ({ title, description, variant }: Omit<ToastData, "id">) => {
//     const id = crypto.randomUUID();
//     const newToast: ToastData = { id, title, description, variant };
//     setToasts((prev) => [...prev, newToast]);

//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== id));
//     }, 3000);
//   };

//   return (
//     <ToastContext.Provider value={{ toasts, toast }}>
//       {children}

//       {/* Render toasts */}
//       <div className="fixed bottom-4 right-4 z-50 space-y-2">
//         {toasts.map(({ id, title, description, variant }) => (
//           <div
//             key={id}
//             className={`bg-white dark:bg-gray-900 rounded-md border shadow px-4 py-3 w-72 animate-fade-in ${
//               variant === "destructive"
//                 ? "border-red-400 text-red-800"
//                 : "border-indigo-300"
//             }`}
//           >
//             <p className="font-semibold">{title}</p>
//             {description && (
//               <p className="text-sm text-muted-foreground">{description}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </ToastContext.Provider>
//   );
// };

// export const useToast = (): ToastContextType => {
//   const context = React.useContext(ToastContext);
//   if (!context) {
//     throw new Error("useToast must be used within ToastProvider");
//   }
//   return context;
// };
