import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 gap-2 container px-3 py-10 max-md:text-center">
      <div className="contact-info">
        {" "}
        <strong>SRA Architect Inc.</strong> Office is now closed following the
        tragic and sudden{" "}
        <Link href="/memory">
          passing of Søren Rasmussen on December 13th, 2022
        </Link>
        <br />
        <strong>T</strong> 604 681 4292 <br />
        <strong>E</strong>{" "}
        <a href="mailto:srarch@srarch.net">srarch@srarch.net</a>
      </div>
      <div className="copyright content flex justify-center md:justify-end items-end">
        © {date.getFullYear()} SRA Architect Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
