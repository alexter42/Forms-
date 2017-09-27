import Header from './Header';
import Body from './formsRouter';
import { Row, Col, Card, CardHeader } from 'reactstrap';

const Forms = () =>
  <div
    style={{
      width: `${100}%`,
      height: `${100}%`,
      marginLeft: `${15}px`,
      marginRight: `${15}px`,
      paddingBottom: `${25}px`,
    }}
  >
    <Header />
    <Row>
      <Body />
    </Row>
  </div>;

export default Forms;
