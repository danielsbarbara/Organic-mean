export function InfoContainerPopUp() {
    return (
      <div className="w-[30px] h-[144.88px]">
        <div className="flex justify-center items-center gap-3">
          {/* Ícones de informações aqui */}
          <a href="https://www.whatsapp.com/">
            <img
              className="w-7 h-8 md:w-[40px] md:h-[40px]"
              src="./icons/WhatsAppLogo.svg"
              alt="WhatsApp"
            />
          </a>
          <a href="https://www.gmail.com/">
            <img
              className="w-7 h-8 md:w-[50px] md:h-[40px]"
              src="./icons/EmailLogo.svg"
              alt="Email"
            />
          </a>
          <a href="https://www.instagram.com/_organic._.mean_/">
            <img
              className="w-7 h-8 md:w-[40px] md:h-[40px]"
              src="./icons/InstagramLogo.svg"
              alt="Instagram"
            />
          </a>
          <a href="https://www.etsy.com/">
            <img
              className="w-6 h-8 md:w-[65px] md:h-[40px]"
              src="./icons/EtsyLogo.svg"
              alt="Etsy"
            />
          </a>
        </div>
      </div>
    );
  }
  