import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

// import { dataItems } from '../data';

const item = () => {
  const [task, setTask] = useState([]);

  const router = useRouter();
  const { index } = router.query;

  useEffect(() => {
    setTask(JSON.parse(localStorage?.getItem("data"))[index]);
  }, []);

  return (
    <main className={`${styles.main}`}>

    <Navbar />

    <div class="m-3 block h-40 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link 
        href="/"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Go Back
        
      </Link>
      <a href="#">
        <h5 class="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        { task?.title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      { task?.body}
      </p>
      
    </div>

    </main>

    // <div>item { task?.title}</div>
  );
};

export default item;
