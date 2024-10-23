import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import ErrorHoverCard from "./ErrorHoverCard";

const EmailInput = () => {
  return (
    <div className="grid gap-2 relative">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" required />
      <ErrorHoverCard message={"Email required"} />
    </div>
  );
};

export default EmailInput;
