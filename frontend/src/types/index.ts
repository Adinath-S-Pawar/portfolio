export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  session_id?: string;
}

export interface ChatResponse {
  reply: string;
  session_id: string;
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface Resume {
  name: string;
  title: string;
  contact: {
    mobile: string;
    email: string;
    linkedin: string;
    github: string;
  };
  objective: string;
  education: Education[];
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    tools: string[];
    os: string[];
    testing: string[];
  };
  projects: Project[];
  methodologies: string[];
}