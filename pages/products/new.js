import ProductForm from "@/components/ProductsForm";
import Layout from "@/components/layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1 className={"text-blue-900 mb-2 text-xl"}>New Product</h1>
      <ProductForm />
    </Layout>
  );
}
