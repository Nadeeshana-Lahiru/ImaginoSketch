import { ThemeToggle } from "@/components/theme-toggle";
import { ModelIcon } from "@/components/icons/model-icon";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export function Nav() {
  return (
    <div className="h-14 py-2 px-2 md:px-8 border-b flex items-center">
      <div className="flex flex-1 items-center">
        <Link href="/">
          <h1 className={cn("font-light text-xl", spaceMono.className)}>
            <span className="text-yellow-400 ml-10">Imagino</span>
            <span>Sketch</span>
            <span className="text-gray-700 ml-48"> ...Type It 💡 See It 🎨 Create Magic in Seconds 🌟 ... </span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-none items-center space-x-4 mr-10">
        <ThemeToggle />
      </div>
    </div>
  );
}
