import { useState } from "react";
import { FaCalendarDays, FaChevronDown } from "react-icons/fa6";
import toast from "react-hot-toast";

function BookingInput({ className = "", icon, ...props }) {
  return (
    <div className={`relative ${className}`}>
      <input
        className="h-14 w-full rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-base text-[var(--color-primary-dark)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary-dark)]"
        {...props}
      />
      {icon ? (
        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-primary-dark)]">
          {icon}
        </span>
      ) : null}
    </div>
  );
}

function HomeBookingSection({ booking }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typesofrooms: "",
    travelers: "",
    checkin: "",
    checkout: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid 10-digit phone number";
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
      const response = await fetch("http://localhost/tamohara/contact.php", {
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
            phone: "",
            typesofrooms: "",
            travelers: "",
            checkin: "",
            checkout: "",
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
    <section id="book" className="soft-section px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="heading-display text-[clamp(54px,18vw,120px)] font-normal uppercase leading-none">
          {booking.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--color-primary-dark)] sm:mt-7 sm:text-lg">
          {booking.description}
        </p>

        <form
          className="mx-auto mt-10 grid max-w-3xl gap-5 text-left sm:mt-12 sm:gap-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <div className="relative">
              <select
                className="h-14 w-full appearance-none rounded-[var(--radius-app)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-base text-[var(--color-primary-dark)] outline-none transition-colors focus:border-[var(--color-primary-dark)]"
                name="typesofrooms"
                required
                value={formData.typesofrooms}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  {booking.fields.room}
                </option>
                {booking.roomOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FaChevronDown
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-primary-dark)]"
                aria-hidden="true"
              />
            </div>

            <BookingInput
              icon={<FaCalendarDays aria-hidden="true" />}
              name="checkin"
              placeholder={booking.fields.arrival}
              required
              type="date"
              value={formData.checkin}
              onChange={handleInputChange}
            />

            <BookingInput
              name="travelers"
              placeholder={booking.fields.visitors}
              required
              value={formData.travelers}
              onChange={handleInputChange}
            />

            <BookingInput
              icon={<FaCalendarDays aria-hidden="true" />}
              name="checkout"
              placeholder={booking.fields.departure}
              required
              type="date"
              value={formData.checkout}
              onChange={handleInputChange}
            />
          </div>

          <BookingInput
            name="name"
            placeholder={booking.fields.fullName}
            required
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />

          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <BookingInput
              name="email"
              placeholder={booking.fields.email}
              required
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <BookingInput
              name="phone"
              placeholder={booking.fields.phone}
              required
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <button
            className="h-14 rounded-full bg-[var(--color-primary)] px-8 text-center text-base font-semibold text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : booking.fields.action}
          </button>
        </form>
      </div>
    </section>
  );
}

export default HomeBookingSection;
