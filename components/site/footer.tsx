import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer className="site-footer content-container">
        <a
          href="#"
          className="footer-brand"
          aria-label="Felix Controls Limited, home"
        >
          <Image
            src="/assets/felix-logo-transparent.png"
            width="270"
            height="250"
            alt="Felix"
            unoptimized
          />
        </a>
        <p>
          © <span id="year">2026</span> Felix Controls Limited. All rights
          reserved.
        </p>
        <button className="text-link" data-open="privacy-dialog">
          Privacy
        </button>
        <span className="footer-location">DHAKA, BANGLADESH</span>
      </footer>
    </>
  );
}
