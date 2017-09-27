import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Card, CardHeader } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        age: '',
        sex: '',
        gender: '',
        birthPlace: '',
        neighborhood: '',
        education: '',
        ocupation: '',
        language: '',
        usersRelationship: '',
      },
    };
  }

  onChange = target => {
    console.log(target.value, target.name);
    let newValues = Object.assign({}, this.state.values);

    newValues[target.name] = target.value;

    this.setState({ values: newValues });
  };

  render() {
    return (
      <Col xs="12" sm="12" lg="12">
        <Card
          style={{
            height: `${20}%`,
            width: `${80}%`,
            margin: 'auto',
            marginTop: `${60}px`,
            padding: `${30}px`,
          }}
        >
          <CardHeader
            style={{
              marginBottom: `${20}px`,
            }}
          >
            {'Persona'}
          </CardHeader>
          <Form inline>
            <FormGroup>
              <Input
                type="number"
                placeholder="Age"
                name="age"
                id="age"
                defaultValue="root"
                onChange={e => this.onChange(e.target)}
              />
            </FormGroup>
            <FormGroup>
              <Input type="select" name="sex" id="sex" onChange={e => this.onChange(e.target)}>
                <option>Masculino</option>
                <option>Femenino</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="select"
                name="sex"
                id="exampleSelect"
                onChange={e => this.onChange(e.target)}
              >
                <option>Heterosexual</option>
                <option>Homosexual</option>
                <option>Bisexual</option>
              </Input>
            </FormGroup>
          </Form>
        </Card>
        <Card
          style={{
            height: `${80}%`,
            width: `${80}%`,
            margin: 'auto',
            marginTop: `${20}px`,
            padding: `${30}px`,
          }}
        >
          <CardHeader
            style={{
              marginBottom: `${20}px`,
            }}
          >
            {'Geodata'}
          </CardHeader>
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Birth Place</Label>
              <Input
                type="select"
                name="birthPlace"
                id="exampleSelect"
                onChange={e => this.onChange(e.target)}
              >
                <option>Aguascalientes</option>
                <option>Morelos</option>
                <option>Sinaloa</option>
                <option>Tabasco</option>
                <option>Campeche</option>
              </Input>
            </FormGroup>
            <Label for="exampleSelect">Residence</Label>
            <FormGroup>
              <Label for="exampleEmail">Country</Label>
              <Input
                type="select"
                name="country"
                id="exampleEmail"
                placeholder="Country"
                onChange={e => this.onChange(e.target)}
              >
                <option>Mexico</option>
              </Input>
            </FormGroup>{' '}
            <FormGroup>
              <Label for="exampleEmail">State</Label>
              <Input
                type="select"
                name="state"
                id="exampleSelect"
                onChange={e => this.onChange(e.target)}
              >
                <option>Aguascalientes</option>
                <option>Morelos</option>
                <option>Sinaloa</option>
                <option>Tabasco</option>
                <option>Campeche</option>
              </Input>{' '}
            </FormGroup>{' '}
            <FormGroup>
              <Label for="exampleEmail">City</Label>
              <Input
                type="select"
                name="city"
                id="exampleSelect"
                onChange={e => this.onChange(e.target)}
              >
                <option>Ciudad de Mexico</option>
              </Input>{' '}
            </FormGroup>{' '}
            <FormGroup>
              <Label for="examplePassword">Neighborhood</Label>
              <Input
                type="select"
                name="neighborhood"
                id="examplePassword"
                placeholder="Neighborhood"
                onChange={e => this.onChange(e.target)}
              >
                <option>Álvaro Obregón</option>
                <option>Azcapotzalco</option>
                <option>Venustiano Carranza</option>
                <option>Tláhuac</option>
              </Input>
            </FormGroup>{' '}
          </Form>
          <Button color="primary" onClick={() => console.log(this.state.values)}>
            Pasar con usuario2
          </Button>
        </Card>
      </Col>
    );
  }
}
