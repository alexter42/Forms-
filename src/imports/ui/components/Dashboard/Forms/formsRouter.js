import { Col } from 'reactstrap';
import Form1 from '/imports/ui/containers/Dashboard/Forms/FormContainer';

import { Switch, Route, Redirect } from 'react-router-dom';

const FormsRouter = () =>
  <Col xs="12" sm="12" lg="12" style={{ height: `${100}%` }}>
    <Switch>
      <Route exact path="/forms" component={Form1} />
      <Route path="/forms/user1" component={Form1} />
      <Route path="/forms/user2" component={Form1} />
      <Route render={() => <Redirect to="/forms" />} />
    </Switch>
  </Col>;

export default FormsRouter;
