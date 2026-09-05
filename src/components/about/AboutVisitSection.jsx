import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { siteData } from "../../data/site.data";
import toast from "react-hot-toast";

function AboutVisitSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      const firstError = Object.values(formErrors)[0];
      toast.error(firstError);
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost/tamohara/contact-form-two.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response:", response);
      console.log("STATUS:", response.status);

      if (response.ok) {
        const data = await response.json();

        console.log("PHP RESPONSE:", data);

        if (data.status === "success") {
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          toast.success("Your inquiry has been submitted successfully.");
        } else {
          console.error("Error:", data.message);

          toast.error(data.message || "Something went wrong.");
        }
      } else {
        console.error("Error:", response.statusText);

        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="app-section px-5 py-12 sm:px-8 lg:py-12">
      <div className="mx-auto grid w-[92vw] max-w-none gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
        <div>
          <div className="space-y-1 text-base leading-7 text-[var(--color-primary-dark)] sm:text-lg">
            <p>
              Phone/WhatsApp:{" "}
              <a className="font-semibold" href={siteData.phone.href}>
                {siteData.phone.label}
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                className="font-semibold"
                href={siteData.socialLinks.instagram}
                rel="noreferrer"
                target="_blank"
              >
                @tamohara_resort
              </a>
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-display text-3xl font-semibold leading-none">
              Come visit us
            </h2>
            <p className="body-copy mt-3 max-w-xl text-lg leading-7">
              Looking to book directly or ask a question? We are happy to help,
              and always just one message away.
            </p>
          </div>

          <form className="mt-10 grid max-w-2xl gap-5" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-base font-semibold text-[var(--color-primary-dark)]">
                Name
              </span>
              <input
                className="h-12 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-primary-dark)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)]"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-base font-semibold text-[var(--color-primary-dark)]">
                Email Address
              </span>
              <input
                className="h-12 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-primary-dark)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)]"
                name="email"
                placeholder="your@email.com"
                required
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-base font-semibold text-[var(--color-primary-dark)]">
                Message
              </span>
              <textarea
                className="min-h-28 rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-primary-dark)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)]"
                name="message"
                placeholder="Write your message"
                required
                value={formData.message}
                onChange={handleInputChange}
              />
            </label>

            <button
              className="inline-flex w-fit items-center gap-4 rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-bold text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}

              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[var(--color-primary)]">
                <FaArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </form>
        </div>

        <div>
          <h2 className="heading-display text-3xl font-semibold leading-none">
            Where You&apos;ll Find Us
          </h2>
          <p className="body-copy mt-3 text-lg leading-7">
            Nestled in the mist-clad countryside of Sakleshpur, Karnataka.
          </p>
          <p className="mt-1 text-base font-semibold leading-7 text-[var(--color-primary-dark)]">
            {siteData.address}
          </p>

          <div className="mt-9 overflow-hidden bg-[var(--color-primary-dark)]">
            <iframe
              className="h-[360px] w-full border-0 sm:h-[440px]"
              title="Tamohara Resort location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteData.address)}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVisitSection;
