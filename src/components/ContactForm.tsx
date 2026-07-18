import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const contactSchema = yup.object({
  name: yup
    .string()
    .required("Please enter your name.")
    .min(2, "Your name must contain at least 2 characters."),

  email: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address."),

  message: yup
    .string()
    .required("Please enter a message.")
    .min(10, "Your message must contain at least 10 characters."),
});

type ContactFormProps = {
  onSuccess: () => void;
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

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
      noValidate
      //onSubmit={handleSubmit(onSubmit)} //Zeigt Error
      onSubmit={(e) => handleSubmit(onSubmit)(e)}
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>

        <input
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          type="text"
          placeholder="Your name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>

        <input
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          type="email"
          placeholder="Your email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Message</label>

        <textarea
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          rows={6}
          placeholder="Your message"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Attachment</label>
        <input
          ref={fileInputRef}
          type="file"
          className="cursor-pointer text-sm text-zinc-300"
        />
      </div>

      <button
        className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:opacity-50 disabled:hover:bg-zinc-600"
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}
