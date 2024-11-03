export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="my-4 text-center">
      &copy; {currentYear} Petar Stojanovic
    </footer>
  );
}
