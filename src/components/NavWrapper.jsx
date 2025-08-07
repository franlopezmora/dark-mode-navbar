'use client';

import FloatingNav from './FloatingNav';
import {
  HomeIcon,
  TrophyIcon,
  PlusIcon,
  CalendarIcon,
  UserIcon,
} from 'lucide-react';

export default function NavWrapper() {
  const navItems = [
    { icon: <HomeIcon />,      label: 'Inicio',     active: true,  onClick: () => console.log('Inicio') },
    { icon: <TrophyIcon/>,     label: 'Torneos',    active: false, onClick: () => console.log('Torneos') },
    { icon: <PlusIcon/>,       label: 'Crear',      active: false, onClick: () => console.log('Crear') },
    { icon: <CalendarIcon/>,   label: 'Calendario', active: false, onClick: () => console.log('Calendario') },
    { icon: <UserIcon/>,       label: 'Perfil',     active: false, onClick: () => console.log('Perfil') },
  ];

  return <FloatingNav items={navItems} />;
}
