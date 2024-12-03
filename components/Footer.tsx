export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-2xl pt-12 pb-4 text-center">
      &copy; {currentYear} Petar Stojanovic
    </footer>
  );
}
