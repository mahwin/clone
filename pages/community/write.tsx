import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from ".prisma/client";
import { useRouter } from "next/router";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const router = useRouter();
  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
  const { register, handleSubmit } = useForm<WriteForm>();
  const onValid = (data: WriteForm) => {
    if (loading) return;
    post(data);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data]);
  return (
    <Layout canGoBack title="Write Post">
      <form className="px-4 py-10" onSubmit={handleSubmit(onValid)}>
        <TextArea
          required
          placeholder="Ask a question!"
          register={register("question", { required: true, minLength: 5 })}
        />
        <Button text={loading ? "loading" : "Submit"} />
      </form>
    </Layout>
  );
};

export default Write;
