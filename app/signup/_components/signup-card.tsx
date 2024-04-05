"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useState } from "react";

export const SignUpCard = () => {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");

  const signUp = async () => {
    let { data: signUpUser, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error);
    }

    console.log(signUpUser);

    if (signUpUser) {
      const { error: insertUserError } = await supabase
        .from("users")
        .insert([{ firstname, lastname, tel, id: signUpUser.user!.id }]);

      if (insertUserError) {
        console.error(insertUserError);
      }

      const { error: insertCartError } = await supabase
        .from("carts")
        .insert([{ user_id: signUpUser.user!.id }]);

      if (insertCartError) {
        console.error(insertCartError);
      }
    }
  };

  return (
    <Card className="w-[25vw] px-10">
      <CardHeader className="text-center">
        <CardTitle>Sign Up</CardTitle>
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
        <Input
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          placeholder="Tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <Button variant="outline" onClick={signUp}>
          Sign Up
        </Button>
        <Link href={"/login"}>
          <Button className="w-full">Sign In</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
