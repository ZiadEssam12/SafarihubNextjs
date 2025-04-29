export default function AuthLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <main>{children}</main>
    </div>
  );
}
