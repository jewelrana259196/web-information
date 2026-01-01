import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  date: string;
  tags: { name: string; class: string }[];
  projects: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Softcafe IT Solution',
      date: 'Feb 2023 – Present',
      tags: [
        { name: 'Angular 11', class: 'tag-angular' },
        { name: 'Java 8+', class: 'tag-java' },
        { name: 'Spring Boot', class: 'tag-spring' }
      ],
      projects: [
        'UMS (Dhaka Bank)',
        'Account Statement',
        'DPS Portal',
        'Vehicle Project (Army)',
        'E-signature (PBL)',
        'Pran Dairies'
      ]
    }
  ];
}
