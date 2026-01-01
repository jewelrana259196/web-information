import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'UMS (Dhaka Bank)',
      description: 'A secure and scalable User Management System (UMS) developed for Dhaka Bank to streamline user operations and enhance security protocols.',
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=UMS+Dhaka+Bank',
      tags: ['Angular', 'Spring Boot', 'Oracle'],
      link: '#'
    },
    {
      title: 'e-Signature Management System',
      description: 'A secure and efficient system for managing digital signatures to automate document signing workflows.',
      image: 'https://placehold.co/600x400/1e293b/ffffff?text=e-Signature',
      tags: ['Angular 11', 'Java 8', 'Jasper Reports'],
      link: '#'
    },
    {
      title: 'Train Matrix',
      description: 'Train Matrix is a modern Angular 19 web application designed to provide real-time train seat availability and booking information.',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Train+Matrix',
      tags: ['Angular 19'],
      link: '#'
    }
  ];
}
