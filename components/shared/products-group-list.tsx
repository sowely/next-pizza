'use client';

import React from "react";
import { useIntersection } from "react-use";
import { Title } from "@/components/shared/title";
import { ProductCard } from "@/components/shared/product-card";
import { cn } from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number; //
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId);

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      // будем обновлять глобальное categoryId через useCategoryStore
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            count={product.count}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            />
        ))}
      </div>
    </div>
  );
};
