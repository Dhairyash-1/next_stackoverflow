import Metric from "@/components/shared/Metric";
import { getQuestionById } from "@/lib/actions/question.action";
import React from "react";

const Page = async ({ params: { id }, searchParams }: any) => {
  const result = await getQuestionById({ questionId: id });
  return (
    <div className="flex flex-col items-start">
      <div>
        <Metric
          imgUrl={result.question.author.picture}
          alt="user"
          value={result.question.author.name}
          title={``}
          href={`/profile/${result.question.author._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />
      </div>

      <h2 className="text-dark200_light900 h2-semibold">
        {result.question.title}
      </h2>
    </div>
  );
};

export default Page;
