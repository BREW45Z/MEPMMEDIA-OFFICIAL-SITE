import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import About from "@layouts/About";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "About" ? (
        <About data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  try {
    const allslugs = getSinglePage("content");
    const slugs = allslugs.map((item) => item.slug);
    const paths = slugs.map((slug) => ({
      params: {
        regular: slug,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  try {
    const { regular } = params;
    const regularPage = await getRegularPage(regular);

    if (!regularPage) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        slug: regular,
        data: regularPage,
      },
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      props: {
        error: 'Failed to fetch data',
      },
    };
  }
};
