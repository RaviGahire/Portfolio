export const ContactForm = () => {
  return (
    <div className="flex justify-center items-center  bg-neutral-950 font-inter font-medium text-gray-300 mt-6 p-4">
      <form
        action="submit"
        className=" w-full max-w-200 flex flex-col gap-6 h-100"
      >
        {/* Top Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="userName"
            placeholder="Your good name"
            required
            className="text-[14px] font-light w-full bg-neutral-950 border border-dark-borders/50  rounded-lg px-4 py-3 text-white placeholder-secondary-text focus:outline-none focus:border-lavender/50 focus:ring-0.5 focus:ring-lavender transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email or X-ID"
            className="text-[14px] font-light w-full bg-neutral-950 border border-dark-borders/50  rounded-lg px-4 py-3 text-white placeholder-secondary-text focus:outline-none focus:border-lavender/50 focus:ring-0.5 focus:ring-lavender transition-all duration-200"
          />
        </div>

        {/* Text Area */}
        <div className="w-full">
          <textarea
            name="message"
            placeholder="Your Message"
            className="text-[14px] font-light w-full bg-neutral-950 border border-dark-borders/50 
            rounded-lg px-4 py-3 text-white placeholder-secondary-text focus:outline-none
            focus:border-lavender/50 focus:ring-0.5 focus:ring-lavender transition-all duration-200 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-secondary-text hover:text-primary-text w-fit cursor-pointer font-semibold rounded-lg bg-white hover:bg-(image:--vite-gradient) 
            bg-size-[200%_200%] bg-left  hover:bg-right  transition-[background-position]  duration-500 ease-linear
            px-4 py-3 hover:bg-gray-200 active:scale-[0.98]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
