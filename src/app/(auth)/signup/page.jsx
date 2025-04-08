import SignupPage from "./SignupPage";

export const metadata = {
  title: "تسجيل حساب جديد", // Default title for the auth section
};

export default function Signup() {
  return (
    <>
      <div className="mt-8">
        <SignupPage />
      </div>
    </>
  );
}
