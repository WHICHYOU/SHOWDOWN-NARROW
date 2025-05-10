"use client";

import { useToast } from "./use-toast";
import { Toast, ToastTitle, ToastDescription, ToastClose } from "./toast";
import { ToastViewport } from "@radix-ui/react-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(({ id, title, description, variant }) => (
        <Toast key={id} variant={variant}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport className="fixed bottom-4 right-4 z-50 outline-none" />
    </>
  );
}

// "use client";

// import { useToast } from "@/components/ui/use-toast";
// import {
//   Toast,
//   ToastTitle,
//   ToastDescription,
//   ToastClose,
// } from "@/components/ui/toast";

// export function Toaster() {
//   const { toasts } = useToast();

//   return (
//     <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
//       {toasts.map(({ id, title, description }) => (
//         <Toast key={id}>
//           <div className="grid gap-1">
//             {title && <ToastTitle>{title}</ToastTitle>}
//             {description && <ToastDescription>{description}</ToastDescription>}
//           </div>
//           <ToastClose />
//         </Toast>
//       ))}
//     </div>
//   );
// }
