// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill'),
  // },
  {
    title: 'patient',
    path: '/dashboard/patient',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'prescription',
    path: '/dashboard/prescription',
    icon: getIcon('icon-park-solid:prescription'),
  },
  {
    title: 'checkup',
    path: '/dashboard/checkup',
    icon: getIcon('tabler:checkup-list'),
  },
  // {
  //   title: 'doctor',
  //   path: '/dashboard/doctor',
  //   icon: getIcon('fontisto:doctor'),
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
