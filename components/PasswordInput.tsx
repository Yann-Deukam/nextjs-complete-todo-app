import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import ErrorHoverCard from "./ErrorHoverCard";

const PasswordInput = ({ name, label }: { name: string; label: string }) => {
  return (
    <div className="grid gap-2 relative">
      <div className="flex items-center">
        <Label htmlFor="password">{label}</Label>
      </div>
      <Input
        id={name}
        type="password"
        required
        placeholder="Your password..."
      />
      <ErrorHoverCard message="Enter a valid password" />
    </div>
  );
};

export default PasswordInput;
