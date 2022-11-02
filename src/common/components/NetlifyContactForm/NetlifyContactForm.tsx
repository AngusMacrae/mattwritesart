import { useRef } from "react";
import { useRouter } from "next/router";

export default function NetlifyContactForm({
  name,
  subject,
  children,
  className = "",
}) {
  const formRef = useRef();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      router.push("/thankyou");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      method="POST"
      name={name}
      className={className}
      data-netlify="true"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input type="hidden" name="form-name" value={name} />
      <input type="hidden" name="subject" value={subject} />
      {children}
    </form>
  );
}
