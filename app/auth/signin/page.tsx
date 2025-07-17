import { getCsrfToken } from 'next-auth/react';

export default async function SignIn() {
  const csrfToken = await getCsrfToken();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="space-y-4 p-6 border rounded max-w-sm w-full"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken ?? ''} />
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
