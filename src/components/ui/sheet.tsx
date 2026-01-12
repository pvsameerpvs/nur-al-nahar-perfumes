"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/70 backdrop-blur-sm", className)} {...props} />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { side?: "left" | "right" }
>(({ className, children, side = "right", ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 h-full w-[88vw] max-w-sm border border-white/10 bg-black/95 text-white shadow-soft outline-none",
        side === "right" ? "right-0 top-0" : "left-0 top-0",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between p-5">
        <div className="font-serif text-lg">Menu</div>
        <SheetClose className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </div>
      <div className="px-5 pb-6">{children}</div>
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

export { Sheet, SheetTrigger, SheetContent, SheetClose };
