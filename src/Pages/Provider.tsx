import Header from "@/components/Provider/Header";
import ProviderDirectory from "@/components/Provider/ProviderDirectory";
import React from "react";

const Provider: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="min-h-screen">
        <ProviderDirectory />
      </div>
    </div>
  );
};

export default Provider;
