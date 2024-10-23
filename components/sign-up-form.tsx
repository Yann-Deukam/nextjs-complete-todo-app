import React from "react";
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
import ErrorHoverCard from "./ErrorHoverCard";

const SignUp = () => {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <AppLogo />
        <CardTitle className="text-2xl">Sign-up</CardTitle>
        <CardDescription>
          Enter relevant information for the different fields
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2 relative">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
            <ErrorHoverCard message="Enter a name" />
          </div>
          <EmailInput />
          <PasswordInput name="password" label="Password" />
          <PasswordInput name="confirmPassword" label="Confirm password" />
          <Button type="submit" className="w-full bg-primary">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href={"/"} className="underline">
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUp;
