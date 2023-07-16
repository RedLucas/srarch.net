const Footer = () => {
  const date = new Date()
  return (
    <section className="grid grid-cols-2 gap-2 container py-5">
      <div className="contact-info">
        {" "}
        <strong>SRA Architect Inc.</strong> Office is now closed following the
        tragic and sudden passing of Søren Rasmussen on December 13th, 2022
        <br />
        <strong>T</strong> 604 681 4292 <br />
        <strong>E</strong>{" "}
        <a href="mailto:srarch@srarch.net">srarch@srarch.net</a>
      </div>
      <div className="copyright text-right">
        © {date.getFullYear()} SRA Architect Inc. All Rights Reserved
      </div>
    </section>
  )
}

export default Footer
