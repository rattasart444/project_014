import Link from 'next/link'

export default function Service() {
  return (
    <div>
      <center><Link href="/">Home</Link> | <Link href="/about">About</Link>  | <Link href="/service">Service</Link>  | <Link href="/contact">Contact</Link></center>
      <center>Service Page</center></div>
  );
}
