"use client";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) console.log("Error: ", error);
  }
  async function signOut() {
    await supabase.auth.signOut();
  }

  return session ? (
    <>
      <h2>Hey there {session.user.email}</h2>
      <button
        className="btn btn-primary btn-sm"
        onClick={signOut}>
        Sign out
      </button>
    </>
  ) : (
    <>
      <button
        className="btn btn-primary btn-sm"
        onClick={googleSignIn}>
        Sign in with google
      </button>
    </>
  );
};

export default Home;
