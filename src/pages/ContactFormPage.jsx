import { useRef, useState } from "react";
import { FaCalendarDays, FaChevronDown } from "react-icons/fa6";
import AboutHeroBanner from "../components/about/AboutHeroBanner";
import SiteFooter from "../components/layout/SiteFooter";
import StickySiteHeader from "../components/layout/StickySiteHeader";
import toast from "react-hot-toast";

function ContactInput({ label, ...props }) {
  return (
    <label className="grid gap-3">
      <span className="meta-text text-[var(--color-muted)]">
        {label}
      </span>

      <input
        className="h-[58px] rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 text-base text-[var(--color-primary-dark)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary-dark)]"
        {...props}
      />
    </label>
  );
}

function ContactSelect({ children, label, ...props }) {
  return (
    <label className="grid gap-3">
      <span className="meta-text text-[var(--color-muted)]">
        {label}
      </span>

      <div className="relative">
        <select
          className="h-[58px] w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 text-base text-[var(--color-primary-dark)] outline-none transition-colors focus:border-[var(--color-primary-dark)]"
          {...props}
        >
          {children}
        </select>

        <FaChevronDown
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-primary-dark)]"
          aria-hidden="true"
        />
      </div>
    </label>
  );
}

function ContactFaq({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 pb-20 pt-10 sm:px-6 lg:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-4">{faq.eyebrow}</p>

          <h2 className="heading-display text-[clamp(34px,4.8vw,58px)] font-semibold leading-[1.05]">
            {faq.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className="border-t border-[var(--color-border)] py-5"
                key={item.question}
              >
                <button
                  className="flex w-full items-center justify-between gap-5 text-left"
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[var(--color-primary-dark)]">
                    {item.question}
                  </span>

                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-xs text-[var(--color-primary-dark)]">
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="body-copy pt-4 text-sm leading-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactFormPage({ data }) {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typesofrooms: "",
    travelers: "",
    checkin: "",
    checkout: "",
    message: "",
  });

  const arrivalInputRef = useRef(null);
  const departureInputRef = useRef(null);

  const today = new Date().toISOString().split("T")[0];

  const openDatePicker = (inputRef) => {
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone =
        "Please enter a valid 10-digit phone number";
    }

    if (!formData.typesofrooms) {
      errors.typesofrooms = "Please select a room type";
    }

    if (!formData.travelers.trim()) {
      errors.travelers = "Number of travelers is required";
    }

    if (!formData.checkin) {
      errors.checkin = "Check-in date is required";
    }

    if (!formData.checkout) {
      errors.checkout = "Check-out date is required";
    }

    if (
      formData.checkin &&
      formData.checkout &&
      formData.checkout <= formData.checkin
    ) {
      errors.checkout =
        "Check-out date must be after check-in date";
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
      const response = await fetch(
        "http://localhost/tamohara/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      console.log("Response:", response);
      console.log("STATUS:", response.status);

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`,
        );
      }

      const responseData = await response.json();

      console.log("PHP RESPONSE:", responseData);

      if (responseData.status === "success") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          typesofrooms: "",
          travelers: "",
          checkin: "",
          checkout: "",
          message: "",
        });

        toast.success(
          "Your inquiry has been submitted successfully.",
        );
      } else {
        console.error("Error:", responseData.message);

        toast.error(
          responseData.message ||
            "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error(
        "An error occurred. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="app-section min-h-svh">
      <div className="relative z-10 bg-[var(--color-surface)]">
        <StickySiteHeader />

        <div className="p-2 sm:p-3">
          <AboutHeroBanner
            hero={data.hero}
            showBooking={false}
          />
        </div>

        <section
          className="px-5 py-12 sm:px-8 lg:py-12"
          id="contact-form"
        >
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.78fr_1fr] lg:gap-12">
            <div className="lg:pt-4">
              <p className="section-eyebrow mb-6">
                {data.eyebrow}
              </p>

              <h1 className="heading-display max-w-xl text-[clamp(42px,12vw,86px)] font-semibold leading-[1]">
                {data.title}
              </h1>

              <p className="body-copy mt-6 text-lg leading-8 sm:mt-8 sm:text-xl">
                {data.subtitle}
              </p>

              <p className="body-copy mt-4 max-w-md text-lg leading-8 sm:mt-5 sm:text-xl">
                {data.description}
              </p>

              <div className="mt-12 lg:mt-12">
                <h2 className="heading-display text-3xl font-semibold leading-none sm:text-4xl">
                  {data.detailsTitle}
                </h2>

                <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-9">
                  {data.detailGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="heading-display text-2xl font-semibold leading-none">
                        {group.title}
                      </h3>

                      <div className="body-copy mt-4 space-y-1 text-base leading-7">
                        {group.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form
              className="grid gap-6 lg:gap-8 lg:pt-36"
              onSubmit={handleSubmit}
            >
              <ContactInput
                label="Full Name*"
                name="name"
                placeholder="John"
                required
                value={formData.name}
                onChange={handleInputChange}
              />

              <ContactInput
                label="Email Address*"
                name="email"
                placeholder="e.g. john.smith@email.com"
                required
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <ContactInput
                label="Phone Number*"
                name="phone"
                placeholder="e.g. 98765 43210"
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={formData.phone}
                onChange={handleInputChange}
              />

              <ContactSelect
                label="Destination of Interest*"
                name="typesofrooms"
                required
                value={formData.typesofrooms}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Type Of Rooms
                </option>

                {data.form.destinations.map((destination) => (
                  <option
                    key={destination}
                    value={destination}
                  >
                    {destination}
                  </option>
                ))}
              </ContactSelect>

              <ContactInput
                label="Number of Travelers*"
                name="travelers"
                placeholder="e.g. 2 Adults, 1 Child"
                required
                value={formData.travelers}
                onChange={handleInputChange}
              />

              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                <label className="grid gap-3">
                  <span className="meta-text text-[var(--color-muted)]">
                    Check-in Date*
                  </span>

                  <div className="relative">
                    <input
                      className="booking-date-input h-[58px] w-full rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 pr-14 text-base text-[var(--color-primary-dark)] outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                      type="date"
                      name="checkin"
                      min={today}
                      required
                      ref={arrivalInputRef}
                      value={formData.checkin}
                      onChange={handleInputChange}
                      onFocus={() =>
                        openDatePicker(arrivalInputRef)
                      }
                    />

                    <button
                      className="absolute right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
                      type="button"
                      onClick={() =>
                        openDatePicker(arrivalInputRef)
                      }
                      aria-label="Open check-in date calendar"
                    >
                      <FaCalendarDays aria-hidden="true" />
                    </button>
                  </div>
                </label>

                <label className="grid gap-3">
                  <span className="meta-text text-[var(--color-muted)]">
                    Check-out Date*
                  </span>

                  <div className="relative">
                    <input
                      className="booking-date-input h-[58px] w-full rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 pr-14 text-base text-[var(--color-primary-dark)] outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                      type="date"
                      name="checkout"
                      min={formData.checkin || today}
                      required
                      ref={departureInputRef}
                      value={formData.checkout}
                      onChange={handleInputChange}
                      onFocus={() =>
                        openDatePicker(departureInputRef)
                      }
                    />

                    <button
                      className="absolute right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
                      type="button"
                      onClick={() =>
                        openDatePicker(departureInputRef)
                      }
                      aria-label="Open check-out date calendar"
                    >
                      <FaCalendarDays aria-hidden="true" />
                    </button>
                  </div>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="meta-text text-[var(--color-muted)]">
                  Special Requests / Notes
                </span>

                <textarea
                  className="min-h-[220px] rounded-[var(--radius-app)] border border-[var(--color-border)] bg-white px-6 py-4 text-base text-[var(--color-primary-dark)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary-dark)]"
                  name="message"
                  placeholder="Write a message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </label>

              <button
                className="primary-button w-fit rounded-full px-8"
                type="submit"
                disabled={isLoading}
              >
                {isLoading
                  ? "Submitting..."
                  : data.form.submitLabel}
              </button>
            </form>
          </div>
        </section>

        <ContactFaq faq={data.faq} />
      </div>

      <SiteFooter reveal />
    </main>
  );
}

export default ContactFormPage;