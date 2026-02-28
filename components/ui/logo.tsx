"use client";

interface LogoProps {
    className?: string;
    variant?: "icon" | "full";
}

export function Logo({ className = "", variant = "full" }: LogoProps) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            {/* SVG Logo Mark - Lightning Bolt + Shield */}
            <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]"
                >
                    {/* Shield Background */}
                    <path
                        d="M20 2L34 8V18C34 27 28 34 20 38C12 34 6 27 6 18V8L20 2Z"
                        fill="url(#shield-gradient)"
                        stroke="url(#shield-stroke)"
                        strokeWidth="1.5"
                    />

                    {/* Lightning Bolt */}
                    <path
                        d="M22 10L14 22H20L18 30L26 18H20L22 10Z"
                        fill="white"
                        className="drop-shadow-sm"
                    />

                    {/* Gradients */}
                    <defs>
                        <linearGradient id="shield-gradient" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#DC2626" />
                            <stop offset="100%" stopColor="#991B1B" />
                        </linearGradient>
                        <linearGradient id="shield-stroke" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#EF4444" />
                            <stop offset="100%" stopColor="#DC2626" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Wordmark */}
            {variant === "full" && (
                <div className="flex flex-col justify-center">
                    <span className="text-xl font-bold tracking-tight leading-none">
                        <span className="text-foreground">Flash</span>
                        <span className="gradient-text-red">Fender</span>
                    </span>
                </div>
            )}
        </div>
    );
}
