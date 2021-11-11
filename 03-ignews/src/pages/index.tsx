import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.News</title>
      </Head>
      <main className={styles.contentConteiner}>
        <section className={styles.hero}>
          <span>👏 Olá, Seja bem vindo!</span>
          <h1>
            Novidades sobre o mundo do <span>React.</span>
          </h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por {product.amount} mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Menina Estudando" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JudczKwICLeQV4RJHPj5Y1m");
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
  };
};
