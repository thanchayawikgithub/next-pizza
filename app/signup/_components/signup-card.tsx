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

export const SignUpCard = () => {
  return (
    <Card className="w-[25vw] px-10">
      <CardHeader className="text-center">
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="firstname" placeholder="Firstname" />
        <Input type="lastname" placeholder="Lastname" />
        <Input type="tel" placeholder="Tel" />
        <Button variant="outline">Sign Up</Button>
        <Button>Sign In</Button>
      </CardContent>
    </Card>
  );
};
