import { LoginCard } from "./_components/login-card";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center mt-28">
      <LoginCard />
    </div>
  );
}
