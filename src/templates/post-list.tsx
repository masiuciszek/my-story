import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import Post from "../components/blog/Post";
import { Page, PushDown } from "../components/styled/Elements";
import PostListNavigation from "../components/post_list_navigation";
import TagsNavigation from "../components/tags_navigation";
import Title from "../components/Title";

interface Edges {
  node: {
    frontmatter: FrontMatter;
  };
}

interface Posts {
  POSTS: {
    edges: Array<Edges>;
  };
}

interface PageContextData {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  tags: string[];
}

const PostListTemplate: React.FC<PageProps<Posts, PageContextData>> = ({
  data,
  pageContext,
}) => {
  const { edges } = data.POSTS;
  const { currentPage, numPages, tags } = pageContext;

  return (
    <SiteProvider>
      <Layout>
        <Page>
          <Title className="post-list-title" title="Posts" center />
          <TagsNavigation tags={tags} istitle />
          {edges.map(({ node }) => (
            <Post key={node.frontmatter.title} postData={node} />
          ))}
          <PostListNavigation currentPage={currentPage} numPages={numPages} />
          <PushDown padding={2} />
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export const PAGE_QUERY = graphql`
  query($skip: Int!, $limit: Int!) {
    POSTS: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "dddd, MMMM Do YYYY")
            path
            spoiler
            tags
          }
        }
      }
    }
  }
`;

export default PostListTemplate;
