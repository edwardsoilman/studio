import { BookOpenText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 h-24 md:flex-row">
        <div className="flex flex-col items-center md:flex-row gap-4">
          <BookOpenText className="h-6 w-6 text-muted-foreground" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Meddlington Press. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
