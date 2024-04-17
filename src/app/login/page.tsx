export default function LogInPage() {
  return (
    <div className="flex flex-col gap-5 items-center pt-10">
      <h1>Log In</h1>
      <p>Log in to your account</p>
      <form className="flex flex-col gap-2 ">
        <label className="grid gap-1">
          Email:
          <input type="email" name="email" className="text-black px-1" />
        </label>
        <label className="grid gap-1">
          Password:
          <input type="password" name="password" className="text-black px-1" />
        </label>
        <button
          className="bg-white mt-5 border border-white/70 rounded-xl text-black"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
