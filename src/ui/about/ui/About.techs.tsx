import {
    SiNodedotjs, SiNestjs, SiPython, SiGo,
    SiPostgresql, SiRedis, SiGraphql, SiApachekafka,
    SiDocker, SiGithub, SiLinux, SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export interface Technology {
    name: string;
    icon: React.ReactNode;
}

export const technologies: Technology[] = [
    { name: "Node.js",     icon: <SiNodedotjs   size={22} color="#68a063" /> },
    { name: "NestJS",      icon: <SiNestjs      size={22} color="#e0234e" /> },
    { name: "Python",      icon: <SiPython      size={22} color="#f7c948" /> },
    { name: "Golang",      icon: <SiGo          size={22} color="#00ACD7" /> },
    { name: "PostgreSQL",  icon: <SiPostgresql  size={22} color="#336791" /> },
    { name: "Redis",       icon: <SiRedis       size={22} color="#d82c20" /> },
    { name: "GraphQL",     icon: <SiGraphql     size={22} color="#e535ab" /> },
    { name: "Kafka",       icon: <SiApachekafka size={22} color="#ffffff" /> },
    { name: "gRPC/REST",   icon: <TbApi         size={22} color="#f97316" /> },
    { name: "Docker",      icon: <SiDocker      size={22} color="#2496ed" /> },
    { name: "TypeScript",  icon: <SiTypescript  size={22} color="#3178c6" /> },
    { name: "Linux",       icon: <SiLinux       size={22} color="#f5c518" /> },
];