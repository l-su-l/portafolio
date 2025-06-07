const Footer = () => {
  return (
    <div className="pl-1 mx-1 mb-1 flex justify-between items-center flex-wrap text-xs">
      <div className="text-white-500 flex w-full justify-between items-center">
        <p>Terms & Conditions | Privacy Policy</p>
        
        <div className="flex justify-center border w-[40%] py-1 pl-7">

          <div className="social-icon">
            <img src={`${import.meta.env.BASE_URL}assets/github.svg`} alt="github" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon">
            <img src={`${import.meta.env.BASE_URL}assets/download.svg`} alt="gmail" className="w-[35px]" />
          </div>
          <div className="social-icon">
            <img src={`${import.meta.env.BASE_URL}assets/instagram.svg`} alt="instagram" className="w-1/2 h-1/2" />
          </div>

        </div>
      </div>

      <p className="text-white-500 absolute bottom-[2px]">© 2023 By Sebastian A. All rights reserved.</p>
    </div>
  );
};

export default Footer;
