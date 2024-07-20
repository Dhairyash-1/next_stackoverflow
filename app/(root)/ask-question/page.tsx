import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const userId = "clerk12345";
  if (!userId) redirect("/sign-in");
  const mongoUser = await getUserById({ userId });
  console.log("user", mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a public question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default page;
