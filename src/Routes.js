import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Evolution from './pages/Evolution';
import Articles from './pages/Articles';
import Privacy from './pages/Privacy';

import NoMatch from './pages/NoMatch';

const Routes = [
  {
    path: "/",
    exact: true,
    main: Home
  },
  {
    path: "/about",
    main: About
  },
  {
    path: "/program",
    main: Program
  },
  {
    path: "/evolution",
    main: Evolution
  },
  {
    path: "/articles",
    main: Articles
  },
  {
    path: "/privacy",
    main: Privacy
  },
  {
    main: NoMatch
  }
];

export default Routes;
