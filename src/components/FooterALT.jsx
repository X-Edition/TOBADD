function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://discord.gg/R3GFgXzyKF"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img
            // src="/discord-icon.png"
            // alt="Discord"
            // className="footer-icon"
          />
          Join our Discord!
        </a>
        <span className="footer-separator">|</span>
        <a href="mailto:tobaccoaddictstudios@gmail.com" className="footer-link">
          tobaccoaddictstudios@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
