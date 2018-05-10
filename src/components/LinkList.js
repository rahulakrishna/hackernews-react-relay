import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class LinkList extends React.Component {
  render() {
    return(
      <div>
        Hello World!
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
