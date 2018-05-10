import React from 'react';
import { QueryRenderer,graphql } from 'react-relay';
import environment from '../Environment';
import LinkList from './LinkList';

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    viewer {
      ...LinkList_viewer
    }
  }
`;

class LinkListPage extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment = {environment}
        query = {LinkListPageQuery}
        render = {(data) => {
          if(data.error) {
            return <div>{data.error.message}</div>;
          }
          else if(data.props) {
            console.log('This is what we got in the data as props for the query we just tried to execute: ',data.props)
            return <div><LinkList viewer={data.props.viewer} /></div>;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default LinkListPage;
