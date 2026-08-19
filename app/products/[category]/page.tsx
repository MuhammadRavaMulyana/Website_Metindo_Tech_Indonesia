import { notFound } from "next/navigation";
import { getCategoryById, categories } from "@/data/products";
import CategoryContent from "./CategoryContent";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryById(params.category);

  if (!category) {
    notFound();
  }

  return <CategoryContent category={category} />;
}
