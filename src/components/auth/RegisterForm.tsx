export default function RegisterForm() {
  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-zinc-900 p-8">
      <h1 className="mb-6 text-2xl font-bold">Create Account</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-green-500 p-3 font-semibold text-black"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}