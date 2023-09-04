import BaseLayout from "@/components/Layout/baseLayout";
import { Button, Input, Label } from "@/components/atoms";
import Link from "next/link";

export default function Login() {
  return (
    <BaseLayout title="Mafesyen - Login to Your Account">
      <div className="container mx-auto">
        <div className="mx-3.5 grid min-h-[60vh] place-items-center py-16">
          <div className="w-full max-w-xs space-y-8 md:max-w-sm">
            <h3 className="font-oswald text-2xl font-medium text-black md:text-3xl">
              Login to Your Account
            </h3>

            <div className="space-y-4">
              <button className="flex h-10 w-full items-center justify-center gap-2 border border-[#C4C4C4] hover:border-[#828282] md:h-11">
                <img
                  className="h-auto w-5 object-cover"
                  src="/google.svg"
                  alt="google icon"
                />
                <span className="font-roboto text-sm font-semibold text-[#3F3F3F]">
                  Google
                </span>
              </button>

              <div className="flex items-center justify-center text-center before:mr-4 before:flex-1 before:border-b before:border-[#3F3F3F] after:ml-4 after:flex-1 after:border-b after:border-[#3F3F3F]">
                <p className="font-roboto text-xs text-[#3F3F3F] md:text-sm">
                  or login with
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-full space-y-2 font-roboto text-xs md:text-sm">
                  <Label value="Email" htmlFor="email" />
                  <Input id="email" placeholder="budibegal@gmail.com" />
                </div>

                <div className="w-full space-y-2 font-roboto text-xs md:text-sm">
                  <Label value="Password" htmlFor="password" />
                  <Input id="password" placeholder="********" />
                </div>

                <div className="flex flex-col gap-3 md:flex-row">
                  <Button variant="primary" width="full">
                    sign in
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-center font-roboto text-xs text-[#3F3F3F] md:text-sm">
              New to Mafesyen?{" "}
              <Link href="/register">
                <span className="text-black underline">Create an account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
