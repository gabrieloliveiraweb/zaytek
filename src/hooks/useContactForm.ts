import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { contactSchema, REVENUE_OPTIONS } from "@/src/lib/contactSchema";
import type { ContactFormData, ContactFormInput } from "@/src/lib/contactSchema";

// ContactFormInput  → TFieldValues  (what the HTML form produces: all strings)
// ContactFormData   → TTransformedValues (what Zod outputs after refine: union literal on revenue)
type Form = ReturnType<typeof useForm<ContactFormInput, unknown, ContactFormData>>;

interface UseContactFormReturn {
  register: Form["register"];
  errors: Form["formState"]["errors"];
  loading: boolean;
  revenueOptions: typeof REVENUE_OPTIONS;
  handleSubmit: Form["handleSubmit"];
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export function useContactForm(): UseContactFormReturn {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched", // validate on blur, then live after first touch
  });

  async function onSubmit(data: ContactFormData): Promise<void> {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await response.json()) as { success: boolean; message: string };

      if (json.success) {
        toast.success("Mensagem enviada! Em breve entraremos em contato.", {
          position: "top-right",
          duration: 5000,
        });
        reset();
      } else {
        toast.error(json.message || "Erro ao enviar. Tente novamente.", {
          position: "top-right",
        });
      }
    } catch {
      toast.error("Falha na conexão. Verifique sua internet e tente novamente.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    register,
    errors,
    loading,
    revenueOptions: REVENUE_OPTIONS,
    handleSubmit,
    onSubmit,
  };
}
