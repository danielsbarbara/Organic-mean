// Página de Produtos
import React, { useEffect, useState } from "react";
import { CollectionBar } from "../components/CollectionBar";
import { HomePageCards } from "../components/HomePageCards";
import Preloader from "../components/PreLoader";

export function ProductsPage() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ category: "All", collection: [] });

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Define o loading como true ao iniciar o carregamento dos produtos

      const option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filter),
      };

      const res = await fetch(
        "https://organic-mean.onrender.com/api/v1/products",
        option
      );

      if (res.status === 200) {
        const body = await res.json();
        setInfo(body.result);
      }

      setLoading(false); // Define o loading como false após o carregamento dos produtos
    }

    fetchData();
  }, [filter]);

  return (
    <div>
      <div className="mb-20">
        <CollectionBar setFilter={setFilter} />
      </div>
      <Preloader visible={loading} />
      {!loading && <HomePageCards info={info} />}
    </div>
  );
}
