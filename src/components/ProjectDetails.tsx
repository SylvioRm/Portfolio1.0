import Title from "./Title";

const details = [
  {
    id: 1,
    title: "Soloprofit",
    image: "#",
  },
  {
    id: 2,
    title: "Gestion de paiement d'écolage",
    image: "#",
  },
  {
    id: 3,
    title: "Alexia",
    image: "#",
  },
  {
    id: 4,
    title: "Q&A",
    image: "#",
  },
];

const ProjectDetails = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-4">
          {details.map((detail)=>(
            <div className="col-12" key={detail.id}>
                <Title>{detail.title}</Title>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
