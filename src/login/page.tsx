import { signIn } from 'next-auth/react';

export default function Login() {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const result = await signIn('credentials', {
      redirect: true,
      email: target.email.value,
      password: target.password.value,
    });
    console.log(result);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col p-4">
      <input name="email" type="email" placeholder="Email" required className="mb-2 border p-2" />
      <input name="password" type="password" placeholder="Password" required className="mb-2 border p-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Login
      </button>
    </form>
  );
}
