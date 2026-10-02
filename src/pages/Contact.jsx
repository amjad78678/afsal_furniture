import { useEffect } from "react";
import { useFormik } from "formik";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import * as Yup from "yup";
import Button from "../components/ui/Button";
import { business, getWhatsAppUrl } from "../config/business";
import { projectCategories } from "../data/categories";
import { setPageMeta } from "../utils/seo";

const initialForm = { name: "", phone: "", projectType: "", location: "", message: "" };

const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be 60 characters or less")
    .required("Name is required"),
  phone: Yup.string()
    .trim()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number")
    .required("Phone number is required"),
  projectType: Yup.string()
    .oneOf(projectCategories, "Choose a valid project type")
    .required("Project type is required"),
  location: Yup.string().trim().max(80, "Location must be 80 characters or less"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be 500 characters or less")
    .required("Message is required"),
});

export default function Contact() {
  useEffect(() => setPageMeta({ title: "Contact", description: "Contact Elegance Furniture through WhatsApp to discuss a furniture or interior project." }), []);

  const formik = useFormik({
    initialValues: initialForm,
    validationSchema: contactSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      const clean = {
        name: values.name.trim(),
        phone: values.phone.trim(),
        projectType: values.projectType,
        location: values.location.trim(),
        message: values.message.trim(),
      };
      const message = `Hello Elegance Furniture,\n\nMy name is ${clean.name}.\n\nProject Type:\n${clean.projectType}\n\nLocation:\n${clean.location || "Not specified"}\n\nPhone:\n${clean.phone}\n\nMessage:\n${clean.message}`;
      window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
      helpers.setSubmitting(false);
    },
  });

  return (
    <main className="bg-ivory px-5 pb-20 pt-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">Contact</p>
          <h1 className="mt-4 font-display text-6xl leading-none text-charcoal sm:text-8xl">Tell us about your space.</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/66">
            Share the room, furniture type and your location. The form opens WhatsApp with your project details because this V1 has no backend.
          </p>
          <div className="mt-8 space-y-4 text-charcoal/70">
            <ContactLine icon={MessageCircle} label="WhatsApp" value="Chat directly" href={getWhatsAppUrl()} />
            {business.phone && <ContactLine icon={Phone} label="Phone" value={business.phone} href={`tel:${business.phone}`} />}
            {business.email && <ContactLine icon={Mail} label="Email" value={business.email} href={`mailto:${business.email}`} />}
            {business.instagram && <ContactLine icon={Instagram} label="Instagram" value="Open Instagram" href={business.instagram} />}
            <ContactLine icon={MapPin} label="Service Area" value={business.address || business.serviceArea} />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} noValidate className="bg-white p-5 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" formik={formik} autoComplete="name" />
            <Field label="Phone" name="phone" formik={formik} type="tel" inputMode="numeric" autoComplete="tel" />
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-charcoal">Project Type <RequiredMark /></span>
              <select
                id="projectType"
                name="projectType"
                value={formik.values.projectType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched.projectType && formik.errors.projectType)}
                aria-describedby={formik.touched.projectType && formik.errors.projectType ? "projectType-error" : undefined}
                className={`mt-2 h-12 w-full border bg-ivory px-4 outline-none transition focus:border-walnut ${
                  formik.touched.projectType && formik.errors.projectType ? "border-red-700/70" : "border-charcoal/14"
                }`}
              >
                <option value="">Select a category</option>
                {projectCategories.map((item) => <option key={item}>{item}</option>)}
              </select>
              <ErrorText id="projectType-error" show={formik.touched.projectType && formik.errors.projectType}>
                {formik.errors.projectType}
              </ErrorText>
            </label>
            <Field label="Location" name="location" formik={formik} autoComplete="address-level2" required={false} />
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-charcoal">Message <RequiredMark /></span>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows="6"
                aria-invalid={Boolean(formik.touched.message && formik.errors.message)}
                aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
                className={`mt-2 w-full border bg-ivory px-4 py-3 outline-none transition focus:border-walnut ${
                  formik.touched.message && formik.errors.message ? "border-red-700/70" : "border-charcoal/14"
                }`}
              />
              <div className="mt-1 flex items-start justify-between gap-3">
                <ErrorText id="message-error" show={formik.touched.message && formik.errors.message}>
                  {formik.errors.message}
                </ErrorText>
                <span className="ml-auto text-xs text-charcoal/45">{formik.values.message.length}/500</span>
              </div>
            </label>
          </div>
          <Button type="submit" disabled={formik.isSubmitting} className="mt-6 w-full disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto">
            Open WhatsApp
          </Button>
        </form>
      </div>
      <div className="mx-auto mt-14 max-w-7xl overflow-hidden rounded-sm bg-charcoal/8">
        {business.locationEmbedUrl ? (
          <iframe title="Elegance Furniture location" src={business.locationEmbedUrl} className="h-80 w-full border-0" loading="lazy" />
        ) : (
          <div className="flex h-80 items-center justify-center p-8 text-center text-charcoal/58">Google Maps embed can be added in business configuration.</div>
        )}
      </div>
    </main>
  );
}

function Field({ label, name, formik, required = true, type = "text", ...props }) {
  const error = formik.touched[name] && formik.errors[name];

  return (
    <label htmlFor={name} className="block">
      <span className="text-sm font-semibold text-charcoal">
        {label} {required && <RequiredMark />}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 h-12 w-full border bg-ivory px-4 outline-none transition focus:border-walnut ${
          error ? "border-red-700/70" : "border-charcoal/14"
        }`}
        {...props}
      />
      <ErrorText id={`${name}-error`} show={error}>
        {formik.errors[name]}
      </ErrorText>
    </label>
  );
}

function ErrorText({ id, show, children }) {
  return show ? (
    <span id={id} className="field-error mt-1 block text-sm font-medium text-red-700">
      {children}
    </span>
  ) : null;
}

function RequiredMark() {
  return <span className="text-red-700" aria-hidden="true">*</span>;
}

function ContactLine({ icon: Icon, label, value, href }) {
  const content = (
    <span className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-clay" />
      <span><strong className="text-charcoal">{label}:</strong> {value}</span>
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : <div>{content}</div>;
}
