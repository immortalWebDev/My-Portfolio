import Wrapper from "./UI/Wrapper";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl flex h-[22rem] lg:h-[28rem] ">
          <div className="text-center">
            <p className="text-2xl">Call me to connect</p>
            <div className="flex mb-8">
              <a
                href="mailto:pgbadgujar007@gmail.com"
                className="md:text-xl tracking-wider"
              >
                pgbadgujar007@gmail.com
              </a>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <a
                href="https://wa.me/917774835449"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-xl tracking-wider"
              >
                My WhatsApp (+91-7774835449)
              </a>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-xl tracking-wider"
              >
                My LinkedIn
              </a>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <a
                href="https://github.com/immortalWebDev"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-xl tracking-wider "
              >
                My GitHub (immortalWebDev)
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
