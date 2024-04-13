"use client";

import type { NextPage } from "next";
import { loginFormSchema, loginFormSchemaType } from "@/schema";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Image from "next/image";

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormSchemaType>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <main id="login" className="w-full px-4  dark:bg-black">
      <div className="flex h-dvh flex-col items-center">
        <div className="m-auto flex w-full max-w-md flex-col gap-4">
          <div className="mb-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Log in</h1>
              <p className="text-sm">
                Don&apos;t have an account?&nbsp;
                <Link
                  href={"/register"}
                  className="text-blue-500 hover:underline"
                >
                  Register!
                </Link>
              </p>
            </div>
            <div>
              <button
                className="min-h-9 w-full rounded-[4px] bg-slate-200 px-4 py-1.5 text-sm hover:bg-slate-300 dark:bg-zinc-900
              dark:hover:bg-gray-700"
              >
                <span className="flex justify-center">
                  <Image
                    src={"/google-icon.svg"}
                    alt="google"
                    width={20}
                    height={20}
                  />
                  <span className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                    Continue with Google
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center text-sm text-slate-500 before:mr-2 before:h-[1px] before:w-full  before:bg-slate-700 before:bg-opacity-30 after:ml-2 after:h-[1px] after:w-full after:bg-slate-700 after:bg-opacity-30 dark:before:bg-opacity-100 dark:after:bg-opacity-100">
            or
          </div>
          <div className="mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <div className="min-h-[5.5rem]">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  className="mt-1 min-h-9 w-full rounded-[4px] border border-solid border-slate-500 border-opacity-30 bg-slate-100 px-3 dark:bg-stone-950"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="min-h-[5.5rem]">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="mt-1 min-h-9 w-full rounded-[4px] border border-solid border-slate-500 border-opacity-30 bg-slate-100 px-3 dark:bg-stone-950"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-8">
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      placeholder="Remember me"
                      {...register("rememberMe")}
                      className="size-4 appearance-none rounded-[4px] border border-solid border-slate-500 border-opacity-30 checked:appearance-auto dark:bg-stone-950"
                    />
                    <label htmlFor="rememberMe" className="text-sm">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link
                      href={"/forgot-password"}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="min-h-9 w-full rounded-[4px] bg-blue-600 bg-opacity-90 px-4 py-1.5 text-sm text-white hover:bg-opacity-100 dark:bg-opacity-100 dark:hover:bg-opacity-90"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
