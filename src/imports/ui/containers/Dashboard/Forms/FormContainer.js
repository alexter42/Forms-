import ReactDOMServer from 'react-dom/server';
import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Form from '../../../components/Dashboard/Forms/Form1';

const FormContainer = compose(
  graphql(
    gql`
      mutation uploadCD($conversation: ConversationData) {
        uploadConversationData(conversation: $conversation)
      }
    `,
    {
      name: 'uploadCD',
    }
  ),
  withHandlers({
    handleConversationData: ({ uploadCD }) => conversation => {
      console.log(conversation, 'handle');
      uploadCD({
        variables: { conversation },
      });
    },
  })
)(Form);

export default FormContainer;
