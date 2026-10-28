"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Logo } from "@/components/brand/logo";
import { Heart, Loader2, Eye, EyeOff } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function LoginPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const registered = searchParams.get("registered");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1">
      {/* Left - Form */}
      <div className="flex flex-1 items-center justify-center px-4 py-4 [@media(max-height:520px)]:py-2">
        <div className="w-full max-w-md">
          <div className="mb-4 flex justify-center [@media(max-height:520px)]:hidden">
            <Logo />
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="p-4 text-center [@media(max-height:520px)]:p-3">
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>
                Sign in to your {siteConfig.shortName} portal or staff dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 [@media(max-height:520px)]:p-3 [@media(max-height:520px)]:pt-0">
              {registered && (
                <Alert className="mb-4 border-amber-200 bg-amber-50">
                  <AlertDescription className="text-amber-800">
                    Account created successfully. Please sign in.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 [@media(max-height:520px)]:space-y-2">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-[var(--brand-primary)] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative mt-1.5">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      aria-pressed={showPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Sign In
                </Button>
              </form>

              <div className="mt-4 text-center text-sm text-[var(--brand-text-light)] [@media(max-height:520px)]:mt-2">
                Access restricted to authorized personnel only.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right - Branding */}
      <div
        className="relative isolate hidden overflow-hidden bg-[var(--brand-primary)] bg-cover bg-center lg:flex lg:flex-1 lg:items-center lg:justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107, 52, 16, 0.65), rgba(107, 52, 16, 0.65)), url('/Images/airo-assets/images/pages/home/architecture-rotunda.jpg')",
        }}
      >
        <div className="relative z-10 max-w-md px-8 text-center text-white">
          <Heart className="mx-auto mb-6 h-16 w-16" aria-hidden="true" />
          <h2 className="mb-4 text-3xl font-bold">
            JDM Presidential Library & Legacy Centre
          </h2>
          <p className="text-lg text-white/90">
            The Northern Star Centre — Preserving Legacy. Building Futures.
          </p>
          <p className="mt-6 text-sm text-white/80">
            Access to staff dashboard for news and campaign management.
          </p>
        </div>
      </div>
    </div>
  );
}
