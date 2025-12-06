import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>SRA Architect Inc.</h1>
      <h2>
        SRA Architects Inc. is a mid-sized architectural practice providing
        comprehensive architectural, planning and interior design services on a
        wide range of developments throughout British Columbia, Alberta and the
        Western States.
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <p>
            The principal Soren Rasmussen is an architect with 30 years
            experience and a reputation for successful projects. These projects
            are often unique in nature and highly demanding throughout the
            design and approvals process. The office maintains an excellent
            track record of proficiently completed projects, often complicated
            and without precedent. The result has been a high level of design
            and quality of detail. The fundamental ability to listen and the
            capability to negotiate has been an important pre-requisite to many
            projects.
          </p>
        </div>
        <div>
          <h3>Criteria that we consider important to good design are:</h3>
          <ul>
            <li>
              Integration of architectural, interior, structural, mechanical and
               electrical systems within an overall design concept.
            </li>
            <li>Appropriateness of design to the client’s requirements.</li>
            <li>Creativity and originality of design</li>
            <li>Cost effective solutions</li>
            <li>Strict attention to detail</li>
          </ul>
          <p>
            The highest motivation in the design of projects is to fulfill the
            client’s requirements of program, function and creativity with
            client participation, and to create stimulating spaces, sensitively
            conceived and enjoyed by both occupant and visitors.
          </p>
        </div>
      </div>
      <h2>Awards</h2>
      <ul>
        <li>
          <strong>2013</strong>
          Trend Magazine Top 50 American Homes |
          <em>Sunshine Coast Retreat, Sunshine Coast BC</em>
        </li>
        <li>
          <strong>2013</strong>
          Trend Magazine Top 50 American Kitchens |
          <em>Sunshine Coast Retreat, Sunshine Coast BC</em>
        </li>
        <li>
          <strong>2012</strong>
          Excellence in Single Family Residential - Masonry Institute of BC |
          <em>Sunshine Coast Retreat, Sunshine Coast BC</em>
        </li>
        <li>
          <strong>2006</strong>
          Best Single Family Residential - BC Concrete Association |
          <em>Tofino Residence Tofino, BC</em>
        </li>
        <li>
          <strong>1999</strong>
          Best Single Family Detached Home - Canadian Home Builders Association
          of BC |<em>Kerrisdale Residence Vancouver, BC</em>
        </li>
        <li>
          <strong>1997</strong>
          Best Multi-Family Development - Canadian Home Builders Association of
          BC |<em>Tsatsu Shores Tsawwassen, BC</em>
        </li>
        <li>
          <strong>1989</strong>
          Outstanding Development - City of Vancouver |
          <em>Broadway St. location Vancouver, BC</em>
        </li>
        <li>
          <strong>1989</strong>
          Silver Award - Interior Design Institute of BC |
          <em>The Landing 375 Water St. Vancouver, BC</em>
        </li>
        <li>
          <strong>1989</strong>
          Creative Adaptive reuse of a Historic Warehouse Building - Heritage
          Society of BC |<em>The Landing 375 Water St. Vancouver, BC</em>
        </li>
        <li>
          <strong>1988</strong>
          Significant Contribution to Conservation of BC Heritage - Heritage
          Society of BC |<em>8 Pender St W, Sam Kee Building Vancouver, BC</em>
        </li>
        <li>
          <strong>1987</strong>
          Heritage Conservation and Skillful Restoration – City of Vancouver
          Heritage Award |<em>Westmount Vancouver, BC</em>
        </li>
      </ul>
    </>
  );
}
