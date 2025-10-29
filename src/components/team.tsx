import { Users } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Sara",
      role: "Lider",
      bio: "Estudiante de Ingeniería Mecatrónica",
      photo: "sara-lider.jpeg",
    },
    {
      name: "James",
      role: "Diseño y ensamblaje de la pulsera inteligente",
      bio: "Estudiante de Ingeniería Mecatrónica",
      photo: "",
    },
    {
      name: "Virgin",
      role: "Desarrolladora IoT",
      bio: "Estudiante de Ingeniería Mecatrónica",
      photo: "",
    },
    {
      name: "Joselyn",
      role: "Desarrolladora Web",
      bio: "Estudiante de Ingeniería de Sistemas",
      photo: "",
    },
  ]

  return (
    <section id="equipo" className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-left">Nuestro Equipo</h2>
           <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-2 border-primary/30 shadow-lg
                     text-center flex flex-col items-center"
            >
              {/* Foto del miembro */}
              {/* {member.photo && (
            <div className="w-28 h-28 rounded-full mb-4 overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          )} */}
              <div className="w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              {member.role && <p className="text-sm font-medium text-primary mb-2">{member.role}</p>}
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}