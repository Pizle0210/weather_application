import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { icons } from "@/lib/data";
import { Command, CommandInput } from "./ui/command";

export default function SearchBox() {
  return (
    <div className="search--btn">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border inline-flex items-center justify-center text-sm font-light hover:dark:bg-[#131313] hover:bg-slate-100 transition ease-in-out duration-150 border-slate-300"
          >
            <p className="text-sm text-muted-foreground">search here...</p>
            <div className="command bg-gray-300 text-black !font-medium flex dark:bg-[#262626 ] py-[2px] pl-[0.33rem] pr-[0.45rem] rounded-sm ml-[17rem] items-center space-x-2 ">
              {icons.commandIcon}
              <span className="text-[1rem]">F</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <Command className="rounded-md border shadow-md">
            <CommandInput placeholder="search here" />
            <ul className="p-3">
              <p className="p-2 text-sm text-muted-foreground">Suggestions</p>
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}
