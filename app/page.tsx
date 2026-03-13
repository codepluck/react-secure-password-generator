import PasswordGenerator from "./components/password-generator";
export default function Home() {
  return (
    <>
      <section className="container mx-auto">
        <section className="max-w-xl mx-auto flex flex-col h-screen items-center justify-center">
          <PasswordGenerator
            length={10}
            includeUppercase={true}
            includeLowercase={true}
            includeNumbers={true}
            includeSymbols={true}
          />
        </section>
      </section>
    </>
  );
}
