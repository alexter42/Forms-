import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/sidebar.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Forms from '/imports/ui/components/Dashboard/Forms';

const Home = () =>
  <div id="outer-container">
    <main id="page-wrap">
      <Switch>
        <Route exact path="/" component={Forms} />
        <Route path="/forms" component={Forms} />
      </Switch>
    </main>
  </div>;

export default Home;
