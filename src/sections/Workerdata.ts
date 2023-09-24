export interface Worker {
    name: string;
    job: string;
    imgSrc: string;
    imgAlt: string;
  }
  
  export const workers: Worker[] = [
    {
      name: 'Mykhailo Kulyk',
      job: 'Founder. Designer',
      imgSrc: '/worker/mykhailo.png',
      imgAlt: 'Worker 1',
    },
    {
      name: 'Nikita Borishchenko',
      job: 'Chief Ux/Ui designer',
      imgSrc: '/worker/nikita.png',
      imgAlt: 'Worker 2',
    },
    {
      name: 'Valeria Lozitskaya',
      job: 'Art director of the 3D department',
      imgSrc: '/worker/valeria.png',
      imgAlt: 'Worker 3',
    },
    {
      name: 'Khrystyna Pechen',
      job: 'Art director of the 2D department',
      imgSrc: '/worker/khrystyna.png',
      imgAlt: 'Worker 4',
    },
  ];
  