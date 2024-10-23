import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLogo from "./app-logo";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <AppLogo />
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <EmailInput />
          <PasswordInput name="password" label="Password" />
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
          <Button type="submit" className="w-full bg-primary">
            Sign In
          </Button>
          <Button variant="outline" className="w-full">
            Sign-in with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"} className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
