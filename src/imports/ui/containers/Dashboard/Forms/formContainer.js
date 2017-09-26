import { compose, withState, lifecycle } from 'recompose';
import '/imports/ui/styles/App/HomeContainer.scss';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Capacity from '../../../components/Dashboard/Forms/Capacity';

const CapacityContainer = compose(
  graphql(gql`
    query uploadPP {
      getPowerPlants
    }
  `)
)(Capacity);

export default CapacityContainer;
