import Form from "../../../common/components/Form/Form";
import Button from "../../../common/components/Button/Button";

export default function ContactForm() {
  return (
    <Form name="contact" subject="Contact">
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        required
      ></textarea>
      <Button type="submit">Send!</Button>
    </Form>
  );
}
