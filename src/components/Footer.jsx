export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-4xl mt-16 py-10 border-t border-border  ">
      <p className="text-text-muted text-sm text-center">
        © {currentYear} Adams Kiptalam | Built with React & TailwindCSS
      </p>
    </footer>
  );
}
