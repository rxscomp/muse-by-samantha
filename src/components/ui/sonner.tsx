import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      duration={5500}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:w-[min(94vw,460px)] group-[.toaster]:px-6 group-[.toaster]:py-5 group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-xl data-[type=success]:!border-emerald-500 data-[type=error]:!border-red-500",
          title: "group-[.toast]:text-[16px] group-[.toast]:font-medium",
          description: "group-[.toast]:text-[14px] group-[.toast]:leading-relaxed group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
