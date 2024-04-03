import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const LoginCard = () => {
  return (
    <Card className="w-[25vw] px-10">
      <CardHeader className="text-center">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        {/* <Input type="firstname" placeholder="Firstname" />
        <Input type="lastname" placeholder="Lastname" />
        <Input type="tel" placeholder="Tel" /> */}
        <Button>Sign In</Button>
        <Link href="/signup">
          <Button variant="outline" className="w-full">
            Sign Up
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
