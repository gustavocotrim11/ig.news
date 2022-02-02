import { GetStaticProps } from "next";
import Head from "next/head";

import * as Prismic from "@prismicio/client";

import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>18 de Set de 2020</time>
            <strong>
              Obtendo o status de progresso do envio de dados com Axios
            </strong>
            <p>
              Vamos mostrar na prática como obter o progresso de cada requisição
              HTTP sendo feita através do método POST, do front end para o back
              end utilizando o Axios.
            </p>
          </a>
          <a href="">
            <time>18 de Set de 2020</time>
            <strong>
              Obtendo o status de progresso do envio de dados com Axios
            </strong>
            <p>
              Vamos mostrar na prática como obter o progresso de cada requisição
              HTTP sendo feita através do método POST, do front end para o back
              end utilizando o Axios.
            </p>
          </a>
          <a href="">
            <time>18 de Set de 2020</time>
            <strong>
              Obtendo o status de progresso do envio de dados com Axios
            </strong>
            <p>
              Vamos mostrar na prática como obter o progresso de cada requisição
              HTTP sendo feita através do método POST, do front end para o back
              end utilizando o Axios.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.get({
    predicates: Prismic.predicate.at("document.type", "post"),
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  });

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
