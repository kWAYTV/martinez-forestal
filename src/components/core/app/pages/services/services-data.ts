import { FileCheck, type LucideIcon, Tractor, TreePine } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    title: 'Gestión Forestal',
    description:
      'Planificación y ejecución de proyectos forestales, incluyendo plantaciones, podas y talas controladas.',
    icon: TreePine,
    features: [
      {
        title: 'Plantaciones',
        description:
          'Diseño y ejecución de plantaciones forestales sostenibles.'
      },
      {
        title: 'Podas',
        description: 'Mantenimiento y cuidado profesional del arbolado.'
      },
      {
        title: 'Talas',
        description: 'Talas controladas con máxima seguridad y eficiencia.'
      }
    ]
  },
  {
    title: 'Servicios de Maquinaria',
    description:
      'Maquinaria especializada para todo tipo de trabajos forestales y movimientos de tierra.',
    icon: Tractor,
    features: [
      {
        title: 'Procesadoras',
        description: 'Equipos de última generación para procesado de madera.'
      },
      {
        title: 'Retroexcavadoras',
        description: 'Movimientos de tierra y preparación de terrenos.'
      },
      {
        title: 'Autocargadores',
        description: 'Transporte eficiente de madera en el monte.'
      }
    ]
  },
  {
    title: 'Trámites y Permisos',
    description:
      'Gestión integral de documentación y permisos necesarios para trabajos forestales.',
    icon: FileCheck,
    features: [
      {
        title: 'Licencias',
        description: 'Tramitación de permisos de tala y actividades forestales.'
      },
      {
        title: 'Certificaciones',
        description: 'Gestión de certificaciones forestales y ambientales.'
      },
      {
        title: 'Asesoría',
        description: 'Consultoría especializada en normativa forestal.'
      }
    ]
  }
];
