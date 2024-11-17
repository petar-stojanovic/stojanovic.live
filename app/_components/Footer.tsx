export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-12 pb-4 text-center mx-auto max-w-2xl">
      &copy; {currentYear} Petar Stojanovic
    </footer>
  );
}
