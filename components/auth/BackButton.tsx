import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button
      variant={"link"}
      className="w-full text-blue-500 font-medium"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};