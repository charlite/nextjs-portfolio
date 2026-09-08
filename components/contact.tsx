"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { AnimatePresence, motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const CONTACT_SENT_KEY = "portfolio-contact-sent";

type ContactView = "loading" | "form" | "sent";

export default function Contact() {
  const [view, setView] = useState<ContactView>("loading");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(CONTACT_SENT_KEY) === "true") {
      setView("sent");
    } else {
      setView("form");
    }
  }, []);

  const markAsSent = () => {
    sessionStorage.setItem(CONTACT_SENT_KEY, "true");
    setView("sent");
  };

  return (
    <motion.section
      id="contact"
      className="w-[min(100%,38rem)] scroll-mt-28 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <AnimatePresence mode="wait">
        {view === "sent" ? (
          <motion.div
            key="success"
            className="mt-10 flex flex-col items-center gap-4 px-4"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <FaCheckCircle
              className="text-[5.5rem] text-green-500 sm:text-[7rem]"
              aria-hidden
            />
            <p className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Message successfully sent
            </p>
            <p className="max-w-sm text-sm text-gray-600 dark:text-white/70 sm:text-base">
              Thanks for reaching out. I&apos;ll get back to you as soon as I
              can.
            </p>
          </motion.div>
        ) : view === "form" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 -mt-6 dark:text-white/80">
              Please contact me directly through this form.
            </p>

            <form
              className="mt-10 flex flex-col dark:text-black"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsPending(true);

                const formData = new FormData(e.currentTarget);
                const { error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  setIsPending(false);
                  return;
                }

                setIsPending(false);
                markAsSent();
              }}
            >
              <input
                className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <textarea
                className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <SubmitBtn isPending={isPending} />
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
