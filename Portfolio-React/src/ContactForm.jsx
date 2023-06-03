import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="ContactForm">
      Name: <input type="text" />
      Email: <input type="email" />
      Subject: <input type="text" />
      Message:
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Send Message</button>
    </form>
  );
}
