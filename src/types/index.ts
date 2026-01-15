export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
}

export interface Technology {
  name: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  about: {
    story: string;
    additional: string;
  };
  email: string;
  profileImage: string;
}
