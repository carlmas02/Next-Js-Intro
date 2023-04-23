import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import { dataItems } from "./data";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [dataItems, updateItems] = useState([]);

  const addData = (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    console.log(title);

    updateItems(() => {
      const data = [...dataItems];
      data.push({
        no: dataItems.length,
        title: e.target[0].value,
        body: e.target[1].value,
      });

      localStorage.setItem('data',JSON.stringify(data))
      e.target[0].value = '';
      e.target[1].value = '';
      return data;
    });

    console.log(dataItems);
  };

  useEffect(() => {
    {
      localStorage.getItem("data") != null ?
       null
      
       :

       localStorage.setItem('data',JSON.stringify([]))
       updateItems(JSON.parse(localStorage.getItem("data")))


    }
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script />
      </Head>

      <main className={`${styles.main}`}>
        <h1 class="p-4 mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          NoteMeter
        </h1>

        <form className={`${styles.form}`} onSubmit={addData}>
          <input
            placeholder="title"
            type="text"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="body"
            type="text"
            id="small-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <input
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </form>

        {/* <form onSubmit={addData}>
          <input name="title" />
          <br />

          <input name="task" />

          <input type="submit" />
        </form> */}
        {/* className={styles.card_section} */}
        <div>
          {dataItems.map((item, index) => {
            return (
              <Link
                href={`item/${item.no}`}
                key={index}
                class="m-3 block h-40 w-96 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {item.body}
                </p>
              </Link>

              // <Link href={`item/${item.no}`} key={index}>
              //   <div className={styles.card}>
              //     <h3>{item.title}</h3>
              //     <p>S{item.body}</p>
              //   </div>
              // </Link>
            );
          })}
        </div>
      </main>

      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
}