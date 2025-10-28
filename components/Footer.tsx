import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <p>© 2025 Pailot. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors duration-300 hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors duration-300 hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
