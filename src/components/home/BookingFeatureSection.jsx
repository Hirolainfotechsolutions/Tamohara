import { useRef, useState } from "react";
import { FaArrowUp, FaCalendarDays, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  travelers: "",
  checkin: "",
  checkout: "",
};

function BookingFeatureSection({ booking }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

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
    const formErrors = {};

    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      formErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      formErrors.email = "Please enter a valid email address";
    }

    if (!formData.travelers) {
      formErrors.travelers = "Please select the number of visitors";
    }

    if (!formData.checkin) {
      formErrors.checkin = "Check-in date is required";
    }

    if (!formData.checkout) {
      formErrors.checkout = "Check-out date is required";
    }

    if (
      formData.checkin &&
      formData.checkout &&
      formData.checkout <= formData.checkin
    ) {
      formErrors.checkout = "Check-out date must be after check-in date";
    }

    return formErrors;
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
      const response = await fetch("http://localhost/tamohara/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response:", response);
      console.log("STATUS:", response.status);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      console.log("PHP RESPONSE:", data);

      if (data.status === "success") {
        setFormData(initialFormData);

        toast.success("Your booking inquiry has been submitted successfully.");
      } else {
        console.error("Error:", data.message);

        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking form:", error);

      toast.error(
        "An error occurred while submitting your inquiry. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="app-section px-2 py-2 sm:px-3">
      <div className="relative overflow-hidden rounded-[var(--radius-app)] bg-[var(--color-primary-dark)] lg:min-h-[calc(100svh-24px)]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={booking.image}
          alt={booking.imageAlt}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hero-overlay-start)_0%,var(--color-hero-overlay-mid)_44%,var(--color-hero-overlay-end)_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-12 lg:min-h-[calc(100svh-24px)] lg:grid-cols-[0.95fr_0.78fr] lg:gap-10 lg:px-10">
          <div className="max-w-2xl text-[var(--color-white)]">
            <h2 className="heading-display text-[clamp(36px,10vw,68px)] font-semibold leading-[1.05] text-[var(--color-white)]">
              {booking.titleLines?.length
                ? booking.titleLines.map((line) => (
                    <span className="block lg:whitespace-nowrap" key={line}>
                      {line}
                    </span>
                  ))
                : booking.title}
            </h2>

            <p className="banner-copy mt-5 max-w-lg font-semibold sm:mt-7">
              {booking.description}
            </p>

            <Link
              className="group mt-7 inline-flex min-h-14 items-center gap-0 overflow-hidden rounded-[var(--radius-app)] border border-white/70 text-sm font-bold text-[var(--color-white)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-dark)] sm:mt-10"
              to={booking.action.href}
            >
              <span className="px-5">{booking.action.label}</span>

              <span className="grid h-14 w-14 place-items-center bg-[var(--color-white)] text-[var(--color-primary-dark)] transition-colors duration-300 group-hover:bg-[var(--color-primary-dark)] group-hover:text-[var(--color-white)]">
                <FaArrowUp
                  className="rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          <form
            className="rounded-[var(--radius-app)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] sm:p-10"
            onSubmit={handleSubmit}
          >
            <p className="meta-text mb-5 text-[var(--color-primary-dark)]">
              ({booking.form.eyebrow})
            </p>

            <h3 className="heading-display mb-7 text-[clamp(34px,10vw,58px)] font-semibold leading-none sm:mb-10">
              {booking.form.title}
            </h3>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  className="h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-primary-dark)] bg-transparent px-5 text-base text-[var(--color-primary-dark)] outline-none"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <input
                  className="h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-primary-dark)] bg-transparent px-5 text-base text-[var(--color-primary-dark)] outline-none"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  className="h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-primary-dark)] bg-transparent px-5 text-base text-[var(--color-primary-dark)] outline-none"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <label className="relative block">
                  <select
                    className="h-14 w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-primary-dark)] bg-transparent px-5 pr-12 text-base text-[var(--color-primary-dark)] outline-none"
                    name="travelers"
                    required
                    value={formData.travelers}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Number of Visitors
                    </option>

                    {booking.form.peopleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <FaChevronDown
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  className="relative block cursor-pointer"
                  onClick={() => openDatePicker(arrivalInputRef)}
                >
                  <input
                    className="booking-date-input h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-primary-dark)] bg-transparent px-5 pr-12 text-base text-[var(--color-primary-dark)] outline-none"
                    min={today}
                    name="checkin"
                    onFocus={() => openDatePicker(arrivalInputRef)}
                    required
                    ref={arrivalInputRef}
                    type="date"
                    value={formData.checkin}
                    onChange={handleInputChange}
                  />

                  <button
                    className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
                    type="button"
                    onClick={() => openDatePicker(arrivalInputRef)}
                    aria-label="Open check-in date calendar"
                  >
                    <FaCalendarDays aria-hidden="true" />
                  </button>
                </label>

                <label
                  className="relative block cursor-pointer"
                  onClick={() => openDatePicker(departureInputRef)}
                >
                  <input
                    className="booking-date-input h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-primary-dark)] bg-transparent px-5 pr-12 text-base text-[var(--color-primary-dark)] outline-none"
                    min={formData.checkin || today}
                    name="checkout"
                    onFocus={() => openDatePicker(departureInputRef)}
                    required
                    ref={departureInputRef}
                    type="date"
                    value={formData.checkout}
                    onChange={handleInputChange}
                  />

                  <button
                    className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]"
                    type="button"
                    onClick={() => openDatePicker(departureInputRef)}
                    aria-label="Open check-out date calendar"
                  >
                    <FaCalendarDays aria-hidden="true" />
                  </button>
                </label>
              </div>
              <button
                className="h-14 rounded-[var(--radius-app)] bg-[var(--color-primary)] text-base font-semibold text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : booking.form.submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingFeatureSection;
