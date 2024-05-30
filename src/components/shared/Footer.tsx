function Footer() {
  return (
    <footer className="bg-slate-950 py-4">
      <section className="container mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-slate-50">
          &copy; {new Date().getFullYear()} Thubflix. All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
