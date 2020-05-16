import Head from "next/head";
import Link from "next/link";
import fs from "fs";

const Index = ({ filenames }) => {
  return (
    <div className="container">
      <Head>
        <title>Nicholas Sebastian's Website</title>
        <meta name="author" content="Nicholas Sebastian Hendrata"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {filenames.map((filename) => {
          return (
            <div key={filename}>
              <Link href={"/blogs/" + filename}>
                <a>{filename}</a>
              </Link>
            </div>
          );
        })}
      </header>

      <main>
        <p>body</p>
      </main>

      <footer>
        <p>footer</p>
      </footer>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

// Generates a props object to be used in the template.
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const filenames = files.map((filename) => filename.replace(".md", ""));

  return {
    props: {
      filenames: filenames,
    },
  };
};

export default Index;
