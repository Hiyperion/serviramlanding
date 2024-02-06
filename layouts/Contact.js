import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {/* {markdownify(title, "h1", "text-center font-normal")} */}
        <div className="section row pb-0 " style={{display:'flex', justifyContent:'center'}}  >
          {/* <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div> */}
          <div className=" content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4", "text-center font-normal")}
            {markdownify(info.description, "p", "mt-4 text-justify")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
            <Link
                className="btn btn-primary mt-4"
                href="https://api.whatsapp.com/send?phone=%2B593987247132&data=ARBMUboWv3KJQ5ntBEqgDGzFfQdxaFQ2oQ2zOhVku7QcMBWlU7slr5avQ0Ba4U4R2E3IOO_qgPo6E2OK4iDqVgo0ZdOwECrIY4tSMYIXfBx_bjHf72THja3uPd3BRc3uJ0bb8xV6LD-Vk25PjIkhg2qxVA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1gAzoTtFWK50PwGGF9B2pNenIGMnKveh-YYlW8VlyjVqdv8D9s7J900_E"
              >
                CONTACTAR
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
