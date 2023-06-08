import React from "react";
import SignupForm from "../../components/Forms/SignupForm";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="container mx-auto  min-h-screen flex justify-center items-center">
      <div className="w-96 px-4 py-8 rounded-lg bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <SignupForm/>
        <Link to={'/login'} className="underline text-gray-500 dark:text-gray-400">already have an account ?</Link>
      </div>
    </div>
  );
}
