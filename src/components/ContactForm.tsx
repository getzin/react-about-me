import { useRef } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  onSuccess: () => void;
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    const file = fileInputRef.current?.files?.[0];

    console.log({
      ...data,
      file,
    });

    onSuccess();

    reset();
  }

  return (
    <form
      className="flex flex-col gap-6 max-w-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>

        <input
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          type="text"
          placeholder="Your name"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>

        <input
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          type="email"
          placeholder="Your email"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Message</label>

        <textarea
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          rows={6}
          placeholder="Your message"
          {...register("message")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Attachment</label>
        <input
          ref={fileInputRef}
          type="file"
          className="text-sm text-zinc-300"
        />
      </div>

      <button
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
