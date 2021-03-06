import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Link from './Link';

class LinkList extends React.Component {
  render() {
    return(
      <div>
        {this.props.viewer.allLinks.edges.map(({node}) =>{
          console.log(node);
          return <Link key={node.__id} link={node} />
        }
        )}
      </div>
    )
  }
}

// export default LinkList;

export default createFragmentContainer(LinkList,
graphql`
    fragment LinkList_viewer on Viewer {
      allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "LinkList_allLinks", filters: []) {
        edges {
          node {
            ...Link_link
          }
        }
      }
    }
  `
);
