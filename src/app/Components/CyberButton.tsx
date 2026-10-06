"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ComponentType, type ReactNode, type Ref, type SVGProps } from "react";

type Variant = "primary" | "ghost" | "link";
type Size = "sm" | "md" | "icon";

interface CommonProps {
  /** Label. For `size="icon"` this is the icon itself (or use `icon`); pass an `aria-label` */
  children?: ReactNode;
  /** Heroicon rendered after the label (or alone for `size="icon"`) */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Extra classes for the icon, e.g. a hover nudge direction */
  iconClassName?: string;
  /** primary = filled neon, ghost = dark glass with a neon edge, link = bare text with a neon underline */
  variant?: Variant;
  size?: Size;
  className?: string;
}

type LinkProps = CommonProps &
  Omit<HTMLMotionProps<"a">, "children" | "className"> & { href: string };
type ButtonProps = CommonProps &
  Omit<HTMLMotionProps<"button">, "children" | "className"> & { href?: undefined };

export type CyberButtonProps = LinkProps | ButtonProps;

// Top-left and bottom-right corners cut at 45deg
const CUT = "[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]";

const sizes: Record<Size, string> = {
  sm: "h-10 gap-2 px-4 text-[11px]",
  md: "h-11 gap-3 px-5 text-xs",
  icon: "h-11 w-11 justify-center",
};

// Link variant: underline spans the label, caret sits in the left padding
const linkInset: Record<Exclude<Size, "icon">, { line: string; caret: string }> = {
  sm: { line: "left-4 right-4", caret: "left-1" },
  md: { line: "left-5 right-5", caret: "left-1.5" },
};

const edge: Record<Exclude<Variant, "link">, string> = {
  primary: "bg-violet-400/80 group-hover:bg-violet-200",
  ghost: "bg-violet-500/50 group-hover:bg-violet-300",
};

const fill: Record<Exclude<Variant, "link">, string> = {
  primary: "bg-gradient-to-br from-violet-600 to-violet-800",
  ghost: "bg-gray-950/80 group-hover:bg-violet-950/80",
};

const text: Record<Variant, string> = {
  primary: "text-white",
  ghost: "text-white",
  link: "text-gray-300 hover:text-violet-200",
};

/**
 * Angular "HUD" button: clipped corners, neon edge, monospace label with a
 * terminal caret, and a scan line that sweeps across on hover. The `link`
 * variant drops the frame and reveals the caret and a neon underline on hover.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
const CyberButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, CyberButtonProps>(
  function CyberButton(props, ref) {
    const {
      children,
      icon: Icon,
      iconClassName = "",
      variant = "primary",
      size = "md",
      className = "",
      ...rest
    } = props;

    const isLink = variant === "link";
    const isIcon = size === "icon";

    const classes = `group relative isolate inline-flex items-center whitespace-nowrap font-mono font-medium uppercase tracking-[0.2em] transition-[color,filter] duration-300 drop-shadow-[0_0_0_rgba(139,92,246,0)] hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.6)] focus-visible:outline-none focus-visible:drop-shadow-[0_0_14px_rgba(167,139,250,0.9)] ${isLink ? "focus-visible:text-violet-200" : ""} ${sizes[size]} ${text[variant]} ${className}`;

    const content = (
      <>
        {!isLink && (
          <>
            {/* Neon edge (the 1px gap between this and the fill reads as a border) */}
            <span aria-hidden className={`absolute inset-0 -z-10 transition-colors duration-300 ${CUT} ${edge[variant]}`} />
            <span aria-hidden className={`absolute inset-px -z-10 transition-colors duration-300 ${CUT} ${fill[variant]}`} />

            {/* Scan line sweep */}
            <span aria-hidden className={`absolute inset-px -z-10 overflow-hidden ${CUT}`}>
              <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[320%]" />
            </span>
          </>
        )}

        {isLink && size !== "icon" && (
          // Neon underline grows in from the left
          <span aria-hidden className={`absolute bottom-1.5 ${linkInset[size].line} h-px origin-left scale-x-0 bg-violet-400 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-focus-visible:scale-x-100`} />
        )}

        {!isIcon && (
          <span
            aria-hidden
            className={
              isLink
                ? `absolute ${linkInset[size as Exclude<Size, "icon">].caret} -translate-x-1 text-violet-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100`
                : "text-violet-300 transition-colors group-hover:text-white"
            }
          >
            &gt;
          </span>
        )}

        {isIcon && children}

        {!isIcon && children !== undefined && (
          <span className="relative">
            {children}
            {/* Overlaid so the hidden cursor doesn't widen the button */}
            <span aria-hidden className="absolute left-full opacity-0 group-hover:animate-blink">_</span>
          </span>
        )}

        {Icon && (
          <Icon
            aria-hidden
            className={`flex-shrink-0 transition-transform duration-300 ${isIcon ? "h-5 w-5" : "h-4 w-4"} ${iconClassName}`}
          />
        )}
      </>
    );

    const motionDefaults = {
      whileHover: { y: -1 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.3, ease: "easeInOut" as const },
    };

    if (rest.href !== undefined) {
      return (
        <motion.a
          ref={ref as Ref<HTMLAnchorElement>}
          {...motionDefaults}
          {...(rest as Omit<LinkProps, keyof CommonProps>)}
          className={classes}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        {...motionDefaults}
        {...(rest as Omit<ButtonProps, keyof CommonProps>)}
        className={classes}
      >
        {content}
      </motion.button>
    );
  }
);

export default CyberButton;
