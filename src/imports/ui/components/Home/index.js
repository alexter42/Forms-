import { Switch, Route } from 'react-router-dom';

import '/imports/ui/styles/App/HomeContainer.scss';
import '/imports/ui/styles/Navigation/dropzone.scss';
import '/imports/ui/styles/Navigation/sidebar.scss';
import '/imports/ui/styles/Navigation/app.scss';
import '/imports/ui/styles/Navigation/dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Form1 from '/imports/ui/components/Dashboard/Forms';

const Home = () =>
  <div id="outer-container">
    <main id="page-wrap">
      <Switch>
        <Route exact path="/" component={Form1} />
        <Route path="/forms" component={Form1} />
      </Switch>
    </main>
  </div>;

export default Home;
