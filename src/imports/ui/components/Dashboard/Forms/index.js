import Header from './Header';
import Body from './formsRouter';
import { Row, Col, Card, CardHeader } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

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
      <Col xs="12" sm="12" lg="12">
        <Card
          style={{
            height: `${90}%`,
            marginLeft: `${15}px`,
            width: `${80}%`,
            margin: 'auto',
            marginTop: `${60}px`,
          }}
        >
          <CardHeader>
            <FormattedMessage id="auth.button.signIn.title" />
          </CardHeader>
          <Body />
        </Card>
      </Col>
    </Row>
  </div>;

export default Forms;
