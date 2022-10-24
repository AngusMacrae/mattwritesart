import Form from "../../../common/components/Form/Form";

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
      <button type="submit" className="btn">
        Send!
      </button>
    </Form>
  );
}
