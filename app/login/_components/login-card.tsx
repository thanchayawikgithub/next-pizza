"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginCard = () => {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error);
    }

    if (data) {
      router.replace("/");
    }
  };

  return (
    <Card className="w-[25vw] px-10">
      <CardHeader className="text-center">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signIn}>Sign In</Button>
        <Link href="/signup">
          <Button variant="outline" className="w-full">
            Sign Up
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
