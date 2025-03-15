import { toast as hotToast } from "react-hot-toast";

type ToastOptions = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  const toast = ({ title, description, variant = "default" }: ToastOptions) => {
    if (variant === "destructive") {
      hotToast.error(`${title}${description ? `: ${description}` : ""}`);
    } else {
      hotToast.success(`${title}${description ? `: ${description}` : ""}`);
    }
  };

  return { toast };
}