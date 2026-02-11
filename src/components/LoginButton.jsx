import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="inline"
    >
      <button
        type="submit"
        className="bg-pink-300 text-black px-3 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}
