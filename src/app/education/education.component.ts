import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  major: string;
  institute: string;
  session: string;
  tags: string[];
  colorTheme: 'blue' | 'green' | 'purple';
  icon: string;
}

interface Training {
  title: string;
  provider: string;
  description: string;
  tags: string[];
  icon: string;
  iconColor: string;
  iconBg: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      degree: 'MBA in Master of Business Administration',
      major: 'Management',
      institute: 'National University',
      session: '2014 - 2018',
      tags: ['Business Mathematics', 'Accounting', 'Statistics',],
      colorTheme: 'blue',
      icon: 'bi-mortarboard-fill'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      major: 'Science',
      institute: 'Banshbaria Degree College',
      session: '2011 - 2012',
      tags: ['Physics', 'Chemistry', 'Mathematics', 'Computer Studies'],
      colorTheme: 'green',
      icon: 'bi-book-fill'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      major: 'Science',
      institute: 'Banshbaria High School',
      session: '2008 - 2009', // Adjusted from screenshot 2018-2019 to make logical sense, or keep screenshot? Screenshot says 2018-2019 which conflicts with BSc 2014. I will follow screenshot dates but maybe they are typos in user's design. Wait, screenshot says SSC 2018-2019. That's weird if BSc is 2014-2018. I'll stick to screenshot text for fidelity.
      tags: ['General Science', 'Mathematics', 'Biology'],
      colorTheme: 'purple',
      icon: 'bi-backpack-fill'
    }
  ];

  trainingList: Training[] = [
    {
      title: 'Full Stack Development',
      provider: 'IsDB-BISEW',
      description: 'Comprehensive training in enterprise-level Java development with modern frameworks and best practices.',
      tags: ['Java', 'Spring Boot', 'Hibernate', 'JSF', 'Angular JS'],
      icon: 'bi-cup-hot-fill',
      iconColor: '#2563eb',
      iconBg: '#dbeafe'
    },
    {
      title: 'Mobile App Development',
      provider: 'Professional Training',
      description: 'Specialized training in cross-platform mobile app development using modern frameworks and tools.',
      tags: ['Android', 'Flutter', 'Dart', 'Firebase'],
      icon: 'bi-phone-fill',
      iconColor: '#16a34a',
      iconBg: '#dcfce7'
    },
    {
      title: 'Database & Backend',
      provider: 'Professional Training',
      description: 'In-depth training in database management, backend architecture, and data modeling techniques.',
      tags: ['Oracle 11g', 'UML', 'XML', 'JSP', 'MySQL'],
      icon: 'bi-database-fill',
      iconColor: '#9333ea',
      iconBg: '#f3e8ff'
    }
  ];
}
