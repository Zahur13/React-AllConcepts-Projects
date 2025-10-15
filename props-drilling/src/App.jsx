import Card from "./components/Card";

const App = (props) => {
  const jobOpenings = [
    {
      id: 1,
      company: "Apple",
      companyLogo:
        "https://imgs.search.brave.com/sCLiE7Kj_D5p3xTgqVyWBhKAEmIJDMcgzsrkiK9uOS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9hcHBsZS1sb2dv/LTQ0LTMwMHgzMDAu/cG5n",
      role: "Full Stack Web Developer",
      postedDate: "5 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$165/hr",
      location: "Cupertino, CA",
    },
    {
      id: 2,
      company: "Google",
      companyLogo:
        "https://imgs.search.brave.com/LvK0nnukShoBkIAFqmfj1DctGPoIoRe1GsIMIQ0PmHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcnlz/dGFscG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NS9nb29nbGUtbG9n/by1wbmcucG5n",
      role: "UI/UX Designer",
      postedDate: "8 days ago",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$120/hr",
      location: "Remote (US)",
    },
    {
      id: 3,
      company: "Netflix",
      companyLogo:
        "https://imgs.search.brave.com/IBvOHEZ2myh_OBI-T8r7PAn7o-Zt94DDJeKYP-z_FK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ViL2Fh/LzQ0L2ViYWE0NDFk/ZjU3OGEzZTQ4ZTI2/ZWYxYTE1YTA0ZTNj/LmpwZw",
      role: "DevOps Engineer",
      postedDate: "2 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$180,000 - $240,000",
      location: "Los Gatos, CA",
    },
    {
      id: 4,
      company: "Microsoft",
      companyLogo:
        "https://imgs.search.brave.com/nW8P3ZD-w7GAk57aJZuTktuXA4NP5WfANEbUkXrOCIs/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5w/bmdtYXJ0LmNvbS9m/aWxlcy80L01pY3Jv/c29mdC1Mb2dvLVBO/Ry1QaG90b3MucG5n",
      role: "Software Engineer I",
      postedDate: "4 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      salary: "$130/hr",
      location: "Redmond, WA",
    },
    {
      id: 5,
      company: "Spotify",
      companyLogo:
        "https://imgs.search.brave.com/NqBGOqNucUSytAldKCJG2y5yBpeDWoLGM24JndJHNug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU3Bv/dGlmeS1Mb2dvLVBO/Ry1QaG90b3MucG5n",
      role: "Frontend Developer",
      postedDate: "6 days ago",
      tag1: "Part Time",
      tag2: "Hybrid",
      salary: "$115/hr",
      location: "New York, NY",
    },
    {
      id: 6,
      company: "Tesla",
      companyLogo:
        "https://imgs.search.brave.com/4Pz4Gksja_VB-RqZFpbnazZsJhfPcmtWIN6BBCMYcqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U4LzY5/LzhhL2U4Njk4YWZm/NGVlMDFmNTIxNTc2/MWU0YWE3NzIzNGI4/LmpwZw",
      role: "Software Engineer - Autopilot",
      postedDate: "2 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$170/hr",
      location: "Palo Alto, CA",
    },
    {
      id: 7,
      company: "Adobe",
      companyLogo:
        "https://imgs.search.brave.com/szwVYyj9nIXppAwe7H1Zy1A6DC2hAI6AaL4AIHcvVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
      role: "Product Designer",
      postedDate: "2 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$135/hr",
      location: "San Jose, CA",
    },
    {
      id: 8,
      company: "Amazon",
      companyLogo:
        "https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
      role: "Cloud Infrastructure Engineer",
      postedDate: "6 days ago",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$160/hr",
      location: "Remote (US)",
    },
    {
      id: 9,
      company: "Uber",
      companyLogo:
        "https://imgs.search.brave.com/zQoLIGGeRpyy3KkZv6U2OALrtwpJKJHOAfRlQNziyfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90Yi1z/dGF0aWMudWJlci5j/b20vcHJvZC91ZGFt/LWFzc2V0cy80ODBl/YjA2Ni0yMzg5LTQ0/MmMtYjBmNy0xY2Rj/YWE2OGE2NDkuc3Zn",
      role: "Mobile App Developer",
      postedDate: "2 days ago",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$145/hr",
      location: "San Francisco, CA",
    },
    {
      id: 10,
      company: "Airbnb",
      companyLogo:
        "https://imgs.search.brave.com/UmK_QkHx_Y1WLDkLD2GRW69qTAJ1-bwOR_4lwE30aqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aGFzLWFueW9uZS1u/b3RpY2VkLWhpcy1s/b2dvLWtpbmRhLWxv/b2tzLWxpa2UtdGhl/LWFpcmJuYi1sb2dv/LXYwLWd4YWg3Z2Np/Y2k3ZTEuanBlZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz1jODRk/YjM4NjljYWNlZTYw/YTI5NjcwNzM2Mjdi/NDdhYWEzY2Y0OWQz",
      role: "Data Engineer",
      postedDate: "8 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$175/hr",
      location: "San Francisco, CA",
    },
  ];

  return (
    <div className="w-full h-full p-10 bg-black flex gap-10 flex-wrap">
      {jobOpenings.map((e, id) => {
        return (
          <Card
            key={id}
            company={e.company}
            companyLogo={e.companyLogo}
            role={e.role}
            postedDate={e.postedDate}
            tag1={e.tag1}
            tag2={e.tag2}
            salary={e.salary}
            location={e.location}
          />
        );
      })}
    </div>
  );
};

export default App;
